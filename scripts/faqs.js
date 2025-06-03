const faqItems = document.querySelectorAll('.faq-item');

faqItems.forEach(item => {
  const questionBtn = item.querySelector('.faq-question');

  questionBtn.addEventListener('click', () => {
    // Closes all items except the one clicked
    faqItems.forEach(otherItem => {
      if (otherItem !== item) {
        otherItem.classList.remove('active');
      }
    });

    // Toggles the clicked item
    item.classList.toggle('active');
  });
});

