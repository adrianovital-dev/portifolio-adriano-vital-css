// Add shadow to header when scrolling
document.addEventListener("scroll", () => {
  const header = document.querySelector("header");
  header.classList.toggle("scrolled", window.scrollY > 0);
});

// Toggle mobile menu (hamburger icon)
document.addEventListener("DOMContentLoaded", () => {
  const toggle = document.querySelector(".nav__toggle");
  const menu = document.getElementById("nav-menu");

  toggle.addEventListener("click", () => {
    const isExpanded = toggle.getAttribute("aria-expanded") === "true";

    // Toggle menu visibility
    menu.classList.toggle("show");

    // Toggle hamburger to X animation
    toggle.classList.toggle("active");

    // Update accessibility attributes
    toggle.setAttribute("aria-expanded", String(!isExpanded));
    toggle.setAttribute("aria-label", !isExpanded ? "Close menu" : "Open menu");
  });
});

// Highlight active menu link based on scroll position
document.addEventListener("scroll", () => {
  const sections = document.querySelectorAll("section[id]");
  const navLinks = document.querySelectorAll(".nav__menu-item");
  const scrollY = window.pageYOffset;

  sections.forEach((section) => {
    const sectionHeight = section.offsetHeight;
    const sectionTop = section.offsetTop - 100; // Adjust based on header height
    const sectionId = section.getAttribute("id");

    if (scrollY >= sectionTop && scrollY < sectionTop + sectionHeight) {
      navLinks.forEach((link) => {
        link.classList.remove("active");
        if (link.getAttribute("href") === `#${sectionId}`) {
          link.classList.add("active");
        }
      });
    }
  });
});
