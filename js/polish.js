/* Aakhri Allah Hafiz — UI polish helpers (v2).
   Additive only: progress bar, scrolled nav state, back-to-top.
   All content, reveal and timeline behaviour stays in js/main.js. */
(function () {
  var nav = document.querySelector(".nav");
  var bar = document.getElementById("progress");
  var top = document.getElementById("toTop");
  if (!bar && !nav && !top) return;

  var reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  var ticking = false;

  function update() {
    ticking = false;
    var y = window.scrollY || window.pageYOffset;
    var max = document.documentElement.scrollHeight - window.innerHeight;
    if (bar) bar.style.width = (max > 0 ? (y / max) * 100 : 0) + "%";
    if (nav) nav.classList.toggle("scrolled", y > 24);
    if (top) top.classList.toggle("show", y > 600);
  }

  function onScroll() {
    if (!ticking) { ticking = true; requestAnimationFrame(update); }
  }

  window.addEventListener("scroll", onScroll, { passive: true });
  window.addEventListener("resize", onScroll);
  update();

  if (top) {
    top.addEventListener("click", function () {
      window.scrollTo({ top: 0, behavior: reduce ? "auto" : "smooth" });
    });
  }
})();
