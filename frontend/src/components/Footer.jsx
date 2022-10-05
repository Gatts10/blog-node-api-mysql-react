import React from "react";
import Logo from "../assets/logo.png";

export default function Footer() {
  return (
    <footer>
      <img src={Logo} alt="logo" />
      <p>
        Made with <span>♥️</span> and <b>React.js</b>.
      </p>
    </footer>
  );
}
