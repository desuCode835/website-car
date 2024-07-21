/*=============== SHOW MENU ===============*/
const navMenu = document.getElementById('nav-menu'),
      navToggle = document.getElementById('nav-toggle'),
      navClose = document.getElementById('nav-close')

// Menu show
if(navToggle) {
    navToggle.addEventListener('click', () =>{
        navMenu.classList.add('show-menu')
    })
}

// menu hidden
if(navClose) {
    navClose.addEventListener('click', () => {
        navMenu.classList.remove('show-menu')
    })
}

/*=============== REMOVE MENU MOBILE ===============*/
const navLink = document.querySelectorAll('.nav__link')

const linkAction = () => {
    const navMenu = document.getElementById('nav-menu')
    // when we click on each nav__link, we remove the show menu class
    navMenu.classList.remove('show-menu')
}
navLink.forEach(n => n.addEventListener('click', linkAction))
const swiperHome = new Swiper('.home__swiper', {
    speed: 1200,
    effect: 'fade',
  
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
      renderBullet: (index, className) => {
        return '<span class="' + className + '">' + String(index + 1).padStart(2, '0') + "</span>";
      },
    },
});
/*=============== SWIPER CAR ===============*/
gsap.from('.home__panel-1', {y: -1000, duration: 2})
gsap.from('.home__panel-2', {y: 1000, duration: 2})
gsap.from('.home__image', {x: 1000, duration: 2})
gsap.from('.home__titles', {x: 100, opacity:0, delay: 2})
gsap.from('.home__title', {x: 100, opacity:0, delay: 2.1})

/*=============== GSAP ANIMATION ===============*/


/*=============== ADD BLUR HEADER ===============*/
const blurHeader = () => {
    const header = document.getElementById('header')
    this.scrollY >= 50 ? header.classList.add('blur-header')
                       : header.classList.remove('blur-header')
}
window.addEventListener('scroll', blurHeader)