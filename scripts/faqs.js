const faqItems = document.querySelectorAll('.faq-item');

faqItems.forEach(item => {
  const questionBtn = item.querySelector('.faq-question');

  questionBtn.addEventListener('click', () => {
    // Fecha todos os itens, exceto o clicado
    faqItems.forEach(otherItem => {
      if (otherItem !== item) {
        otherItem.classList.remove('active');
      }
    });

    // Alterna o item clicado
    item.classList.toggle('active');
  });
});

