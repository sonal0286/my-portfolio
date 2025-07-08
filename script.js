const burger = document.getElementById("burger");
const navLinks = document.getElementById("navLinks");
burger.addEventListener("click", () => {
  navLinks.classList.toggle("active");
});

// Theme toggle
const themeToggle = document.getElementById("theme-toggle");

themeToggle.addEventListener("change", () => {
  document.body.classList.toggle("dark");
  localStorage.setItem("theme", document.body.classList.contains("dark") ? "dark" : "light");
});

// Keep theme on reload
window.addEventListener("load", () => {
  if (localStorage.getItem("theme") === "dark") {
    document.body.classList.add("dark");
    themeToggle.checked = true;
  }
});
window.onscroll = function () {
    document.getElementById("scrollTopBtn").style.display =
      document.documentElement.scrollTop > 200 ? "block" : "none";
  };
  
  function scrollToTop() {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }
  