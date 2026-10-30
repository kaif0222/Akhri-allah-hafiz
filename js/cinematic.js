/* Aakhri Allah Hafiz — cinematic intro sound (v3).
   Synthesises a soft paper-plane whoosh with Web Audio (no audio file).
   Browsers block sound before the user interacts with the page, so the
   whoosh is attempted on load and, if blocked, plays on the first tap or
   keypress instead. The toggle (bottom-left) turns it on/off and remembers
   the choice on this device. */
(function () {
  var KEY = "aakhri-sound";
  var btn = document.getElementById("soundToggle");
  var enabled = true;
  try { enabled = localStorage.getItem(KEY) !== "off"; } catch (e) {}
  var ctx = null, played = false;

  function ensureCtx() {
    if (!ctx) {
      var AC = window.AudioContext || window.webkitAudioContext;
      if (!AC) return null;
      ctx = new AC();
    }
    return ctx;
  }

  function whoosh() {
    var ac = ensureCtx();
    if (!ac || ac.state === "suspended") return;
    var dur = 3.2, t0 = ac.currentTime;
    var len = Math.floor(ac.sampleRate * dur);
    var buf = ac.createBuffer(1, len, ac.sampleRate);
    var data = buf.getChannelData(0);
    for (var i = 0; i < len; i++) data[i] = Math.random() * 2 - 1;
    var src = ac.createBufferSource();
    src.buffer = buf;
    var bp = ac.createBiquadFilter();
    bp.type = "bandpass";
    bp.Q.value = 1.1;
    bp.frequency.setValueAtTime(300, t0);
    bp.frequency.exponentialRampToValueAtTime(2400, t0 + dur * 0.55);
    bp.frequency.exponentialRampToValueAtTime(500, t0 + dur);
    var g = ac.createGain();
    g.gain.setValueAtTime(0.0001, t0);
    g.gain.exponentialRampToValueAtTime(0.22, t0 + dur * 0.4);
    g.gain.exponentialRampToValueAtTime(0.0001, t0 + dur);
    src.connect(bp);
    bp.connect(g);
    g.connect(ac.destination);
    src.start(t0);
    src.stop(t0 + dur);
  }

  function tryPlay() {
    if (!enabled || played) return;
    var ac = ensureCtx();
    if (!ac) return;
    if (ac.state === "suspended") {
      ac.resume().then(function () {
        if (enabled && !played) { played = true; whoosh(); }
      }).catch(function () {});
      return;
    }
    played = true;
    whoosh();
  }

  function syncBtn() {
    if (!btn) return;
    btn.setAttribute("aria-pressed", enabled ? "true" : "false");
    btn.setAttribute("aria-label", enabled ? "Intro sound on" : "Intro sound off");
  }

  if (btn) {
    syncBtn();
    btn.addEventListener("click", function () {
      enabled = !enabled;
      try { localStorage.setItem(KEY, enabled ? "on" : "off"); } catch (e) {}
      syncBtn();
      if (enabled) { played = false; tryPlay(); }
    });
  }

  /* Line the whoosh up with the plane (plane starts ~1s after load). */
  function start() { setTimeout(tryPlay, 1000); }
  if (document.readyState === "complete") { start(); }
  else { window.addEventListener("load", start); }

  /* Autoplay fallback: first tap or keypress anywhere. */
  function firstGesture() {
    if (!played) { tryPlay(); }
    window.removeEventListener("pointerdown", firstGesture);
    window.removeEventListener("keydown", firstGesture);
  }
  window.addEventListener("pointerdown", firstGesture);
  window.addEventListener("keydown", firstGesture);
})();
