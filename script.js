const nav=document.querySelector('.nav');
document.querySelector('.menu').addEventListener('click',()=>nav.classList.toggle('open'));
document.querySelectorAll('nav a').forEach(a=>a.addEventListener('click',()=>nav.classList.remove('open')));
document.getElementById('year').textContent=new Date().getFullYear();


/* Dark / Light Mode */
(function () {
  const button = document.getElementById("themeToggle");
  if (!button) return;

  const savedTheme = localStorage.getItem("theme");

  if (savedTheme === "dark") {
    document.body.classList.add("dark-mode");
    button.textContent = "☀️";
  }

  button.addEventListener("click", function () {
    document.body.classList.toggle("dark-mode");

    const dark = document.body.classList.contains("dark-mode");

    localStorage.setItem("theme", dark ? "dark" : "light");
    button.textContent = dark ? "☀️" : "🌙";
  });
})();
