document.addEventListener("DOMContentLoaded", () => {
  const header = document.querySelector("header");
  const navLinks = document.querySelectorAll("header nav a");

  // Navbar shadow on scroll
  window.addEventListener("scroll", () => {
    if (window.scrollY > 50) {
      header.style.boxShadow = "0 4px 12px rgba(0,0,0,0.4)";
    } else {
      header.style.boxShadow = "none";
    }
  });

  // Smooth scroll for nav links
  navLinks.forEach(link => {
    link.addEventListener("click", e => {
      e.preventDefault();
      const target = document.querySelector(link.getAttribute("href"));
      if (target) target.scrollIntoView({ behavior: "smooth" });
    });
  });

  // Fade-in reveal on scroll (paragraphs, headings, slides, gallery)
  const elements = document.querySelectorAll(
    ".text-side h2, .text-side p, .slide, .gallery-item"
  );
  const revealOnScroll = () => {
    elements.forEach(el => {
      const rect = el.getBoundingClientRect();
      if (rect.top < window.innerHeight - 50) {
        el.classList.add("show");
      }
    });
  };
  window.addEventListener("scroll", revealOnScroll);
  revealOnScroll(); // trigger on load

  // Continuous auto-scroll for carousel
  const slidesWrapper = document.querySelector(".slides-wrapper");
  if (slidesWrapper) {
    let scrollAmount = 0;
    setInterval(() => {
      scrollAmount -= 1;
      slidesWrapper.style.transform = `translateX(${scrollAmount}px)`;
      if (Math.abs(scrollAmount) > slidesWrapper.scrollWidth / 2) {
        scrollAmount = 0;
      }
    }, 30); // adjust speed here
  }

  // Continuous auto-scroll for gallery
  const galleryWrapper = document.querySelector(".gallery-carousel");
  if (galleryWrapper) {
    let galleryScroll = 0;
    setInterval(() => {
      galleryScroll -= 1;
      galleryWrapper.style.transform = `translateX(${galleryScroll}px)`;
      if (Math.abs(galleryScroll) > galleryWrapper.scrollWidth / 2) {
        galleryScroll = 0;
      }
    }, 40); // adjust speed here
  }
});
