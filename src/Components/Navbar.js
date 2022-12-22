import React from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { useRef } from "react";
import "../Styles/main.css";

export default function Navbar() {
  const navRef = useRef();

  function showNavBar() {
    // navRef.current.classList.toggle("responsive_nav");
    if (!navRef.current) console.log(navRef.current.value);
  }
  return (
    <header>
      <h3 href="/">Bens math project</h3>
      <nav>
        <a href="/">Home</a>
        <a href="/subject/algebra">Algebra</a>
        <a href="/subject/calculus">Calculus</a>
        <a href="/subject/geometry">Geometry</a>
        <button className="nav-btn nav-close-btn" onClick={showNavBar}>
          <FaTimes />
        </button>
      </nav>
      <button className="nav-btn" onClick={showNavBar}>
        <FaBars />
      </button>
    </header>
  );
}
