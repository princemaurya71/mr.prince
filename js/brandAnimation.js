window.addEventListener("load", function () {

  gsap.registerPlugin(ScrollTrigger);

  const track = document.querySelector(".brand-track");
  if (!track) return;

  track.innerHTML += track.innerHTML;

  const totalWidth = track.scrollWidth / 2;

  gsap.to(track, {
    x: -totalWidth,
    duration: 20,
    ease: "none",
    repeat: -1,
    force3D: true
  });

});

// Pause on hover
// track.addEventListener("mouseenter", () => marquee.pause());
// track.addEventListener("mouseleave", () => marquee.play());


// Speed Control on Hover
track.addEventListener("mouseenter", () => marquee.timeScale(0.3));
track.addEventListener("mouseleave", () => marquee.timeScale(1.5));

// ScrollTrigger (Play only when visible)
ScrollTrigger.create({
  trigger: ".brand-section",
  start: "top 90%",
  onEnter: () => marquee.play(),
  onLeave: () => marquee.pause(),
  onEnterBack: () => marquee.play(),
  onLeaveBack: () => marquee.pause(),
});
