import React, { useState, useEffect } from "react";
import FooterCSS from "../ComponentsCSS/Footer.module.css";
import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
import { svgs, location } from "../Consts/consts";

function Footer() {
  const [width, setWidth] = useState(window.innerWidth);
  const changeWidth = () => {
    setWidth(window.innerWidth);
  };
  useEffect(() => {
    window.addEventListener("resize", changeWidth);

    return () => {
      window.removeEventListener("resize", changeWidth);
    };
  }, [width]);

  return (
    <footer>
      <div className={FooterCSS.container}>
        <nav>
          <ul>
            <li>
              <Link
                to="https://www.facebook.com/ophelianewyork/"
                target="_blank"
              >
                {svgs.facebook}
              </Link>
            </li>
            <li>
              <Link to="https://twitter.com/OpheliaNY_" target="_blank">
                {svgs.twitter}
              </Link>
            </li>
            <li>
              <Link to="https://www.instagram.com/opheliany/" target="_blank">
                {svgs.instagram}
              </Link>
            </li>
            <li>
              <Link to="https://www.youtube.com/@OpheliaNY" target="_blank">
                {svgs.youtube}
              </Link>
            </li>
          </ul>
        </nav>
        <nav>
          <ul>
            <li>
              <Link
                to="https://merchantshospitality.securetree.com/"
                target="_blank"
              >
                gift cards
              </Link>
            </li>
            <li>
              <Link to={location} target="_blank">
                {width > 750
                  ? "3 Mitchell Pl, 26th Floor (49th & 1st), New York, NY 10017"
                  : "Location"}
              </Link>
            </li>
            <li>
              <HashLink to="#contact">contact</HashLink>
            </li>
            <Link to="/email">
              <li>Email Signup</li>
            </Link>
          </ul>
        </nav>
      </div>
    </footer>
  );
}

export default Footer;
