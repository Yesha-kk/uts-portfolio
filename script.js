document.addEventListener("DOMContentLoaded", () => {

  document.querySelectorAll("nav a").forEach(a => {
    a.addEventListener("click", e => {
      e.preventDefault();
      document.querySelector(a.getAttribute("href"))
        .scrollIntoView({ behavior: "smooth" });
    });
  });

  const slides = document.querySelector(".slides-wrapper");
  if (slides) slides.innerHTML += slides.innerHTML;

  const gallery = document.querySelector(".gallery");
  if (gallery) gallery.innerHTML += gallery.innerHTML;

  const elements = document.querySelectorAll(".reveal");

  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("active");
      } else {
        entry.target.classList.remove("active");
      }
    });
  }, { threshold: 0.15 });

  elements.forEach(el => observer.observe(el));

});