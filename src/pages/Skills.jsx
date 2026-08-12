import React, { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import SectionLabel from "../components/SectionLabel";
import SkillCard from "../components/SkillCard";

const skills = [
  ["HTML", "</>", "Frontend"],
  ["CSS", "#", "Frontend"],
  ["JavaScript", "JS", "Frontend"],
  ["React", "⚛", "Frontend"],
  ["Node.js", "N", "Backend"],
  ["Express", "EX", "Backend"],
  ["MongoDB", "M", "Database"],
  ["Git", "⌘", "Tools"]
];

export default function Skills() {
  const root = useRef(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".skills-heading > *", { y: 35, opacity: 0, duration: .6, stagger: .12 });
      gsap.from(".skill-card", {
        y: 55, duration: .65, stagger: .08,
        delay: .2, ease: "power3.out"
      });
    }, root);
    return () => ctx.revert();
  }, []);

  return (
    <div ref={root} className="container page">
      <section className="page-heading skills-heading">
        <SectionLabel>MY SKILLS</SectionLabel>
        <h1>Technologies I work with.</h1>
        <p>Modern tools for building responsive and interactive web applications.</p>
      </section>

      <section className="grid sm:grid-cols-2 md:grid-cols-4 gap-4 mb-24">
        {skills.map((skill,index) => (
           <SkillCard key={index} skill={skill}/>
        ))}
      </section>

      <section className="skill-note ">
        <span>01</span>
        <div><h2>Learning mindset</h2><p>Tools change. The ability to understand systems, solve problems and learn quickly stays valuable.</p></div>
      </section>
    </div>
  );
}