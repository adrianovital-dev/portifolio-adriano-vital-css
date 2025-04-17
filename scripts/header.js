document.addEventListener("scroll", function () {
    const header = document.querySelector("header");
    if (window.scrollY > 0) {
        header.classList.add("scrolled"); // Adiciona a classe quando rolar
    } else {
        header.classList.remove("scrolled"); // Remove a classe quando voltar ao topo
    }
});