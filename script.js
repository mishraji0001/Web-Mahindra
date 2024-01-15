// JavaScript to dynamically update the heading content
document.addEventListener("DOMContentLoaded", function () {
  // Get the heading element
  var dynamicHeading = document.getElementById("dynamic-heading");

  // Set the dynamic content
  var dynamicContent = "Hello, Welcome to the All new Scarpio!";
  dynamicHeading.textContent = dynamicContent;
});

//nav

let menuIcon = document.querySelector(".menuIcon");
let nav = document.querySelector(".overlay-menu");

menuIcon.addEventListener("click", () => {
  if (nav.style.transform != "translateX(0%)") {
    nav.style.transform = "translateX(0%)";
    nav.style.transition = "transform 0.2s ease-out";
  } else {
    nav.style.transform = "translateX(-100%)";
    nav.style.transition = "transform 0.2s ease-out";
  }
});

// Toggle Menu Icon ========================================
let toggleIcon = document.querySelector(".menuIcon");

toggleIcon.addEventListener("click", () => {
  if (toggleIcon.className != "menuIcon toggle") {
    toggleIcon.className += " toggle";
  } else {
    toggleIcon.className = "menuIcon";
  }
});
