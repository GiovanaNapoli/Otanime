import React from "react";
import "./style.css";
export default function HeaderIndex() {
  return (
    <header>
      <div className="header">
        <h1 className="logo">Otanime</h1>
        <div className="links">
          <a>Cadastre-se</a>
          <a className="register_button">login</a>
        </div>
      </div>
    </header>
  );
}
