// Navbar shadow effect
window.addEventListener('scroll', () => {
  const navbar = document.getElementById('navbar');
  navbar.style.boxShadow = window.scrollY > 50 ? '0 4px 20px rgba(0,0,0,0.5)' : 'none';
});

// Smooth scroll for nav links
document.querySelectorAll('nav a').forEach(link => {
  link.addEventListener('click', e => {
    e.preventDefault();
    const targetId = link.getAttribute('href').substring(1);
    const targetSection = document.getElementById(targetId);
    window.scrollTo({ top: targetSection.offsetTop - 70, behavior: 'smooth' });
  });
});

// Fade-in / fade-out with text animations
const fadeSections = document.querySelectorAll('.fade');
function checkFade() {
  fadeSections.forEach(sec => {
    const rect = sec.getBoundingClientRect();
    const title = sec.querySelector('h2');
    const para = sec.querySelector('p');

    if (rect.top < window.innerHeight - 100 && rect.bottom > 100) {
      sec.classList.add('visible');
      if (title) { title.style.opacity = "1"; title.style.transform = "translateY(0)"; }
      if (para) { para.style.opacity = "1"; para.style.transform = "translateY(0)"; }
    } else {
      sec.classList.remove('visible');
      if (title) { title.style.opacity = "0"; title.style.transform = "translateY(-30px)"; }
      if (para) { para.style.opacity = "0"; para.style.transform = "translateY(30px)"; }
    }
  });
}
window.addEventListener('scroll', checkFade);
window.addEventListener('load', checkFade);
