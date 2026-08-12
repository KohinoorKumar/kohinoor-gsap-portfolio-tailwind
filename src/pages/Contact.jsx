import React, { useLayoutEffect, useRef } from "react";
import { Mail, MapPin, Github, Linkedin, Instagram, Send } from "lucide-react";
import gsap from "gsap";
import SectionLabel from "../components/SectionLabel";

export default function Contact() {
  const root = useRef(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".contact-reveal", {
        y: 40, opacity: 0, duration: .7, stagger: .1, ease: "power3.out"
      });
    }, root);
    return () => ctx.revert();
  }, []);

  return (
    <div ref={root} className="container page">
      <section className="contact-layout">
        <div className="contact-copy contact-reveal">
          <SectionLabel>CONTACT</SectionLabel>
          <h1>Let's work together.</h1>
          <p>Have a project in mind or just want to say hi? Feel free to reach out.</p>

          <div className="contact-info">
            <a href="mailto:kohinoorkumar1212@gmail.com"><Mail size={18}/>kohinoorkumar1212@gmail.com</a>
            <span><MapPin size={18}/> India</span>
          </div>

          <div className="social-row">
            <a href="https://github.com/KohinoorKumar" target="_blank" rel="noreferrer"><Github size={18}/></a>
            <a href="https://www.linkedin.com/in/kohinoor-kumar-63735023a/" target="_blank" rel="noreferrer"><Linkedin size={18}/></a>
            {/* <a href="https://instagram.com" target="_blank" rel="noreferrer"><Instagram size={18}/></a> */}
          </div>
        </div>

        <form className="contact-form contact-reveal" onSubmit={(e) => e.preventDefault()}>
          <input placeholder="Your Name" />
          <input type="email" placeholder="Your Email" />
          <input placeholder="Subject" />
          <textarea placeholder="Your Message" rows="7" />
          <button className="btn btn-primary" type="submit">Send Message <Send size={16}/></button>
        </form>
      </section>
    </div>
  );
}