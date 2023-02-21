import "./header.css";
import "./menu.css";
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
          <li className="menuList" id="menuHomeSecondBottom">Home</li>
          <li className="menuList" id="menuNewsBottom">News</li>
          <li className="menuList" id="menuSportBottom">Sport</li>
          <li className="menuList" id="menuReelBottom">Reel</li>
          <li className="menuList" id="menuWorklifeBottom">Worklife</li>
          <li className="menuList" id="menuTravelBottom">Travel</li>
          <li className="menuList" id="menuFutureBottom">Future</li>
          <li className="menuList" id="menuCultureBottom">Culture</li>
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
        <li className="menuList" id="menuHome">Home</li>
          <li className="menuList" id="menuNews">News</li>
          <li className="menuList" id="menuSport">Sport</li>
          <li className="menuList" id="menuReel">Reel</li>
          <li className="menuList" id="menuWorklife">Worklife</li>
          <li className="menuList" id="menuTravel">Travel</li>
          <li className="menuList" id="menuFuture">Future</li>
          <li className="menuList" id="menuCulture">Culture</li>
          <li className="menuList" id="menuTV">TV</li>
          <li className="menuList" id="menuWeather">Weather</li>
          <li className="menuList" id="menuSounds">Sounds</li>
        </ul>
      </div>
    </div>
  );
};
export default Header;
