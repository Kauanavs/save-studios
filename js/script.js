// HEADER SCROLL
const header = document.querySelector(".header");

window.addEventListener("scroll", () => {
  if (window.scrollY > 50) {
    header.classList.add("scrolled");
  } else {
    header.classList.remove("scrolled");
  }
});

const menuBtn = document.getElementById("menuBtn");
const mobileMenu = document.getElementById("mobileMenu");

menuBtn.addEventListener("click", () => {
  mobileMenu.classList.toggle("active");
});

document.querySelectorAll("#mobileMenu a").forEach(link => {
  link.addEventListener("click", () => {
    mobileMenu.classList.remove("active");
  });
});

// ANIMAÇÃO AO SCROLL
const reveals = document.querySelectorAll(".reveal");

window.addEventListener("scroll", () => {
  reveals.forEach(el => {
    const top = el.getBoundingClientRect().top;
    if (top < window.innerHeight - 100) {
      el.classList.add("active");
    }
  });
});

const counters = document.querySelectorAll(".counter");

counters.forEach(counter => {
  const update = () => {
    const target = +counter.getAttribute("data-target");
    const current = +counter.innerText;

    const increment = target / 200; // 🔥 mais devagar (antes era /100)

    if (current < target) {
      counter.innerText = Math.ceil(current + increment);
      setTimeout(update, 30); // 🔥 mais suave
    } else {
      counter.innerText = target;
    }
  };

  update();
});

// =====================
// HERO GRADIENT SCROLL
// =====================
const hero = document.querySelector('.hero');

window.addEventListener('scroll', () => {
  const scroll = window.scrollY;
  const maxScroll = 300; // controla até onde escurece
  const opacity = Math.min(scroll / maxScroll, 0.6); // vai até 0.6
  hero.style.background = `linear-gradient(rgba(0,0,0,${opacity}), rgba(0,0,0,0))`;
});