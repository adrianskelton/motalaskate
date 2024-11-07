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

  document.addEventListener("DOMContentLoaded", function() {
    const headings = document.querySelectorAll('.animate-heading');
  
    function isInViewport(element) {
      const rect = element.getBoundingClientRect();
      const windowHeight = window.innerHeight || document.documentElement.clientHeight;
  
      // Check if the element's center is in the middle of the viewport
      const middleOfElement = rect.top + rect.height / 2;
      return middleOfElement >= windowHeight / 3 && middleOfElement <= (windowHeight / 3) * 2;
    }
  
    function animateOnScroll() {
      headings.forEach((heading) => {
        if (isInViewport(heading)) {
          heading.classList.add('kickflip-animate');
        } else {
          heading.classList.remove('kickflip-animate'); // Optionally reset animation
        }
      });
    }
  
    // Trigger the scroll event listener
    window.addEventListener('scroll', animateOnScroll);
    animateOnScroll(); // Initial check on page load
  });
  