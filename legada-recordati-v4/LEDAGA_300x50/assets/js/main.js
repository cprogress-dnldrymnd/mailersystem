/**
 * Executes a self-contained IIFE to encapsulate state variables 
 * and manage the HTML5 banner frame rotation timeline.
 */
(function () {
  var frames = document.querySelectorAll(".frame");
  var frameCount = frames.length;
  
  // Animation configuration parameters
  var frameDuration = 2500; // 2.5s display duration per frame node
  var maxRotations = 3;     // Hard limit on cycle looping
  var maxFrames = frameCount * maxRotations;
  
  // Internal state tracking
  var current = 0;
  var shown = 1;

  /**
   * Applies the active CSS state to the targeted banner frame, effectively cross-fading
   * or cutting to the specified index while removing visibility from all siblings.
   * 
   * @param {number} index - The zero-indexed position of the frame within the NodeList.
   */
  function showFrame(index) {
    for (var i = 0; i < frames.length; i++) {
      frames[i].classList.remove("is-active");
    }
    frames[index].classList.add("is-active");
  }

  /**
   * Evaluates the current animation cycle count and advances the timeline 
   * to the subsequent frame. Automatically halts execution once the max frame limit is reached.
   */
  function tick() {
    if (shown >= maxFrames) {
      return; // Break execution recursion
    }
    
    current = (current + 1) % frameCount;
    shown += 1;
    
    showFrame(current);
    window.setTimeout(tick, frameDuration);
  }

  // Bootstraps the sequence by enforcing the initial state and queuing the first tick
  showFrame(0);
  window.setTimeout(tick, frameDuration);
})();