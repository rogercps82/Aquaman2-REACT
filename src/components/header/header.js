import React from "react";
import { Link } from "react-router-dom";

import "./styles.css";
import Logo from "../../assets/Logo.png";

function Header() {
  return (
    <header>
      <img id="logo" src={Logo} alt="Logo" />
      <nav>
        <ul>
          <Link style={{ textDecoration: "none" }} to="/">
            <li>Home</li>
          </Link>
          <Link style={{ textDecoration: "none" }} to="/contato.js">
            <li>Contato</li>
          </Link>
          <Link style={{ textDecoration: "none" }} to="/fotos.js">
            <li>Fotos</li>
          </Link>
          <Link style={{ textDecoration: "none" }} to="/comentarios.js">
            <li>Comentarios</li>
          </Link>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
