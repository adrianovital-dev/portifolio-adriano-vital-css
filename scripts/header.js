document.addEventListener("scroll", function () {
    const header = document.querySelector("header");
    if (window.scrollY > 0) {
        header.classList.add("scrolled"); // Adiciona a classe quando rolar
    } else {
        header.classList.remove("scrolled"); // Remove a classe quando voltar ao topo
    }
});


document.addEventListener("DOMContentLoaded", () => {
  const toggle = document.querySelector(".nav__toggle");
  const menu = document.getElementById("nav-menu");

  toggle.addEventListener("click", () => {
    menu.classList.toggle("show");

    // Atualiza a acessibilidade
    const expanded = toggle.getAttribute("aria-expanded") === "true";
    toggle.setAttribute("aria-expanded", String(!expanded));

    // Alterna aria-label opcionalmente
    toggle.setAttribute("aria-label", expanded ? "Open menu" : "Close menu");
  });
});


// Destaca o menu conforme a seção visível
document.addEventListener("scroll", () => {
  const sections = document.querySelectorAll("section[id]");
  const navLinks = document.querySelectorAll(".nav__menu-item");

  let scrollY = window.pageYOffset;

  sections.forEach((section) => {
    const sectionHeight = section.offsetHeight;
    const sectionTop = section.offsetTop - 80; // ajustar conforme altura do header
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

