import React from "react";
import "../CSS/style.css";
import logo from "../images/logoloomi.png";
// this is header component consisting the name and header bar of the app
const Header = () => {
  return (
    <header className="header">
      <div className="logo">
        <h1>Loomi Travel</h1>
      </div>
      <div>
        <img src={logo} alt="" width={100} height={100} />
      </div>
    </header>
  );
};

export default Header;
