import gsap from "gsap";

export function pageEnter(element) {
  const ctx = gsap.context(() => {
    gsap.from(element, {
      opacity: 0,
      y: 18,
      duration: 0.55,
      ease: "power3.out"
    });
  }, element);

  return ctx;
}