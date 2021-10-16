/* =========== Show Navbar =========== */
const navbar = document.querySelector('.navbar');
const hamburger = document.querySelector('.hamburger');

hamburger.addEventListener('click', () =>{
  navbar.classList.toggle('show');
});

/* =========== Scroll Position =========== */
const header = document.querySelector('.header');
const scrollLink = document.querySelectorAll('.navbar a:not(:last-child)');

/* =========== Smooth Scroll =========== */
Array.from(scrollLink).map((link) => {
  link.addEventListener('click', (e) =>{
    e.preventDefault();

    const id = e.currentTarget.getAttribute('href').slice(1);
    const element = document.getElementById(id);
    let position = element.offsetTop - 90;

    window.scrollTo({
      left: 0,
      top: position,
      behavior: 'smooth'
    });

    navbar.classList.remove('show');
  });
});

/* =========== Preloader =========== */
const preloader = document.querySelector('.preloader');

window.addEventListener('load', () =>{
  setTimeout(() =>{
    preloader.style.display = 'none';
  },2000);
});

/* =========== Scroll Top =========== */
const scrollTop = document.querySelector('.scroll-top');

scrollTop.addEventListener('click', () =>{
  window.scrollTo({
    top: 0,
    left: 0,
    behavior: 'smooth'
  });
});

window.addEventListener('scroll', (e) =>{
  const scrollHeight = window.pageYOffset;

  if (scrollHeight > 300) {
    scrollTop.classList.add('show');
  }else{
    scrollTop.classList.remove('show');
  }
});

/* =========== Scroll Reveal =========== */
ScrollReveal().reveal('.header', { delay: 2500 , distance: '-50px'});

ScrollReveal().reveal('.home .content', { delay: 2600 });

ScrollReveal().reveal('.home .image', { 
  delay: 2700 ,
  distance: '50px'
});

ScrollReveal().reveal('.services .top', { viewFactor: 1, delay: 400});

ScrollReveal().reveal('.bottom .box1', { viewFactor: 0.7, delay: 300});
ScrollReveal().reveal('.bottom .box2', { viewFactor: 0.7, delay: 500});
ScrollReveal().reveal('.bottom .box3', { viewFactor: 0.7, delay: 700});


ScrollReveal().reveal('.about-1 .image', { viewFactor: 0.4, delay: 300, scale: 0.5});
ScrollReveal().reveal('.about-1 .content', { viewFactor: 0.6, delay: 300, distance: '100px', origin: 'right'});

ScrollReveal().reveal('.about-2 .image', { viewFactor: 0.4, delay: 300, scale: 0.5});
ScrollReveal().reveal('.about-2 .content', { viewFactor: 0.6, delay: 300, distance: '100px', origin: 'left'});

ScrollReveal().reveal('.about-3 .image', { viewFactor: 0.4, delay: 300, scale: 0.5});
ScrollReveal().reveal('.about-3 .content', { viewFactor: 0.6, delay: 300, distance: '100px', origin: 'right'});

ScrollReveal().reveal('.app .image', { viewFactor: 0.4, delay: 300, scale: 0.5});

ScrollReveal().reveal('.app .content h3', { viewFactor: 0.4, delay: 500, distance: '100px', origin: 'left'});

ScrollReveal().reveal('.app .content p', { viewFactor: 0.4, delay: 700, distance: '100px', origin: 'left'});

ScrollReveal().reveal('.app .content .links .app-store', { viewFactor: 0.4, delay: 900, distance: '70px', origin: 'bottom'});
ScrollReveal().reveal('.app .content .links .google-play', { viewFactor: 0.4, delay: 1000, distance: '70px', origin: 'bottom'});