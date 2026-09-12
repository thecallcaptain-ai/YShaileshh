document.addEventListener("DOMContentLoaded", function () {

  /* Mobile menu */
  const nav = document.querySelector(".nav");
  const menu = document.querySelector(".menu");

  if (menu && nav) {
    menu.addEventListener("click", function () {
      nav.classList.toggle("open");
    });
  }

  document.querySelectorAll("nav a").forEach(function (a) {
    a.addEventListener("click", function () {
      if (nav) nav.classList.remove("open");
    });
  });

  /* Current year */
  const year = document.getElementById("year");
  if (year) {
    year.textContent = new Date().getFullYear();
  }

