document.addEventListener("DOMContentLoaded", () => {
  // Mobile menu toggle
  const menuToggle = document.getElementById("mobile-menu");
  const navLinks = document.querySelector(".nav-links");

  menuToggle.addEventListener("click", () => {
    navLinks.classList.toggle("active");
  });

  // Smooth scrolling for navigation links
  document.querySelectorAll(".nav-links a").forEach((link) => {
    link.addEventListener("click", function (e) {
      e.preventDefault();
      navLinks.classList.remove("active");
      const target = document.querySelector(this.getAttribute("href"));
      target.scrollIntoView({ behavior: "smooth" });
    });
  });

  // GSAP animations
  gsap.registerPlugin(ScrollTrigger);

  // Animate navbar appearance
  gsap.from(".navbar", { duration: 1, y: -50, opacity: 0, ease: "power2.out" });

  // Animate project section
  gsap.utils.toArray(".project").forEach((project) => {
    gsap.from(project, {
      scrollTrigger: {
        trigger: project,
        start: "top 85%",
        toggleActions: "play none none none",
      },
      opacity: 0,
      y: 30,
      duration: 1,
      ease: "power2.out",
      stagger: 0.2,
    });
  });

  // Animate About Section
  gsap.from(".profile-pic", {
    scrollTrigger: {
      trigger: ".profile-pic",
      start: "top 80%",
    },
    opacity: 0,
    scale: 0.8,
    duration: 1,
    ease: "power2.out",
  });

  gsap.from(".fun-intro", {
    scrollTrigger: {
      trigger: ".fun-intro",
      start: "top 85%",
    },
    opacity: 0,
    y: 40,
    duration: 1,
    ease: "power2.out",
  });

  // Animate Skills Section
  gsap.from(".skill", {
    scrollTrigger: {
      trigger: ".skills-cloud",
      start: "top 90%",
    },
    opacity: 0,
    scale: 0.8,
    stagger: 0.1,
    duration: 1,
    ease: "power2.out",
  });

  // Animate Contact Section
  gsap.from(".section-title, .contact-text", {
    scrollTrigger: {
      trigger: "#contact",
      start: "top 90%",
    },
    opacity: 0,
    y: 30,
    duration: 1,
    ease: "power2.out",
  });

  gsap.from("#contact-form", {
    scrollTrigger: {
      trigger: "#contact-form",
      start: "top 80%",
    },
    opacity: 0,
    scale: 0.8,
    duration: 1.2,
    ease: "power2.out",
  });

  gsap.from(".btn", {
    scrollTrigger: {
      trigger: ".btn",
      start: "top 85%",
    },
    opacity: 0,
    scale: 0.8,
    duration: 1.2,
    ease: "power2.out",
    delay: 0.3,
  });
});
