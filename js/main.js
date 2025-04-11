gsap.registerPlugin(ScrollTrigger);

gsap.utils.toArray('.slogan-line').forEach((line, i) => {
  gsap.to(line, {
    opacity: 1,
    y: 0,
    duration: 1,
    ease: 'power2.out',
    delay: i * 0.4,
    scrollTrigger: {
      trigger: line,
      start: 'top 80%',
      toggleActions: 'play none none none',
    },
  });
});
//best section
const bestClassSwiper = new Swiper('.best-class__slider', {
  slidesPerView: 3,
  spaceBetween: 24,
  loop: true,
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  breakpoints: {
    1024: {
      slidesPerView: 3,
    },
    768: {
      slidesPerView: 2,
    },
    320: {
      slidesPerView: 1,
    },
  },
});
//new section
const newClassSwiper = new Swiper('.new-class__slider', {
  slidesPerView: 3,
  spaceBetween: 24,
  loop: true,
  navigation: {
    nextEl: '.new-class .swiper-button-next',
    prevEl: '.new-class .swiper-button-prev',
  },
  breakpoints: {
    1024: {
      slidesPerView: 3,
    },
    768: {
      slidesPerView: 2,
    },
    320: {
      slidesPerView: 1,
    },
  },
});
