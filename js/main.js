// variables
const menuBtn = document.querySelector(".profile_click");
const menuDropdown = document.querySelector(".dropdown_menu");

menuBtn.addEventListener("click", () => {
  menuDropdown.classList.toggle("click");
});
