import React from "react";
import BeerCSS from "../../ComponentsCSS/MenuComponentsCSS/Beer.module.css";
import { Link } from "react-router-dom";
import { downloadUrl } from "../../Consts/consts";
import { beers } from "../../Consts/beers.const";

function Beer() {
  return (
    <div className={BeerCSS.beer}>
      <div className={BeerCSS.downloadBtnDiv}>
        <Link to={downloadUrl} target="_blank">
          <button className={BeerCSS.downloadBtn}>Download PDF</button>
        </Link>
      </div>
      <div className={BeerCSS.column}>
        <div className={BeerCSS.container}>
          {beers.map((beer) => (
            <div key={beer.id}>
              <h3>{beer.h3}</h3>
              <p>{beer.p}</p>
            </div>
          ))}
          <br></br>
          <br></br>
          <br></br>
        </div>
      </div>
    </div>
  );
}

export default Beer;
