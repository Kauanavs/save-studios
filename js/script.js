// HEADER SCROLL
const header = document.querySelector(".header");

if (header) {
  window.addEventListener("scroll", () => {
    header.classList.toggle("scrolled", window.scrollY > 50);
  });
}

// MENU MOBILE
const menuBtn = document.getElementById("menuBtn");
const mobileMenu = document.getElementById("mobileMenu");

if (menuBtn && mobileMenu) {
  menuBtn.addEventListener("click", () => {
    mobileMenu.classList.toggle("active");
  });

  document.querySelectorAll("#mobileMenu a").forEach(link => {
    link.addEventListener("click", () => {
      mobileMenu.classList.remove("active");
    });
  });
}

// ANIMAÇÃO AO SCROLL
const reveals = document.querySelectorAll(".reveal");

if (reveals.length > 0) {
  window.addEventListener("scroll", () => {
    reveals.forEach(el => {
      const top = el.getBoundingClientRect().top;
      if (top < window.innerHeight - 100) {
        el.classList.add("active");
      }
    });
  });
}

// CONTADORES
const counters = document.querySelectorAll(".counter");

counters.forEach(counter => {
  const update = () => {
    const target = +counter.getAttribute("data-target");
    const current = +counter.innerText;
    const increment = target / 200;

    if (current < target) {
      counter.innerText = Math.ceil(current + increment);
      setTimeout(update, 30);
    } else {
      counter.innerText = target;
    }
  };

  update();
});

// HERO GRADIENT SCROLL
const hero = document.querySelector('.hero');

if (hero) {
  window.addEventListener('scroll', () => {
    const scroll = window.scrollY;
    const maxScroll = 300;
    const opacity = Math.min(scroll / maxScroll, 0.6);

    hero.style.background = `linear-gradient(rgba(0,0,0,${opacity}), rgba(0,0,0,0))`;
  });
}

// WHATSAPP BUTTON
const whatsappBtn = document.getElementById('whatsappBtn');

if (whatsappBtn) {
  window.addEventListener('scroll', () => {
    whatsappBtn.classList.toggle('show', window.scrollY > 200);
  });
}