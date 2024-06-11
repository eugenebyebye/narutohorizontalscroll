gsap.registerPlugin(ScrollTrigger);

document.addEventListener("DOMContentLoaded", () => {
  const leftImage = document.getElementById("hero-img-left");
  const rightImage = document.getElementById("hero-img-right");
  const leftOverlay = document.getElementById("left-overlay");
  const rightOverlay = document.getElementById("right-overlay");
  const sections = gsap.utils.toArray("section");

  leftOverlay.addEventListener("mouseenter", () => {
    leftImage.style.filter = "grayscale(0%) contrast(100%) brightness(100%)";
    rightImage.style.filter = "grayscale(100%) contrast(200%) brightness(150%)";
  });

  leftOverlay.addEventListener("mouseleave", () => {
    leftImage.style.filter = "grayscale(100%) contrast(200%) brightness(150%)";
    rightImage.style.filter = "grayscale(100%) contrast(200%) brightness(150%)";
  });

  rightOverlay.addEventListener("mouseenter", () => {
    rightImage.style.filter = "grayscale(0%) contrast(100%) brightness(100%)";
    leftImage.style.filter = "grayscale(100%) contrast(200%) brightness(150%)";
  });

  rightOverlay.addEventListener("mouseleave", () => {
    rightImage.style.filter = "grayscale(100%) contrast(100%) brightness(100%)";
    leftImage.style.filter = "grayscale(100%) contrast(200%) brightness(150%)";
  });

  let scrollTween = gsap.to(sections, {
    xPercent: -100 * (sections.length - 1),
    ease: "none",
    scrollTrigger: {
      trigger: ".wrapper",
      pin: true,
      scrub: 0.5,
      snap: 1 / (sections.length - 1),
      start: "top top",
      end: () => "+=" + document.querySelector(".wrapper").offsetWidth,
    },
  });
  gsap.to(".logo", {
    opacity: "1",
    scrollTrigger: {
      trigger: ".logo",
      scrub: 1.5,
      start: "bottom top",
      end: 600,
    },
  });
  gsap.to(".logo", {
    fontSize: "2.5rem",
    top: "4rem",
    duration: 1,
    scrollTrigger: {
      trigger: ".hero",
      start: "bottom top+=1", // Когда низ .hero коснется верха окна
      end: "+=1500",
      scrub: true,
    },
  });

  gsap.to(".line", {
    height: "100vh",
    scrollTrigger: {
      trigger: ".line",
      scrub: 0.5,
      start: "center center",
      end: 2000,
    },
  });

  document.querySelectorAll(".character").forEach((el) => {
    gsap.to(el.querySelector(".caption"), {
      x: 0,
      y: 0,
      scrollTrigger: {
        containerAnimation: scrollTween,
        trigger: el.querySelector(".caption"),
        start: "top bottom",
        end: "+=1000",
        scrub: 0.5,
      },
    });

    gsap.to(el.querySelector(".quote"), {
      y: 0,
      ease: "none",
      scrollTrigger: {
        containerAnimation: scrollTween,
        trigger: el.querySelector(".quote"),
        start: "top bottom",
        end: "+=20%",
        scrub: 0.5,
      },
    });

    gsap.to(el.querySelector(".nickname"), {
      y: 0,
      ease: "none",
      scrollTrigger: {
        containerAnimation: scrollTween,
        trigger: el.querySelector(".nickname"),
        start: "top bottom",
        end: "+=10%",
        scrub: 0.5,
      },
    });

    gsap.to(el.querySelector(".block"), {
      x: 0,
      ease: "none",
      scrollTrigger: {
        containerAnimation: scrollTween,
        trigger: el.querySelector(".block"),
        start: "top bottom",
        end: "+=" + window.innerWidth,
        scrub: 0.5,
      },
    });

    gsap.to(el.querySelector("img"), {
      y: 0,
      ease: "none",
      scrollTrigger: {
        containerAnimation: scrollTween,
        trigger: el.querySelector("img"),
        start: "top bottom",
        end: "+=50%",
        scrub: 0.5,
      },
    });

    gsap.to(el.querySelector(".big-text"), {
      y: 0,
      ease: "none",
      scrollTrigger: {
        containerAnimation: scrollTween,
        trigger: el.querySelector(".big-text"),
        start: "top bottom",
        end: "+=100%",
        scrub: 0.5,
      },
    });
  });
});
