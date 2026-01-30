const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('active');
    }
  });
});

const animatedItems = document.querySelectorAll('.animate-on-scroll');
animatedItems.forEach(el => observer.observe(el));

const burger = document.getElementById('burger');
const menu = document.getElementById('menu-list');
const menuLinks = document.querySelectorAll('.menu-list a');

burger.addEventListener('click', () => {
  menu.classList.toggle('show');
});

menuLinks.forEach(link => {
  link.addEventListener('click', () => {
    menu.classList.remove('show');
  })
})