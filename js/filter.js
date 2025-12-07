document.addEventListener("DOMContentLoaded", () => {
  const buttons = document.querySelectorAll(".category-btn");
  const cards = document.querySelectorAll(".work-card");

  buttons.forEach(btn => {
    btn.addEventListener("click", () => {
      
      buttons.forEach(b => b.classList.remove("active"));
      btn.classList.add("active");

      let category = btn.dataset.category;

      cards.forEach(card => {
        if (category === "all" || card.dataset.category === category) {
          card.style.display = "block";
        } else {
          card.style.display = "none";
        }
      });
    });
  });
});
