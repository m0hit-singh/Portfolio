import React from "react";

export default function Header() {
  return (
    <nav>
      <span className="logo">m0hit-singh</span>
      <ul>
        <li>
          <a href="#home">Home</a>
        </li>
        <li>
          <a href="#about">About</a>
        </li>
        {/* <li>
          <a href="#projects">Projects</a>
        </li> */}
        <li>
          <a href="#contact">Contacts</a>
        </li>
      </ul>
    </nav>
  );
}
