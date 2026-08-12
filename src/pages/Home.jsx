import React, { useLayoutEffect, useRef } from "react";
import { ArrowDown, ArrowUpRight, Download, Github, Linkedin, Mail } from "lucide-react";
import { Link } from "react-router-dom";
import gsap from "gsap";
import SectionLabel from "../components/SectionLabel";
import ProjectCard from "../components/ProjectCard";
import { projects } from "../data/projects";
import { reveal } from "../animations/reveal";
import profilePicture from '../images/profile2.jpg'

export default function Home() {
  const root = useRef(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults : {ease: "power3.out"}})
      tl.from(".hero-kicker", {y: 25, opacity: 0, duration: .5}) 
        .from(".hero-title", {y: 25, opacity: 0, duration: .7}, "-=.25")
        .from("hero-copy", {y: 25, opacity: 0, duration: .5}, "-=.35")
        .from("hero-actions", {y: 25, opacity: 0, duration: .45}, "-=.3")
        .from(".hero-visual", {y: 25, opacity: 0, duration: .8}, "-=.65")

      gsap.to(".hero-glow", {
        scale: 1.15,
        opacity: .75,
        duration: 2.2,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut"
      });

      reveal(".home-projects .project-card", {
        y: 50,
        scrollTrigger: {trigger: ".home-projects", 
          start: "top 78%"
        }
      });
    }, root)
    return () => ctx.revert()
  }, []);

  return (
    <div ref={root}>
      <section className="hero container">
        <div className="hero-copy-wrap">
          <div className="hero-kicker">HELLO, I'M</div>
          <h1 className="hero-title">Kohinoor<span>.</span></h1>
          <p className="hero-copy">
            I build digital products and <strong>bring ideas to life.</strong>
          </p>
          <p className="hero-description">
            Full Stack Developer focused on building useful, beautiful and
            user-centric web experiences.
          </p>
          <div className="hero-actions">
            <Link className="btn btn-primary" to="/projects">View My Work <ArrowUpRight size={17} /></Link>
            {/* <a className="btn" href="/cv.pdf"><Download size={16} /> Download CV</a> */}
          </div>
        </div>

        <div className="hero-visual">
          <div className="hero-glow" />
          <div className="portrait">
            <div className="portrait-placeholder">
              <img className="h-100% w-100% object-cover" src={profilePicture} alt="kohinoor" />
            </div>
          </div>
          <div className="availability"><i /> Available for opportunities</div>
          <div className="hero-socials">
            <a href="https://github.com/KohinoorKumar" target="_blank" rel="noreferrer"><Github size={18}/></a>
            <a href="https://www.linkedin.com/in/kohinoor-kumar-63735023a/" target="_blank" rel="noreferrer"><Linkedin size={18}/></a>
            <a href="mailto:kohinoorkumar1212@gmail.com"><Mail size={18}/></a>
          </div>
        </div>

        <div className="scroll-hint"><ArrowDown size={14}/> SCROLL</div>
      </section>

      <section className="home-projects container section">
        <div className="section-head">
          <div>
            <SectionLabel>FEATURED PROJECTS</SectionLabel>
            <h2>Some things I've built</h2>
          </div>
          <Link className="text-link" to="/projects">View all <ArrowUpRight size={15}/></Link>
        </div>

        <div className="project-grid">
          {projects.map(project => <ProjectCard key={project.id} project={project} />)}
        </div>
      </section>
    </div>
  );
}