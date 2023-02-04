import "./header.css";
import logoBbc from "../images/bbc-logo.jpg";
import iconSignIn from "../images/signIcon.jpg";
// import iconSearch from "../images/searchIcon.jpg";
import React, { useState } from "react";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Header = () => {
  const [moremenu, setMoremenu] = useState(true);
  function functionShowMenu() {
    setMoremenu(!moremenu);
  }
  const hiddenblocks = moremenu ? "hiddenstate" : "visiblestate";
  return (
    <div>
      <div className="topBlock">
        <div className="blockLogoImg">
          <img className="imgBBC" src={logoBbc} alt="LOGO BBC" />
        </div>
        <div className="blockSignInImg">
          <img className="imgSign" src={iconSignIn} alt="icon" />
        </div>
        <div className="blockSignInA">
          <p className="signIn">Sign in</p>
        </div>
        <ul className="menutop">
          <li className="menuList">Home</li>
          <li className="menuList">News</li>
          <li className="menuList">Sport</li>
          <li className="menuList">Reel</li>
          <li className="menuList">Worklife</li>
          <li className="menuList">Travel</li>
          <li className="menuList">Future</li>
          <li className="menuList">Culture</li>
        </ul>
        <div>
          <div className="threeDots" onClick={functionShowMenu}>
            <div className="blockDots">
              <div className="dot"></div>
              <div className="dot"></div>
              <div className="dot"></div>
            </div>
          </div>
        </div>
        <div className="searchBlock">
          <i className="fa fa-search" aria-hidden="true"></i>
          <input
            type="text"
            placeholder="         Search BBC..."
            className="searchBut"
            aria-hidden="true"
          />
        </div>
      </div>
      <div className={hiddenblocks}>
        <ul className="menubottom">
          <li className="menuList">TV</li>
          <li className="menuList">Weather</li>
          <li className="menuList">Sounds</li>
        </ul>
      </div>
    </div>
  );
};
export default Header;
