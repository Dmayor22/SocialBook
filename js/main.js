// variables
const menuBtn = document.querySelector(".profile_click");
const menuDropdown = document.querySelector(".dropdown_menu");
const body = document.querySelector("body");
const header = document.querySelector("header");
const newsFeed = document.querySelectorAll(".news_feed");
const userPost = document.querySelector(".user_post");
const rightSide = document.querySelector(".right-sidebar");
const darkModeBtn = document.querySelector("#dark_mode_toogle");
const dropdownUserProfile = document.querySelectorAll(".dropdown_user_profile");

// handles menu items when the user profile is clicked
menuBtn.addEventListener("click", () => {
  menuDropdown.classList.toggle("click");
});

// Elements that should receive the dark class
const darkElements = [body, header, userPost, rightSide, menuDropdown];

// Function to apply theme
function applyTheme(theme) {
  const isDark = theme === "dark";

  darkModeBtn.classList.toggle("dark_btn_on", isDark);

  darkElements.forEach((element) => {
    element.classList.toggle("dark", isDark);
  });

  newsFeed.forEach((newsfeed) => {
    newsfeed.classList.toggle("dark", isDark);
  });

  dropdownUserProfile.forEach((profile) => {
    profile.classList.toggle("dark", isDark);
  });

  localStorage.setItem("theme", theme);
}

// Load saved theme
const savedTheme = localStorage.getItem("theme") || "light";
applyTheme(savedTheme);

// Toggle theme
darkModeBtn.addEventListener("click", () => {
  const newTheme = localStorage.getItem("theme") === "dark" ? "light" : "dark";

  applyTheme(newTheme);
});
