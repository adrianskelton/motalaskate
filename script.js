document.querySelector('.kickflip-text').addEventListener('click', function () {
    const textElement = this;
  
    // Remove the animation class (if it exists) to allow re-trigger
    textElement.classList.remove('kickflip-animate');
    
    // Trigger a reflow to restart animation
    void textElement.offsetWidth;
    
    // Add the animation class back
    textElement.classList.add('kickflip-animate');
  });
  