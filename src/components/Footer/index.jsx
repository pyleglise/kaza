import React from "react";
import logo from "../../assets/logo-kasa-white.svg";
import "../../utils/style/_footer.scss";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="logo-container">
        <img src={logo} className="logo-img" alt="logo" />
      </div>
      <p className="footer-text"> © 2023 Kasa. All rights reserved</p>
    </footer>
  );
}
