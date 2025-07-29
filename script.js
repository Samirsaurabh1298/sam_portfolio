document.addEventListener("DOMContentLoaded", () => {
  const hamburger = document.getElementById("hamburgerMenu");
  const navLinks = document.getElementById("navLinks");

  // Check if elements exist
  if (!hamburger || !navLinks) {
    console.error("Hamburger menu elements not found");
    return;
  }

  hamburger.addEventListener("click", (e) => {
    e.preventDefault();
    e.stopPropagation();

    // Toggle classes for animation and visibility
    hamburger.classList.toggle("active");
    navLinks.classList.toggle("active");
  });

  // Close menu when clicking on any nav link
  const links = navLinks.querySelectorAll("a");
  links.forEach((link) => {
    link.addEventListener("click", () => {
      navLinks.classList.remove("active");
      hamburger.classList.remove("active");
    });
  });

  // Close menu when clicking outside
  document.addEventListener("click", (e) => {
    if (!hamburger.contains(e.target) && !navLinks.contains(e.target)) {
      navLinks.classList.remove("active");
      hamburger.classList.remove("active");
    }
  });

  // Handle smooth scrolling for anchor links
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute("href"));
      if (target) {
        target.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      }
    });
  });
});
