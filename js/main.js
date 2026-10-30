/* Aakhri Allah Hafiz – portfolio. Vanilla JS, no build step. Content comes from js/data.js */
(function () {
  "use strict";
  var D = window.SITE;
  var $ = function (s, r) { return (r || document).querySelector(s); };
  var $$ = function (s, r) { return Array.prototype.slice.call((r || document).querySelectorAll(s)); };
  var esc = function (s) { return String(s).replace(/[&<>"']/g, function (c) { return ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[c]; }); };
  var pad = function (n) { return n < 10 ? "0" + n : "" + n; };
  var mmss = function (s) { return Math.floor(s / 60) + ":" + pad(s % 60); };
  var reduce = window.matchMedia && matchMedia("(prefers-reduced-motion: reduce)").matches;
  var frame = function (k) { return "assets/frames/" + k + ".jpg"; };

  /* ---------- helpers for YouTube ---------- */
  function ytSrc(id, opts) {
    var p = [];
    for (var k in opts) p.push(k + "=" + encodeURIComponent(opts[k]));
    return "https://www.youtube-nocookie.com/embed/" + id + "?" + p.join("&");
  }
  function mkIframe(src, title) {
    var f = document.createElement("iframe");
    f.src = src; f.title = title; f.loading = "lazy"; f.allowFullscreen = true;
    f.allow = "autoplay; encrypted-media; picture-in-picture; fullscreen";
    f.referrerPolicy = "strict-origin-when-cross-origin";
    return f;
  }
  function posterButton(imgSrc, label, onclick, fallbacks) {
    var b = document.createElement("button");
    b.type = "button"; b.className = "poster"; b.setAttribute("aria-label", "Play: " + label);
    b.innerHTML = '<img alt="" loading="lazy" src="' + esc(imgSrc) + '"><span class="play" aria-hidden="true"></span><span class="plabel">' + esc(label) + "</span>";
    var img = $("img", b), i = 0;
    img.addEventListener("error", function () { if (fallbacks && i < fallbacks.length) img.src = fallbacks[i++]; });
    b.addEventListener("click", onclick);
    return b;
  }

  /* ---------- HERO ---------- */
  $("#logline").textContent = D.film.logline;
  var heroBox = $("#heroTrailer");
  var heroFrame = mkIframe(ytSrc(D.film.trailerId, { autoplay: 1, mute: 1, loop: 1, playlist: D.film.trailerId, controls: 0, playsinline: 1, rel: 0, modestbranding: 1, enablejsapi: 1 }), "Trailer: Aakhri Allah Hafiz");
  heroFrame.loading = "eager";
  heroBox.appendChild(heroFrame);
  var muted = true;
  $("#unmute").addEventListener("click", function () {
    var w = heroFrame.contentWindow;
    var send = function (fn, args) { w.postMessage(JSON.stringify({ event: "command", func: fn, args: args || [] }), "*"); };
    muted = !muted;
    send(muted ? "mute" : "unMute"); if (!muted) send("setVolume", [80]);
    this.textContent = muted ? "Sound on" : "Sound off";
  });

  /* ---------- FILM ---------- */
  var filmFrame = $("#filmFrame");
  var ratio = D.film.filmRatio || "16 / 9";
  filmFrame.style.aspectRatio = ratio;
  if (/^\s*9\s*\/\s*16/.test(ratio)) { filmFrame.style.maxWidth = "420px"; }
  var ccOn = false, filmLoaded = false, lastStart = 0;
  function loadFilm(start) {
    lastStart = start || 0;
    filmFrame.innerHTML = "";
    var o = { autoplay: 1, rel: 0, modestbranding: 1, playsinline: 1, hl: "en", cc_lang_pref: "en", cc_load_policy: ccOn ? 1 : 0 };
    if (lastStart) o.start = lastStart;
    var f = mkIframe(ytSrc(D.film.filmId, o), "Aakhri Allah Hafiz, full film");
    f.loading = "eager";
    filmFrame.appendChild(f); filmLoaded = true;
  }
  filmFrame.appendChild(posterButton("https://i.ytimg.com/vi/" + D.film.filmId + "/maxresdefault.jpg", "Play the full film · 13 min 37 s", function () { loadFilm(0); },
    ["https://i.ytimg.com/vi/" + D.film.filmId + "/hqdefault.jpg", frame("s12")]));
  $("#ccBtn").addEventListener("click", function () {
    ccOn = !ccOn;
    this.setAttribute("aria-pressed", String(ccOn));
    this.textContent = "English subtitles (CC): " + (ccOn ? "on" : "off");
    if (filmLoaded) loadFilm(lastStart);
  });
  function playFilmAt(sec) { loadFilm(sec); document.getElementById("film").scrollIntoView({ behavior: reduce ? "auto" : "smooth" }); }

  /* ---------- TEAM ---------- */
  var teamGrid = $("#teamGrid");
  D.team.forEach(function (m, idx) {
    var a = document.createElement("article");
    a.className = "member rv";
    a.setAttribute("data-resume", m.resume);
    a.innerHTML =
      '<div class="m-top"><div class="avatar" data-i="' + esc(m.initials) + '" aria-hidden="true"></div><div><h3>' + esc(m.name) + '</h3><p class="m-title">' + esc(m.title) + '</p><span class="roll">Roll no. ' + esc(m.roll) + "</span></div></div>" +
      '<ul class="tags">' + m.roles.map(function (r) { return "<li>" + esc(r) + "</li>"; }).join("") + "</ul>" +
      '<p class="bio">' + esc(m.bio) + "</p>" +
      '<div class="m-actions"><button class="btn btn-primary btn-small view" type="button">View resume</button><a class="btn btn-small dl" href="' + esc(m.resume) + '" download>Download</a></div>' +
      (m.links && m.links.length ? '<div class="m-links">' + m.links.map(function (l) { return '<a href="' + esc(l.href) + '" target="_blank" rel="noopener">' + esc(l.label) + "</a>"; }).join("") + "</div>" : "");
    teamGrid.appendChild(a);
    $(".view", a).addEventListener("click", function () { openResume(m); });
  });
  function exists(url) {
    return fetch(url, { method: "HEAD" }).then(function (r) { return r.ok; }).catch(function () { return location.protocol === "file:"; });
  }
  $$(".member").forEach(function (card) {
    exists(card.getAttribute("data-resume")).then(function (ok) {
      if (ok) return;
      card.classList.add("no-resume");
      var v = $(".view", card), d = $(".dl", card);
      v.textContent = "Resume coming soon"; v.className = "btn btn-small view";
      d.style.display = "none";
    });
  });
  var dlg = $("#resumeDlg");
  function openResume(m) {
    $("#resumeTitle").textContent = m.name + " · Resume";
    var body = $("#resumeBody"); body.innerHTML = "";
    var dl = $("#resumeDl"), op = $("#resumeOpen");
    dl.href = op.href = m.resume; dl.setAttribute("download", m.resume.split("/").pop());
    exists(m.resume).then(function (ok) {
      if (ok) {
        var f = document.createElement("iframe"); f.src = m.resume + "#view=FitH"; f.title = m.name + " resume (PDF)";
        body.appendChild(f); dl.style.display = ""; op.style.display = "";
      } else {
        dl.style.display = op.style.display = "none";
        body.innerHTML = '<div class="dlg-empty"><p><strong>' + esc(m.name) + "'s resume has not been added yet.</strong></p><p>Place the PDF in the <code>resumes</code> folder as <code>" + esc(m.resume.split("/").pop()) + "</code> and redeploy.</p></div>";
      }
    });
    if (dlg.showModal) dlg.showModal(); else dlg.setAttribute("open", "");
  }
  $("#resumeClose").addEventListener("click", function () { dlg.close(); });
  dlg.addEventListener("click", function (e) { if (e.target === dlg) dlg.close(); });
  dlg.addEventListener("close", function () { $("#resumeBody").innerHTML = ""; });

  /* ---------- DIRECTOR'S STATEMENT ---------- */
  $("#theme").textContent = D.statement.theme;
  $("#statementBody").innerHTML = D.statement.paragraphs.map(function (p) { return "<p>" + esc(p) + "</p>"; }).join("");
  $("#byline").textContent = "— " + D.statement.byline;

  /* ---------- TIMELINE ---------- */
  var t0 = 0;
  D.scenes.forEach(function (s) { s.start = t0; t0 += s.dur; s.end = t0; });
  var bar = $("#tlBar"), card = $("#tlCard"), lang = "both", curScene = 0;
  D.scenes.forEach(function (s, i) {
    var b = document.createElement("button");
    b.type = "button"; b.className = "tl-seg tone-" + s.tone; b.style.flex = s.dur + " 1 76px"; b.style.minWidth = "76px";
    b.setAttribute("role", "tab"); b.setAttribute("aria-selected", i === 0 ? "true" : "false"); b.tabIndex = i === 0 ? 0 : -1;
    b.setAttribute("aria-label", "Scene " + s.n + ": " + s.title + ", " + mmss(s.start) + " to " + mmss(s.end));
    b.textContent = s.n;
    b.addEventListener("click", function () { selectScene(i, true); });
    b.addEventListener("keydown", function (e) {
      var d = e.key === "ArrowRight" ? 1 : e.key === "ArrowLeft" ? -1 : 0;
      if (d) { e.preventDefault(); selectScene(Math.max(0, Math.min(D.scenes.length - 1, i + d)), true); }
    });
    bar.appendChild(b);
  });
  function selectScene(i, focus) {
    curScene = i;
    $$(".tl-seg", bar).forEach(function (b, j) { b.setAttribute("aria-selected", String(j === i)); b.tabIndex = j === i ? 0 : -1; if (focus && j === i) b.focus({ preventScroll: true }); });
    renderCard();
  }
  function renderCard() {
    var s = D.scenes[curScene];
    var frames = s.frames.map(function (f, k) { return '<img src="' + frame(f) + '" alt="Frame from scene ' + s.n + (s.frames.length > 1 ? " (" + (k + 1) + ")" : "") + '" loading="lazy">'; }).join("");
    var lines = s.lines.map(function (l) {
      return '<p class="line"><b>' + esc(l.who) + "</b>" + (lang !== "en" ? '<span class="ur">' + esc(l.ur) + "</span>" : "") + (lang === "both" ? "<br>" : "") + (lang !== "ur" ? '<span class="en">' + esc(l.en) + "</span>" : "") + "</p>";
    }).join("");
    card.innerHTML =
      '<div class="tl-frames' + (s.frames.length > 1 ? " two" : "") + '">' + frames + "</div>" +
      "<div><div class=\"tl-time\">Scene " + pad(s.n) + " · " + mmss(s.start) + " – " + mmss(s.end) + " · " + s.dur + " s</div>" +
      "<h3>" + esc(s.title) + '</h3><p class="tl-sub">' + esc(s.sub) + "</p><p>" + esc(s.summary) + "</p>" +
      '<dl class="kv"><dt>Where</dt><dd>' + esc(s.loc) + "</dd><dt>When</dt><dd>" + esc(s.when) + "</dd><dt>Mood</dt><dd>" + esc(s.mood) + "</dd><dt>Light</dt><dd>" + esc(s.light) + "</dd><dt>Music</dt><dd>" + esc(s.bgm) + "</dd><dt>Sound</dt><dd>" + esc(s.sfx) + "</dd></dl>" +
      '<div class="dlg-lines"><div class="lang-tabs" role="group" aria-label="Subtitle language">' +
      ["en:English", "ur:Roman Urdu", "both:Both"].map(function (x) { var p = x.split(":"); return '<button type="button" data-l="' + p[0] + '" aria-pressed="' + (lang === p[0]) + '">' + p[1] + "</button>"; }).join("") +
      "</div>" + lines + "</div>" +
      '<a class="jump" href="#film" data-t="' + s.start + '">▶ Play the film from about ' + mmss(s.start) + "</a></div>";
    $$(".lang-tabs button", card).forEach(function (b) { b.addEventListener("click", function () { lang = b.getAttribute("data-l"); renderCard(); }); });
    $(".jump", card).addEventListener("click", function (e) { e.preventDefault(); playFilmAt(+this.getAttribute("data-t")); });
  }
  renderCard();

  /* ---------- SCRIPT TO SCREEN ---------- */
  var cmp = $("#cmp"), range = $("#cmpRange"), cmpReal = $("#cmpReal"), s2sScene = 0, s2sFrameIdx = (D.scenes[0].main || 0);
  var setPos = function (v) { cmp.style.setProperty("--pos", v + "%"); range.value = v; };
  range.addEventListener("input", function () { setPos(range.value); });
  var pills = $("#s2sPills");
  D.scenes.forEach(function (s, i) {
    var b = document.createElement("button");
    b.type = "button"; b.className = "pill"; b.textContent = s.n; b.setAttribute("role", "tab");
    b.setAttribute("aria-label", "Scene " + s.n + ": " + s.title); b.setAttribute("aria-selected", i === 0 ? "true" : "false");
    b.addEventListener("click", function () { s2sScene = i; s2sFrameIdx = s.main || 0; renderS2S(); });
    pills.appendChild(b);
  });
  function renderS2S() {
    var s = D.scenes[s2sScene], p = D.planned[s.n];
    $$(".pill", pills).forEach(function (b, j) { b.setAttribute("aria-selected", String(j === s2sScene)); });
    cmpReal.src = frame(s.frames[s2sFrameIdx]);
    cmpReal.alt = "Generated frame for scene " + s.n + ": " + s.title;
    $("#planFrame").textContent = p.frame;
    $("#planBox").innerHTML = "SCENE " + pad(s.n) + "<br>" + esc(p.framing);
    $("#s2sTitle").textContent = "Scene " + s.n + ": " + s.title;
    $("#s2sMeta").innerHTML = "<dt>Planned shot</dt><dd>" + esc(p.frame) + " (" + esc(p.framing) + ")</dd><dt>Plan</dt><dd>" + esc(p.desc) + "</dd><dt>Music</dt><dd>" + esc(s.bgm) + "</dd><dt>Light</dt><dd>" + esc(s.light) + "</dd>";
    $("#s2sPrompt").textContent = p.prompt;
    var tabs = $("#s2sFrames"); tabs.innerHTML = "";
    if (s.frames.length > 1) s.frames.forEach(function (f, k) {
      var b = document.createElement("button"); b.type = "button"; b.className = "pill txt"; b.textContent = "Frame " + (k + 1);
      b.setAttribute("aria-pressed", String(k === s2sFrameIdx));
      b.addEventListener("click", function () { s2sFrameIdx = k; renderS2S(); });
      tabs.appendChild(b);
    });
  }
  renderS2S();
  if ("IntersectionObserver" in window && !reduce) {
    var played = false;
    new IntersectionObserver(function (es, ob) {
      if (es[0].isIntersecting && !played) {
        played = true; ob.disconnect();
        var t0 = performance.now();
        (function step(now) { var k = Math.min(1, (now - t0) / 1100), e = 1 - Math.pow(1 - k, 3); setPos(Math.round(92 - 42 * e)); if (k < 1) requestAnimationFrame(step); })(t0);
      }
    }, { threshold: 0.5 }).observe(cmp);
  }

  /* ---------- CHARACTERS ---------- */
  var cg = $("#charGrid");
  D.characters.forEach(function (c) {
    var a = document.createElement("article"); a.className = "char rv";
    var media;
    if (c.frame) media = '<img src="' + frame(c.frame) + '" alt="' + esc(c.name) + ' in the film" loading="lazy">';
    else { var bars = ""; for (var i = 0; i < 22; i++) bars += '<i style="height:' + (18 + ((i * 37) % 70)) + '%;animation-delay:' + (i * 0.09).toFixed(2) + 's"></i>'; media = '<div class="wave" aria-hidden="true">' + bars + "</div>"; }
    a.innerHTML = '<div class="char-img">' + media + '<span class="ur" lang="ur" dir="rtl">' + esc(c.urdu) + "</span></div>" +
      '<div class="char-body"><h3>' + esc(c.name) + '</h3><p class="char-role">' + esc(c.role) + " · Age " + esc(c.age) + "</p>" +
      '<p><span class="lbl">Look</span>' + esc(c.look) + "</p>" +
      '<p><span class="lbl">Voice</span>' + esc(c.voice) + "</p>" +
      '<div><span class="lbl">Emotion arc</span><div class="arc">' + c.arc.map(function (x) { return "<span>" + esc(x) + "</span>"; }).join("") + "</div></div>" +
      "<p><em>" + esc(c.note) + "</em></p></div>";
    cg.appendChild(a);
  });

  /* ---------- BEHIND THE SCENES ---------- */
  $("#workflow").innerHTML = D.bts.workflow.map(function (w) { return "<li>" + esc(w) + "</li>"; }).join("");
  $("#pStyle").textContent = D.bts.globalStyle; $("#pNeg").textContent = D.bts.negative; $("#pChar").textContent = D.bts.consistency;
  $("#safety").innerHTML = D.bts.safety.map(function (x) { return '<div class="card rv"><span class="n">Safety</span><h4>' + esc(x.t) + "</h4><p>" + esc(x.d) + "</p></div>"; }).join("");
  $("#review").innerHTML = D.bts.review.map(function (r) {
    var imgs = (Array.isArray(r.img) ? r.img : [r.img]).map(function (i) { return '<img src="' + frame(i) + '" alt="' + esc(r.alt) + '" loading="lazy">'; }).join("");
    return '<article class="rcard rv"><div class="rimgs">' + imgs + '</div><div class="rbody"><h4>' + esc(r.t) + "</h4><p>" + esc(r.d) + '</p><p class="fix">' + esc(r.fix) + "</p></div></article>";
  }).join("");
  $("#promptAcc").innerHTML = D.scenes.map(function (s) {
    var p = D.planned[s.n];
    return "<details><summary><small>P" + pad(s.n) + "</small> Scene " + s.n + ": " + esc(s.title) + '</summary><p>' + esc(p.prompt) + "</p></details>";
  }).join("");

  /* ---------- VAULT ---------- */
  ["vaultPdf", "vaultView"].forEach(function (id) { $("#" + id).href = D.vault.pdf; });
  $("#vaultDocx").href = D.vault.docx;
  $("#vaultList").innerHTML = D.vault.contents.map(function (c) { return "<li>" + esc(c) + "</li>"; }).join("");

  /* ---------- AUDIO ---------- */
  function shortPlayer(box, id, img, label) {
    box.appendChild(posterButton(frame(img), label, function () {
      box.innerHTML = ""; var f = mkIframe(ytSrc(id, { autoplay: 1, rel: 0, modestbranding: 1, playsinline: 1 }), label); f.loading = "eager"; box.appendChild(f);
    }));
  }
  shortPlayer($("#trailerBox"), D.film.trailerId, "s07", "Play trailer");
  shortPlayer($("#ostBox"), D.film.ostId, "s12", "Play OST");
  $("#trailerCap").textContent = D.audio.trailerCaption; $("#ostCap").textContent = D.audio.ostCaption;
  $("#audioCredits").innerHTML = D.audio.credits.map(function (c) { return "<div><dt>" + esc(c.role) + "</dt><dd>" + esc(c.who) + "</dd></div>"; }).join("");
  $("#cueList").innerHTML = D.audio.cues.map(function (c) { return "<li><b>M" + c.n + "</b><div>" + esc(c.i) + "<span>" + esc(c.m) + " · Scene " + c.n + "</span></div></li>"; }).join("");

  /* ---------- DETAILS ---------- */
  var C = D.course;
  $("#courseKv").innerHTML = [["University", C.university], ["Department", C.department], ["Program", C.program], ["Course", C.course], ["Lab", C.lab], ["Supervised by", C.teacher], ["Team", D.team.map(function (m) { return m.name + " (" + m.roll + ")"; }).join(", ")]]
    .map(function (r) { return "<dt>" + esc(r[0]) + "</dt><dd>" + esc(r[1]) + "</dd>"; }).join("");
  $("#toolList").innerHTML = D.tools.map(function (t) { return "<li>" + esc(t.name) + "<span>" + esc(t.use) + "</span></li>"; }).join("");
  $("#ack").textContent = C.acknowledgment;

  /* ---------- RUBRIC & LEARNED ---------- */
  $("#rubList").innerHTML = D.rubric.map(function (r) {
    return '<div class="rrow rv"><span class="ok" aria-hidden="true">✓</span><div><strong>' + esc(r.req) + '</strong><span class="ev">' + esc(r.ok) + '</span></div><a href="' + esc(r.where) + '">View</a></div>';
  }).join("");
  $("#learnList").innerHTML = D.learned.map(function (l, i) { return '<div class="card rv"><span class="n">Lesson ' + (i + 1) + "</span><h4>" + esc(l.t) + "</h4><p>" + esc(l.d) + "</p></div>"; }).join("");

  /* ---------- CONTACT ---------- */
  $("#mailBtn").href = "mailto:" + D.contact.email + "?subject=" + encodeURIComponent("Feedback on Aakhri Allah Hafiz");
  $("#liBtn").href = D.contact.linkedin;
  $("#contactNote").textContent = D.contact.email + " · " + D.contact.linkedinLabel;

  /* ---------- COPY BUTTONS ---------- */
  $$(".copy").forEach(function (b) {
    b.addEventListener("click", function () {
      var txt = document.getElementById(b.getAttribute("data-copy")).textContent, old = b.textContent;
      var done = function () { b.textContent = "Copied"; setTimeout(function () { b.textContent = old; }, 1600); };
      if (navigator.clipboard && navigator.clipboard.writeText) navigator.clipboard.writeText(txt).then(done, fallback); else fallback();
      function fallback() { var ta = document.createElement("textarea"); ta.value = txt; ta.style.position = "fixed"; ta.style.opacity = "0"; document.body.appendChild(ta); ta.select(); try { document.execCommand("copy"); done(); } catch (e) {} ta.remove(); }
    });
  });

  /* ---------- SKY TONE, NAV HIGHLIGHT, REVEAL ---------- */
  var secs = $$("section[data-tone]");
  document.body.setAttribute("data-sky", "amber");
  if ("IntersectionObserver" in window) {
    var links = {}; $$(".nav nav a").forEach(function (a) { links[a.getAttribute("href")] = a; });
    var io = new IntersectionObserver(function (es) {
      es.forEach(function (e) {
        if (!e.isIntersecting) return;
        document.body.setAttribute("data-sky", e.target.getAttribute("data-tone"));
        $$(".nav nav a.on").forEach(function (a) { a.classList.remove("on"); });
        var a = links["#" + e.target.id]; if (a) { a.classList.add("on"); if (window.innerWidth < 900) a.parentNode.scrollTo({ left: Math.max(0, a.offsetLeft - 40), behavior: "smooth" }); }
      });
    }, { rootMargin: "-45% 0px -50% 0px" });
    secs.forEach(function (s) { io.observe(s); });
    var rio = new IntersectionObserver(function (es) { es.forEach(function (e) { if (e.isIntersecting) { e.target.classList.add("in"); rio.unobserve(e.target); } }); }, { threshold: 0.12 });
    $$(".sec-head, .rv, .film-frame, .tl-bar, .s2s, .vault, .media-card").forEach(function (n) { n.classList.add("rv"); rio.observe(n); });
  } else { $$(".rv").forEach(function (n) { n.classList.add("in"); }); }

  /* ---------- PAPER AEROPLANE ---------- */
  var plane = $("#plane");
  if (plane && !reduce && window.innerWidth > 900) {
    plane.classList.add("on");
    var ticking = false;
    var pathAt = function (p) { var vw = window.innerWidth, vh = window.innerHeight; return { x: vw * (0.5 + 0.44 * Math.sin(p * 17)), y: 90 + p * (vh - 190) }; };
    var update = function () {
      var max = document.documentElement.scrollHeight - window.innerHeight, p = max > 0 ? window.scrollY / max : 0;
      var a = pathAt(p), b = pathAt(Math.min(1, p + 0.004));
      var ang = Math.atan2(b.y - a.y, b.x - a.x) * 180 / Math.PI;
      if (Math.abs(b.x - a.x) + Math.abs(b.y - a.y) < 0.01) ang = 20;
      plane.style.transform = "translate(" + (a.x - 22) + "px," + a.y + "px) rotate(" + (ang - 15) + "deg)";
      ticking = false;
    };
    window.addEventListener("scroll", function () { if (!ticking) { ticking = true; requestAnimationFrame(update); } }, { passive: true });
    window.addEventListener("resize", update);
    update();
  }
})();
