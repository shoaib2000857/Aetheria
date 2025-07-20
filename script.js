// Slide in navbar
gsap.from(".navbar", {
  y: -80,
  opacity: 0,
  duration: 1,
  ease: "power3.out"
});

// Button hover pulse
document.querySelectorAll(".btn").forEach(btn => {
  btn.addEventListener("mouseenter", () => {
    gsap.to(btn, { scale: 1.1, duration: 0.3 });
  });
  btn.addEventListener("mouseleave", () => {
    gsap.to(btn, { scale: 1, duration: 0.3 });
  });
});

// Scroll-triggered fade-in
gsap.utils.toArray([".about", ".tech", ".testimonials"]).forEach(section => {
  gsap.from(section, {
    scrollTrigger: {
      trigger: section,
      start: "top 80%",
    },
    opacity: 0,
    y: 50,
    duration: 1,
    ease: "power2.out"
  });
});
