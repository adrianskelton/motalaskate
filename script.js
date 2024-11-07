document.addEventListener("DOMContentLoaded", function() {
    const board = document.querySelector('.kickflip-board');
  
    board.addEventListener('click', function() {
      // Remove the animation class if it exists
      board.classList.remove('kickflip-animate');
  
      // Trigger reflow to restart the animation
      void board.offsetWidth;
  
      // Add the animation class again
      board.classList.add('kickflip-animate');
    });
  });