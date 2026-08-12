import React, { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import SectionLabel from "../components/SectionLabel";
import ProjectCard from "../components/ProjectCard";
import { projects } from "../data/projects";

export default function Projects() {
  const root = useRef(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".projects-heading > *", { y: 35, opacity: 0, duration: .6, stagger: .12 });
      gsap.from(".projects-list .project-card", {
        y: 50, opacity: 0, duration: .7, stagger: .12, delay: .25,
        ease: "power3.out"
      });
    }, root);
    return () => ctx.revert();
  }, []);

  return (
    <div ref={root} className="container page">
      <section className="page-heading projects-heading">
        <SectionLabel>MY PROJECTS</SectionLabel>
        <h1>Things I've built.</h1>
        <p>A selection of projects demonstrating development, design and problem-solving.</p>
      </section>

      <section className="projects-list">
        {projects.map(project => <ProjectCard key={project.id} project={project} />)}
      </section>
    </div>
  );
}