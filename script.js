const toggle = document.getElementById("themeToggle");
const body = document.body;
const hamburger = document.getElementById("hamburger");
const navLinks = document.getElementById("navLinks");

toggle.addEventListener("click", () => {
    body.classList.toggle("dark");
    toggle.textContent = body.classList.contains("dark") ? "☀️" : "🌙";
});

hamburger.addEventListener("click", () => {
    navLinks.classList.toggle("show");
});
