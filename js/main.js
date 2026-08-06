// variables
const menuBtn = document.querySelector(".profile_click");
const menuDropdown = document.querySelector(".dropdown_menu");
const body = document.querySelector("body");
const header = document.querySelector("header");
const newsFeed = document.querySelectorAll(".news_feed");
const userPost = document.querySelector(".user_post");
const rightSide = document.querySelector(".right-sidebar");
const darkModeBtn = document.querySelector("#dark_mode_toogle");

// handles menu items when the user profile is clicked
menuBtn.addEventListener("click", () => {
  menuDropdown.classList.toggle("click");
});

// handles the darkmode and light mode
darkModeBtn.addEventListener("click", () => {
  darkModeBtn.classList.toggle("dark_btn_on");
  body.classList.toggle("dark");
  header.classList.toggle("dark");
  newsFeed.forEach((newsfeed) => {
    newsfeed.classList.toggle("dark");
  });
  userPost.classList.toggle("dark");
  rightSide.classList.toggle("dark");
});

