import React from 'react'
import { ArrowUpRight, Github, Linkedin, Instagram } from "lucide-react";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="footer">
      <div>
        <Link className="logo" to="/">KOHINOOR<span>.</span></Link>
        <p>Building useful digital products.</p>
      </div>

      <div className="socials">
        <a href="https://github.com/KohinoorKumar" target="_blank" rel="noreferrer"><Github size={17} /></a>
        <a href="https://www.linkedin.com/in/kohinoor-kumar-63735023a/" target="_blank" rel="noreferrer"><Linkedin size={17} /></a>
        {/* <a href="https://instagram.com" target="_blank" rel="noreferrer"><Instagram size={17} /></a> */}
        {/* <Link to="/contact"><ArrowUpRight size={17} /></Link> */}
      </div>

      <small>© 2026 Kohinoor. All rights reserved.</small>
    </footer>
  );
}