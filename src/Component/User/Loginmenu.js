import React from "react";
import { Link } from "react-router-dom";
import './css/Loginmenu.css'

const loginmenuPage = () => {
  return (
    <div className="loginmenumenu-container">
      <Link to="/Login">
        <button className="loginmenu-button">Buyer login</button>
      </Link>
      <Link to="/Sellerlogin">
        <button className="loginmenu-button">Seller login</button>
      </Link>
      <Link to="/Adminlogin">
        <button className="loginmenu-button">Admin login</button>
      </Link>
    </div>
  );
};

export default loginmenuPage;
