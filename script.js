// GSAP HERO ANIMATION
gsap.from(".logo", {
  y: -30,
  opacity: 0,
  duration: 1
});

gsap.from("nav ul li", {
  y: -20,
  opacity: 0,
  stagger: 0.15,
  duration: 0.8
});

gsap.from(".hero-text h1", {
  x: -100,
  opacity: 0,
  duration: 1,
  delay: 0.5
});

gsap.from(".hero-text h2", {
  x: -100,
  opacity: 0,
  duration: 1,
  delay: 0.7
});

gsap.from(".hero-text p, .btn", {
  y: 40,
  opacity: 0,
  duration: 1,
  delay: 0.9,
  stagger: 0.2
});

gsap.from(".hero-img img", {
  scale: 0.7,
  opacity: 0,
  duration: 1.2,
  delay: 1
});

// Dark Mode
const toggle = document.getElementById("themeToggle");
toggle.addEventListener("click", () => {
  document.body.classList.toggle("dark");
});

// Intersection Observer
const sections = document.querySelectorAll(".section");

const observer = new IntersectionObserver(
  entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("show");
      }
    });
  },
  { threshold: 0.2 }
);

sections.forEach(section => observer.observe(section));

// Smooth Scroll
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    document.querySelector(this.getAttribute("href"))
      .scrollIntoView({ behavior: "smooth" });
  });
});


// HAMBURGER MENU FIX
const hamburger = document.getElementById("hamburger");
const navMenu = document.getElementById("navMenu");

hamburger.addEventListener("click", () => {
  navMenu.classList.toggle("active");

  // Hamburger animation
  hamburger.classList.toggle("open");

  // GSAP animation when menu opens
  if (navMenu.classList.contains("active")) {
    gsap.from("#navMenu li", {
      x: 50,
      opacity: 0,
      stagger: 0.1,
      duration: 0.4,
      ease: "power2.out"
    });
  }
});

document.querySelectorAll("#navMenu a").forEach(link => {
  link.addEventListener("click", () => {
    navMenu.classList.remove("active");
    hamburger.classList.remove("open");
  });
});


// GSAP Blob Motion
gsap.to(".blob1", {
  x: 100,
  y: -80,
  duration: 12,
  repeat: -1,
  yoyo: true,
  ease: "sine.inOut"
});

gsap.to(".blob2", {
  x: -120,
  y: 100,
  duration: 15,
  repeat: -1,
  yoyo: true,
  ease: "sine.inOut"
});

gsap.to(".blob3", {
  x: 80,
  y: -120,
  duration: 18,
  repeat: -1,
  yoyo: true,
  ease: "sine.inOut"
});
