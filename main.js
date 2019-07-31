const toggle = document.getElementById("theme-toggle");
if (localStorage.getItem("theme") === "dark") document.body.classList.add("dark");
toggle.addEventListener("click", () => {
  document.body.classList.toggle("dark");
  localStorage.setItem("theme", document.body.classList.contains("dark") ? "dark" : "light");
});
const observer = new IntersectionObserver((entries) => {
  entries.forEach((e) => {
    if (e.isIntersecting) e.target.classList.add("visible");
  });
}, { threshold: 0.15 });
document.querySelectorAll("section").forEach((s) => observer.observe(s));
