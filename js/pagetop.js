document.addEventListener("DOMContentLoaded", () => {
  const pageTopBtn = document.querySelector('.page-top-btn');

  if (pageTopBtn) {
    pageTopBtn.addEventListener('click', (e) => {
      e.preventDefault();
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    });
  }
});
