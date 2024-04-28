import React from "react";
import { Link } from "react-router-dom";
import "../GlobalStyles/Common.css";
import catLogo from "../assets/icons/catHome-removebg-preview.png";

let Navigation = () => {
  return (
    <nav className={"shadow-md border border-gray-300"}>
      <div className="navBar">
        <div className="homeLogo">
          <Link to="/">
            <img className="catLogo" src={catLogo} width="50" height="50" />
          </Link>
        </div>

        <div className="flexContainerListNav">
          {/*<li className="listNav tracking-wider">*/}
          {/*  <Link to="/Teorie">Algoritmică</Link>*/}
          {/*</li>*/}
          <li className="listNav tracking-wider">
            <Link to="/Atestat">Atestat</Link>
          </li>
          <li className="listNav tracking-wider">
            <Link to="/SubiecteBac">Subiecte Bac</Link>
          </li>
          {/*<li className="listNav tracking-wider">*/}
          {/*  <Link to="/JavaScript">*/}
          {/*      <JsLogo/>*/}
          {/*  </Link>*/}
          {/*</li>*/}
        </div>
      </div>
    </nav>
  );
};
export default Navigation;
