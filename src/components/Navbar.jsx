import React from 'react'
import { Link, NavLink } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";

const links = [
  ["/", "Home"],
  ["/about", "About"],
  ["/skills", "Skills"],
  ["/projects", "Projects"],
  ["/contact", "Contact"]
];

export default function Navbar() {
  return (
    <header className="navbar mx-auto w-[calc(100%-28px)] max-w-[1180px] md:w-[calc(100%-48px)]">
      <Link className="logo" to="/">KOHINOOR<span>.</span></Link>

      <nav className="hidden md:flex">
        {links.map(([to, label]) => (
          <NavLink
            key={to}
            to={to}
            end={to === "/"}
            className={({ isActive }) => isActive ? "active" : ""}
          >
            {label}
          </NavLink>
        ))}
      </nav>

      <Link className="nav-cta" to="/contact">
        Let's Talk <ArrowUpRight size={15} />
      </Link>
    </header>
  );
}