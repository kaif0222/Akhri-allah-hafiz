/* extras.js — stats counters, paper-plane game, guestbook (v9). */
(function () {
  "use strict";

  /* ---------- Animated stats counters ---------- */
  var nums = document.querySelectorAll(".stat-num");
  function runCounter(el) {
    var target = parseInt(el.getAttribute("data-target"), 10);
    if (!target) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      el.textContent = target;
      return;
    }
    var start = null, dur = 1200;
    function step(ts) {
      if (!start) start = ts;
      var p = Math.min((ts - start) / dur, 1);
      var eased = 1 - Math.pow(1 - p, 3);
      el.textContent = Math.round(eased * target);
      if (p < 1) requestAnimationFrame(step);
    }
    requestAnimationFrame(step);
  }
  if ("IntersectionObserver" in window && nums.length) {
    var io = new IntersectionObserver(function (entries, ob) {
      entries.forEach(function (e) {
        if (e.isIntersecting) { runCounter(e.target); ob.unobserve(e.target); }
      });
    }, { threshold: 0.4 });
    nums.forEach(function (n) { io.observe(n); });
  } else {
    nums.forEach(function (n) {
      n.textContent = n.getAttribute("data-target") || n.textContent;
    });
  }

  /* ---------- Paper-plane game ---------- */
  var canvas = document.getElementById("gameCanvas");
  if (canvas) {
    var ctx = canvas.getContext ? canvas.getContext("2d") : null;
    if (ctx) {
      var W = canvas.width, H = canvas.height;
      var scoreEl = document.getElementById("gameScore");
      var bestEl = document.getElementById("gameBest");
      var startBtn = document.getElementById("gameStart");
      var gameMsgEl = document.getElementById("gameMsg");
      var BEST_KEY = "aakhri-best-score";
      var best = 0;
      try { best = parseInt(localStorage.getItem(BEST_KEY), 10) || 0; } catch (e) {}
      if (bestEl) bestEl.textContent = best;

      var state = "idle"; /* idle | playing | over */
      var plane, obstacles, stars, frame, score;

      var starField = [];
      for (var i = 0; i < 46; i++) {
        starField.push({ x: Math.random() * W, y: Math.random() * H, r: Math.random() * 1.6 + 0.6, a: Math.random() * 0.7 + 0.3 });
      }

      function resetGame() {
        plane = { x: 90, y: H / 2, vy: 0, r: 16 };
        obstacles = [];
        stars = [];
        frame = 0;
        score = 0;
        if (scoreEl) scoreEl.textContent = "0";
      }

      function drawSky() {
        var g = ctx.createLinearGradient(0, 0, 0, H);
        g.addColorStop(0, "#131a2e");
        g.addColorStop(1, "#3a1a3e");
        ctx.fillStyle = g;
        ctx.fillRect(0, 0, W, H);
        ctx.fillStyle = "#ffffff";
        starField.forEach(function (s) {
          ctx.globalAlpha = s.a;
          ctx.beginPath();
          ctx.arc(s.x, s.y, s.r, 0, Math.PI * 2);
          ctx.fill();
        });
        ctx.globalAlpha = 1;
      }

      function drawPlane() {
        ctx.save();
        ctx.translate(plane.x, plane.y);
        ctx.rotate(Math.max(-0.45, Math.min(0.55, plane.vy * 0.045)));
        ctx.fillStyle = "#f4ead8";
        ctx.beginPath();
        ctx.moveTo(-18, 0);
        ctx.lineTo(20, -12);
        ctx.lineTo(8, 2);
        ctx.lineTo(20, 12);
        ctx.closePath();
        ctx.fill();
        ctx.fillStyle = "#cdbfa6";
        ctx.beginPath();
        ctx.moveTo(8, 2);
        ctx.lineTo(20, -12);
        ctx.lineTo(12, 4);
        ctx.closePath();
        ctx.fill();
        ctx.restore();
      }

      function drawObstacles() {
        obstacles.forEach(function (o) {
          ctx.fillStyle = "#1a1422";
          ctx.fillRect(o.x, 0, o.w, o.gapY);
          ctx.fillRect(o.x, o.gapY + o.gap, o.w, H - o.gapY - o.gap);
          ctx.fillStyle = "rgba(233, 162, 59, .5)";
          var y;
          for (y = 14; y < o.gapY - 8; y += 26) {
            ctx.fillRect(o.x + 10, y, 8, 10);
            ctx.fillRect(o.x + o.w - 18, y, 8, 10);
          }
          for (y = o.gapY + o.gap + 14; y < H - 8; y += 26) {
            ctx.fillRect(o.x + 10, y, 8, 10);
            ctx.fillRect(o.x + o.w - 18, y, 8, 10);
          }
        });
      }

      function drawStars() {
        stars.forEach(function (s) {
          ctx.save();
          ctx.shadowColor = "rgba(233, 162, 59, .9)";
          ctx.shadowBlur = 12;
          ctx.fillStyle = "#e9a23b";
          ctx.beginPath();
          ctx.arc(s.x, s.y, 8, 0, Math.PI * 2);
          ctx.fill();
          ctx.restore();
        });
      }

      function drawGame() {
        drawSky();
        drawObstacles();
        drawStars();
        drawPlane();
        if (state === "idle") {
          ctx.fillStyle = "rgba(244, 234, 216, .9)";
          ctx.font = "600 20px sans-serif";
          ctx.textAlign = "center";
          ctx.fillText("Press Start, then tap or press Space to flap", W / 2, H / 2 + 60);
        } else if (state === "over") {
          ctx.fillStyle = "rgba(244, 234, 216, .95)";
          ctx.font = "600 26px sans-serif";
          ctx.textAlign = "center";
          ctx.fillText("Game over — score " + score, W / 2, H / 2);
          ctx.font = "400 16px sans-serif";
          ctx.fillText("Press Start to fly again", W / 2, H / 2 + 30);
        }
      }

      function flap() {
        if (state === "playing") plane.vy = -8;
      }

      function loop() {
        if (state !== "playing") return;
        frame++;
        plane.vy += 0.45;
        plane.y += plane.vy;
        var speed = 3 + Math.min(2, score * 0.02);
        var gap = Math.max(120, 155 - score);
        if (frame % 95 === 0) {
          var gapY = 60 + Math.random() * (H - 120 - gap);
          obstacles.push({ x: W, w: 56, gapY: gapY, gap: gap, passed: false });
          if (Math.random() < 0.75) {
            stars.push({ x: W + 30, y: gapY + gap / 2 + (Math.random() * 40 - 20), taken: false });
          }
        }
        obstacles.forEach(function (o) { o.x -= speed; });
        stars.forEach(function (s) { s.x -= speed; });
        obstacles = obstacles.filter(function (o) { return o.x + o.w > 0; });
        stars = stars.filter(function (s) { return s.x > -20 && !s.taken; });
        obstacles.forEach(function (o) {
          if (!o.passed && o.x + o.w < plane.x - plane.r) {
            o.passed = true;
            score += 1;
            if (scoreEl) scoreEl.textContent = score;
          }
        });
        stars.forEach(function (s) {
          var dx = s.x - plane.x, dy = s.y - plane.y;
          if (dx * dx + dy * dy < 26 * 26) {
            s.taken = true;
            score += 5;
            if (scoreEl) scoreEl.textContent = score;
          }
        });
        var hit = plane.y - plane.r < 0 || plane.y + plane.r > H;
        if (!hit) {
          hit = obstacles.some(function (o) {
            var inX = plane.x + plane.r > o.x && plane.x - plane.r < o.x + o.w;
            return inX && (plane.y - plane.r < o.gapY || plane.y + plane.r > o.gapY + o.gap);
          });
        }
        if (hit) {
          state = "over";
          if (score > best) {
            best = score;
            if (bestEl) bestEl.textContent = best;
            try { localStorage.setItem(BEST_KEY, String(best)); } catch (e) {}
          }
          if (gameMsgEl) gameMsgEl.textContent = "Game over! Your score: " + score + ". Press Start to fly again.";
          if (startBtn) startBtn.textContent = "Fly again";
          drawGame();
          return;
        }
        drawGame();
        requestAnimationFrame(loop);
      }

      function startGame() {
        if (state === "playing") return;
        resetGame();
        state = "playing";
        if (gameMsgEl) gameMsgEl.textContent = "Flying! Tap, click, or press Space to flap.";
        if (startBtn) startBtn.textContent = "Flying…";
        drawGame();
        requestAnimationFrame(loop);
      }

      if (startBtn) startBtn.addEventListener("click", startGame);
      canvas.addEventListener("pointerdown", function () {
        if (state === "playing") { flap(); }
        else { startGame(); flap(); }
      });
      document.addEventListener("keydown", function (e) {
        if (e.code === "Space" || e.code === "ArrowUp") {
          if (state === "playing") { e.preventDefault(); flap(); }
        }
      });

      resetGame();
      drawGame();
    }
  }

  /* ---------- Guestbook: site-native form, posts silently to Kaif's Google Form ----------
     The form targets a hidden iframe, so visitors never leave the page and never see
     any Google UI. When the iframe finishes loading after a submit, show the thank-you line. */
  var gbForm = document.getElementById("gbForm");
  if (gbForm) {
    var gbThanks = document.getElementById("gbThanks");
    var gbHidden = document.getElementById("gbHidden");
    var gbSubmitted = false;
    gbForm.addEventListener("submit", function () { gbSubmitted = true; });
    if (gbHidden) {
      gbHidden.addEventListener("load", function () {
        if (!gbSubmitted) return;
        gbSubmitted = false;
        gbForm.style.display = "none";
        if (gbThanks) gbThanks.hidden = false;
      });
    }
  }
})();
