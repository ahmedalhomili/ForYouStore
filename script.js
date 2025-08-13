// ========== Mobile Menu Toggle ==========
const toggle = document.querySelector('.nav-toggle');
const menu = document.getElementById('menu');

if (toggle && menu) {
  toggle.addEventListener('click', () => {
    const open = menu.classList.toggle('open');
    toggle.setAttribute('aria-expanded', open ? 'true' : 'false');
  });

  // Close menu on link click (mobile)
  menu.querySelectorAll('a').forEach(a => {
    a.addEventListener('click', () => {
      if (menu.classList.contains('open')) {
        menu.classList.remove('open');
        toggle.setAttribute('aria-expanded', 'false');
      }
    });
  });
}

// ========== Header Shadow on Scroll ==========
const header = document.querySelector('.site-header');
const onScroll = () => {
  if (!header) return;
  const scrolled = window.scrollY > 8;
  header.classList.toggle('scrolled', scrolled);
};
window.addEventListener('scroll', onScroll);
onScroll();

// ========== Reveal on Scroll (Fade-In) ==========
const observer = new IntersectionObserver(
  entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('show');
        observer.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.15 }
);

// Observe elements with .reveal
document.querySelectorAll('.reveal').forEach(el => observer.observe(el));
