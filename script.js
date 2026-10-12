const iconButtons = document.querySelectorAll(".icon-btn");

iconButtons.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    e.preventDefault();
    btn.classList.toggle("is-active");
  });
});

const buyButtons = document.querySelectorAll(".gallery-card__buy");

buyButtons.forEach((btn) => {
  btn.addEventListener("click", () => {
    btn.classList.toggle("is-active");
  });
});
