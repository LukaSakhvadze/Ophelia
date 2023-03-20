import React, { useState } from "react";
import HeaderCss from "../ComponentsCSS/Header.module.css";
import OpheliaImg from "../Images/Ophelia.png";
import OpheliaImg2 from "../Images/Ophelia2.png";
import { HashLink } from "react-router-hash-link";
import { Link } from "react-router-dom";

function Header() {
  const [btnClicked, setBtnClicked] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const changeNavbar = () => {
    if (window.scrollY > 0) {
      setIsScrolled(true);
    } else {
      setIsScrolled(false);
    }
  };
  window.addEventListener("scroll", changeNavbar);
  const checkBtnClick =
    btnClicked === true ? "clickedMenuIcon" : "unclickedMenuIcon";

  return (
    <header className={HeaderCss[isScrolled ? "scrolled" : "unScrolled"]}>
      <div className={HeaderCss[isScrolled ? "scrolledImg" : "unScrolledImg"]}>
        <HashLink to="#">
          <img src={isScrolled ? OpheliaImg2 : OpheliaImg} alt=""></img>
        </HashLink>
      </div>
      <div className={HeaderCss.menuDiv}>
        <div className={HeaderCss.menuDiv2}>
          <div className={HeaderCss.menuDiv3}>
            <button
              className={HeaderCss.menuBtn}
              onClick={() => setBtnClicked(!btnClicked)}
            >
              <div
                className={`${HeaderCss.menuIcon} ${HeaderCss[checkBtnClick]}`}
              ></div>
            </button>
          </div>
          {btnClicked && (
            <div className={HeaderCss.wrappedList}>
              <li>
                <HashLink to="#videos">Videos</HashLink>
              </li>
              <li>
                <HashLink to="#history">History</HashLink>
              </li>
              <li>
                <HashLink to="#menus">Menus</HashLink>
              </li>
              <li>
                <Link
                  to="https://merchantshospitality.tripleseat.com/party_request/20400"
                  target="_blank"
                >
                  Private Events
                </Link>
              </li>
              <li>
                <HashLink to="#gallery">Gallery</HashLink>
              </li>
              <li>
                <HashLink to="#press">Press</HashLink>
              </li>
              <li>
                <HashLink to="#locationAndHours">Location and hours</HashLink>
              </li>
              <li>
                <a
                  href="https://www.paycomonline.net/v4/ats/web.php/jobs?jobSearchSettingsId=1282&clientkey=EAF3236FCC65BC7042F369D93B0CE2A1"
                  target="_blank"
                >
                  Join our team
                </a>
              </li>
              <li>
                <Link to="/reservation">Reservations</Link>
              </li>
            </div>
          )}
        </div>
      </div>
      <nav>
        <ul className={HeaderCss[isScrolled ? "scrolledList" : null]}>
          <li>
            <HashLink to="#videos">Videos</HashLink>
          </li>
          <li>
            <HashLink to="#history">History</HashLink>
          </li>
          <li>
            <HashLink to="#menus">Menus</HashLink>
          </li>
          <li>
            <Link
              to="https://merchantshospitality.tripleseat.com/party_request/20400"
              target="_blank"
            >
              Private Events
            </Link>
          </li>
          <li>
            <HashLink to="#gallery">Gallery</HashLink>
          </li>
          <li>
            <HashLink to="#press">Press</HashLink>
          </li>
          <li>
            <HashLink to="#locationAndHours">Location and hours</HashLink>
          </li>
          <li>
            <a
              href="https://www.paycomonline.net/v4/ats/web.php/jobs?jobSearchSettingsId=1282&clientkey=EAF3236FCC65BC7042F369D93B0CE2A1"
              target="_blank"
            >
              Join our team
            </a>
          </li>
          <li>
            <Link to="/reservation">Reservations</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
