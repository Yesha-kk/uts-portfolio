document.addEventListener("DOMContentLoaded", () => {

  // smooth scroll nav
  document.querySelectorAll("nav a").forEach(link => {
    link.addEventListener("click", e => {
      e.preventDefault();
      document.querySelector(link.getAttribute("href"))
        .scrollIntoView({ behavior: "smooth" });
    });
  });

  // duplicate carousel for infinite effect
  const slides = document.querySelector(".slides-wrapper");
  if (slides) slides.innerHTML += slides.innerHTML;

  const gallery = document.querySelector(".gallery");
  if (gallery) gallery.innerHTML += gallery.innerHTML;

  // scroll animation system
  const sections = document.querySelectorAll(".page");

  function reveal() {
    const trigger = window.innerHeight - 120;

    sections.forEach(sec => {
      const top = sec.getBoundingClientRect().top;

      if (top < trigger) {
        sec.classList.add("active");
      }
    });
  }

  window.addEventListener("scroll", reveal);
  reveal(); // run on load
});
