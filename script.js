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

});


/* ================================
   DIGITAL SERVICES MODAL
   ================================ */

function openServicesModal() {
  const modal = document.getElementById("servicesModal");

  if (!modal) {
    console.error("Services modal not found");
    return;
  }

  modal.classList.add("active");
  modal.setAttribute("aria-hidden", "false");
  document.body.style.overflow = "hidden";
}


function closeServicesModal() {
  const modal = document.getElementById("servicesModal");

  if (!modal) return;

  modal.classList.remove("active");
  modal.setAttribute("aria-hidden", "true");
  document.body.style.overflow = "";
}


/* Close when clicking outside the popup */
document.addEventListener("click", function (event) {
  const modal = document.getElementById("servicesModal");

  if (modal && event.target === modal) {
    closeServicesModal();
  }
});


/* Close with Escape */
document.addEventListener("keydown", function (event) {
  if (event.key === "Escape") {
    closeServicesModal();
  }
});
