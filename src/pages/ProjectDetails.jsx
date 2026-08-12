import React, { useLayoutEffect, useRef } from "react";
import { Link, useParams } from "react-router-dom";
import { ArrowLeft, ArrowUpRight, Github } from "lucide-react";
import gsap from "gsap";
import { projects } from "../data/projects";

export default function ProjectDetails() {
  const { id } = useParams();
  const project = projects.find(p => p.id === id) || projects[0];
  const root = useRef(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".detail-reveal", {
        y: 35, opacity: 0, duration: .7, stagger: .1, ease: "power3.out"
      });
    }, root);
    return () => ctx.revert();
  }, [id]);

  return (
    <div ref={root} className="container page">
      <Link className="back-link detail-reveal" to="/projects"><ArrowLeft size={15}/> Back to Projects</Link>

      <section className="detail-hero">
        <div className="detail-reveal">
          <span className="project-number">{project.number}</span>
          <h1>{project.title}</h1>
          <p>{project.longDescription}</p>
          <div className="hero-actions">
            <a className="btn btn-primary" href={project?.live}  target="_blank" rel="noreferrer">Live Demo <ArrowUpRight size={16}/></a>
            <a className="btn" href={project?.code} target="_blank" rel="noreferrer"><Github size={16}/> View Code</a>
          </div>
        </div>

        <div className="detail-image detail-reveal">
          <img src={project.image} alt="" />
        </div>
      </section>

      <section className="detail-grid">
        <div className="detail-panel detail-reveal">
          <span className="eyebrow">TECH STACK</span>
          <div className="tags large-tags">{project.stack.map(x => <span key={x}>{x}</span>)}</div>
        </div>

        <div className="detail-panel detail-reveal">
          <span className="eyebrow">KEY FEATURES</span>
          <ul className="feature-list">
            {project.features.map(x => <li key={x}>✓ {x}</li>)}
          </ul>
        </div>
      </section>
    </div>
  );
}