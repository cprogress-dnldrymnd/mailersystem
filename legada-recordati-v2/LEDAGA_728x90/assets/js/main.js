(function () {
  var frames = document.querySelectorAll(".frame");
  var frameCount = frames.length;
  var frameDuration = 2500; // 2.5s × 2 frames = 5s per rotation
  var maxRotations = 3; // 3 rotations, 15s total
  var maxFrames = frameCount * maxRotations;
  var current = 0;
  var shown = 1;

  function showFrame(index) {
    for (var i = 0; i < frames.length; i++) {
      frames[i].classList.remove("is-active");
    }
    frames[index].classList.add("is-active");
  }

  function tick() {
    if (shown >= maxFrames) {
      return;
    }
    current = (current + 1) % frameCount;
    shown += 1;
    showFrame(current);
    window.setTimeout(tick, frameDuration);
  }

  showFrame(0);
  window.setTimeout(tick, frameDuration);
})();
