document.querySelectorAll('.navbar-nav .nav-link').forEach(link => {
    link.addEventListener('click', () => {
      // Automatically collapse the navbar after clicking a link
      const navbar = document.querySelector('.navbar-collapse');
      const collapse = new bootstrap.Collapse(navbar, {
        toggle: true
      });
    });
  });