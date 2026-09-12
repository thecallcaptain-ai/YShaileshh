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


/* Digital Services Modal */
(function () {
  const openBtn = document.getElementById("openServices");
  const closeBtn = document.getElementById("closeServices");
  const modal = document.getElementById("servicesModal");

  if (!openBtn || !closeBtn || !modal) return;

  function openModal() {
    modal.classList.add("active");
    modal.setAttribute("aria-hidden", "false");
    document.body.style.overflow = "hidden";
  }

  function closeModal() {
    modal.classList.remove("active");
    modal.setAttribute("aria-hidden", "true");
    document.body.style.overflow = "";
  }

  openBtn.addEventListener("click", openModal);
  closeBtn.addEventListener("click", closeModal);

  modal.addEventListener("click", function (e) {
    if (e.target === modal) {
      closeModal();
    }
  });

  document.addEventListener("keydown", function (e) {
    if (e.key === "Escape" && modal.classList.contains("active")) {
      closeModal();
    }
  });
})();

/* Digital Services Popup - Reliable */
function openServicesModal() {
  const modal = document.getElementById("servicesModal");

  if (modal) {
    modal.classList.add("active");
    modal.setAttribute("aria-hidden", "false");
    document.body.style.overflow = "hidden";
  }
}

function closeServicesModal() {
  const modal = document.getElementById("servicesModal");

  if (modal) {
    modal.classList.remove("active");
    modal.setAttribute("aria-hidden", "true");
    document.body.style.overflow = "";
  }
}

document.addEventListener("click", function(event) {
  const modal = document.getElementById("servicesModal");

  if (modal && event.target === modal) {
    closeServicesModal();
  }
});

document.addEventListener("keydown", function(event) {
  if (event.key === "Escape") {
    closeServicesModal();
  }
});
