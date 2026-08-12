import React, { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import SectionLabel from "../components/SectionLabel";
import { ArrowUpRight, Download } from "lucide-react";

export default function About() {
  const root = useRef(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".about-reveal", {
        y: 45, opacity: 0, duration: .75, stagger: .1,
        ease: "power3.out"
      });
    }, root);
    return () => ctx.revert();
  }, []);

  return (
    <div ref={root} className="container page">
      <section className="page-heading about-reveal">
        <SectionLabel>ABOUT ME</SectionLabel>
        <h1>Get to know me.</h1>
        <p>I'm a developer who enjoys turning complex problems into simple, useful digital products.</p>
      </section>

      <section className="about-layout">
        <div className="about-card about-reveal">
          <div className="portrait-placeholder large">
            <img className="h-100% w-100% object-cover" src="https://media.licdn.com/dms/image/v2/D5603AQGmAMDQrT2PLw/profile-displayphoto-crop_800_800/B56Z7K1YcDJsAM-/0/1781519452896?e=1788393600&v=beta&t=7e-xcQ8X9HqaiX6MkX9YIm8uCBKZHj2TdA6Lq81azpw" alt="kohinoor" />
          </div>
        </div>

        <div className="about-content">
          <div className="about-reveal">
            <h2>I build things for the web.</h2>
            <p>
              I enjoy learning how technology, products and people connect.
              My focus is full-stack development, product thinking and creating
              interfaces that feel clear rather than complicated.
            </p>
            <p>
              Outside coding, I like learning new ideas, reading and working
              on projects that turn observations into useful products.
            </p>
            {/* <a className="btn" href="/cv.pdf"><Download size={16}/> Download CV</a> */}
          </div>

          <div className="info-grid about-reveal">
            {[
              ["Name", "Kohinoor"],
              ["Location", "India"],
              ["Experience", "Fresher"],
              ["Focus", "Full Stack"]
            ].map(([label, value]) => (
              <div className="info-box" key={label}><span>{label}</span><strong>{value}</strong></div>
            ))}
          </div>
        </div>
      </section>

      <section className="approach section">
        <SectionLabel>MY APPROACH</SectionLabel>
        <div className="approach-grid">
          {[
            ["01", "Understand", "Start with the problem before choosing the technology."],
            ["02", "Design", "Turn the problem into a simple and usable experience."],
            ["03", "Build", "Ship a focused solution and learn from real usage."],
            ["04", "Improve", "Use feedback to make the product progressively better."]
          ].map(([num, title, text]) => (
            <div className="approach-item about-reveal" key={num}>
              <span>{num}</span><h3>{title}</h3><p>{text}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}