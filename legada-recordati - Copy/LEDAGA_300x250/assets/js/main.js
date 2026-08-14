/**
 * IIFE to isolate variables and initialize the banner frame rotation sequence.
 */
(function () {
  var frames = document.querySelectorAll(".frame");
  var frameCount = frames.length;
  
  // Frame rotation parameters
  var frameDuration = 2500; // 2.5s duration per frame
  var maxRotations = 3;     // Limits looping capability to 3 complete cycles
  var maxFrames = frameCount * maxRotations;
  
  // State management
  var current = 0;
  var shown = 1;

  /**
   * Toggles visibility of the specified banner frame.
   * Clears the active state from all frames and applies it exclusively to the target index.
   * 
   * @param {number} index - The zero-based integer index of the frame to render.
   */
  function showFrame(index) {
    for (var i = 0; i < frames.length; i++) {
      frames[i].classList.remove("is-active");
    }
    frames[index].classList.add("is-active");
  }

  /**
   * Advances the animation timeline to the next sequential frame.
   * Recursively schedules itself via setTimeout until the maximum frame limit is reached.
   */
  function tick() {
    if (shown >= maxFrames) {
      return; // Terminate animation loop gracefully
    }
    
    current = (current + 1) % frameCount;
    shown += 1;
    
    showFrame(current);
    window.setTimeout(tick, frameDuration);
  }

  // Initialize the first frame immediately and queue the recursive tick
  showFrame(0);
  window.setTimeout(tick, frameDuration);
})();