import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export function reveal(selector, options = {}) {
  const defaults = {
    y: 45,
    opacity: 0,
    duration: 0.8,
    stagger: 0.08,
    ease: "power3.out",
    scrollTrigger: {
      start: "top 85%",
      toggleActions: "play none none reverse"
    }
  };

  return gsap.from(selector, { ...defaults, ...options });
}