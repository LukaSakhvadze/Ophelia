import React from "react";
import SweetCSS from "../../ComponentsCSS/MenuComponentsCSS/Sweets.module.css";
import { Link } from "react-router-dom";
import { downloadUrl } from "../../Consts/consts";

function Sweets() {
  return (
    <div className={SweetCSS.sweets}>
      <div className={SweetCSS.downloadBtnDiv}>
        <Link to={downloadUrl} target="_blank">
          <button className={SweetCSS.downloadBtn}>Download PDF</button>
        </Link>
      </div>
      <div className={SweetCSS.column}>
        <div className={SweetCSS.container}>
          <div>
            <h3>chocolate coulant • 12</h3>
            <p>VANILLA BEAN ICE CREAM + RASPBERRIES</p>
          </div>
          <div>
            <h3>tiramisu • 12</h3>
            <p>COFFEE SOAKED LADYFINGERS + MASCARPONE + COFFEE POWDER</p>
          </div>
          <br></br>
          <br></br>
          <br></br>
        </div>
      </div>
    </div>
  );
}

export default Sweets;
