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

  /* Dark / Light Mode */
  const button = document.getElementById("themeToggle");

  if (button) {
    const savedTheme = localStorage.getItem("theme");

    if (savedTheme === "dark") {
      document.body.classList.add("dark-mode");
      button.textContent = "☀️";
    } else {
      button.textContent = "🌙";
    }

    button.addEventListener("click", function () {
      document.body.classList.toggle("dark-mode");

      const dark = document.body.classList.contains("dark-mode");

      localStorage.setItem("theme", dark ? "dark" : "light");
      button.textContent = dark ? "☀️" : "🌙";
    });
  }

});
