import React from "react";
import style from "./Footer.module.css";

const Footer = () => {
  return (
    <footer className={style.footer}>
      <p>
        &copy; {new Date().getFullYear()} Roger Designer. Todos os direitos
        reservados.
      </p>
    </footer>
  );
};

export default Footer;
