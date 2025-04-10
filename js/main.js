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
