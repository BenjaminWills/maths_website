import React from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { useRef } from "react";
import "../Styles/main.css";

export default function Navbar() {
  const navRef = useRef();

  return (
    <header>
      <h3 href="/">Bens math project</h3>
      <nav>
        <a href="/">Home</a>
        <a href="/algebra">Algebra</a>
        <a href="/calculus">Calculus</a>
        <a href="/geometry">Geometry</a>
        <button className="nav-btn nav-close-btn">
          <FaTimes />
        </button>
      </nav>
      <button className="nav-btn">
        <FaBars />
      </button>
    </header>
  );
}
