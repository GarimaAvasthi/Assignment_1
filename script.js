const themeToggleBtn = document.getElementById("themeToggle");
const body = document.body;
const hamburger = document.getElementById("hamburger");
const navLinks = document.getElementById("nav-links");

themeToggleBtn.addEventListener("click", () => {
    body.classList.toggle("dark");

    const isDark = body.classList.contains("dark");
    themeToggleBtn.textContent = isDark ? "☀️" : "🌙";
    themeToggleBtn.setAttribute(
        "aria-label",
        isDark ? "Switch to light mode" : "Switch to dark mode"
    );
});

hamburger.addEventListener("click", () => {
    navLinks.classList.toggle("show");
});

navLinks.addEventListener("click", () => {
    navLinks.classList.remove("show");
});
