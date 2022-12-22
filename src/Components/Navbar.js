import React from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { useRef } from "react";

export default function Navbar() {
  const navRef = useRef();

  function showNavBar() {
    navRef.current.classList.toggle("responsive_nav");
  }
  return (
    <header>
      <h3>Logo</h3>
      <nav>
        <a href="/">Home</a>
        <a href="/">Algebra</a>
        <a href="/">Calculus</a>
        <a href="/">Geometry</a>
        <button onClick={showNavBar}>
          <FaTimes />
        </button>
      </nav>
      <button onClick={showNavBar}>
        <FaBars />
      </button>
    </header>
  );
}
