import React from "react";
import { NavLink, Link } from "react-router-dom";

const navLink = ({ isActive }) =>
  `px-3 py-2 rounded-md text-sm ${isActive ? "text-accent" : "text-slate-300 hover:text-white"}`;

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 bg-slate-950/80 border-b border-slate-800/50 backdrop-blur">
      <div className="max-w-5xl mx-auto px-4 h-14 flex items-center justify-between">
        <Link to="/" className="font-display text-accent text-lg font-semibold tracking-wider">
          harsh.dev
        </Link>
        <nav className="flex items-center gap-1 font-display">
          <NavLink to="/" className={navLink} end>
            Home
          </NavLink>
          <NavLink to="/about" className={navLink}>
            About
          </NavLink>
          <NavLink to="/projects" className={navLink}>
            Projects
          </NavLink>
          <NavLink to="/contact" className={navLink}>
            Contact
          </NavLink>
        </nav>
      </div>
    </header>
  );
}
