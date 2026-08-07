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

// handles the darkmode and light mode
darkModeBtn.addEventListener("click", () => {
  darkModeBtn.classList.toggle("dark_btn_on");
  body.classList.toggle("dark");
  header.classList.toggle("dark");

  // array
  newsFeed.forEach((newsfeed) => {
    newsfeed.classList.toggle("dark");
  });
  userPost.classList.toggle("dark");
  rightSide.classList.toggle("dark");
  menuDropdown.classList.toggle("dark");

  // array
  dropdownUserProfile.forEach((userProfile) => {
    userProfile.classList.toggle("dark");
  });

  // update localstorage
  if (localStorage.getItem("theme") == "light") {
    localStorage.setItem("theme", "dark");
  } else {
    localStorage.setItem("theme", "light");
  }
});

// save dark mode preference to local storage
if (localStorage.getItem("theme") == "light") {
  darkModeBtn.classList.remove("dark_btn_on");
  body.classList.remove("dark");
  header.classList.remove("dark");

  // array
  newsFeed.forEach((newsfeed) => {
    newsfeed.classList.remove("dark");
  });
  userPost.classList.remove("dark");
  rightSide.classList.remove("dark");
  menuDropdown.classList.remove("dark");

  // array
  dropdownUserProfile.forEach((userProfile) => {
    userProfile.classList.remove("dark");
  });
} else if (localStorage.getItem("theme") == "dark") {
  darkModeBtn.classList.add("dark_btn_on");
  body.classList.add("dark");
  header.classList.add("dark");
  // array
  newsFeed.forEach((newsfeed) => {
    newsfeed.classList.add("dark");
  });
  userPost.classList.add("dark");
  rightSide.classList.add("dark");
  menuDropdown.classList.add("dark");

  // array
  dropdownUserProfile.forEach((userProfile) => {
    userProfile.classList.add("dark");
  });
} else {
  localStorage.setItem("theme", "light");
}
