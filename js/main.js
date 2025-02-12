const burgerButton = document.querySelector(".header__burger");
const menu = document.querySelector(".header__menu");
const backButton = document.querySelector(".header__back");
const menuNav = document.querySelector(".header__nav");
burgerButton.addEventListener("click", () => {
  menu.classList.toggle("active");
});

backButton.addEventListener("click", (event) => {
  event.preventDefault();
  menu.classList.remove("active");
});

document.addEventListener("click", (event) => {
  if (!menuNav.contains(event.target) && !burgerButton.contains(event.target)) {
    menu.classList.remove("active");
  }
});
