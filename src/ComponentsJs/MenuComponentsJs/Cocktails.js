import React from "react";
import CocktailsCSS from "../../ComponentsCSS/MenuComponentsCSS/Cocktails.module.css";
import { Link } from "react-router-dom";
import { downloadUrl } from "../../Consts/consts";
import { cocktails } from "../../Consts/cocktails.const";

function Cocktails() {
  return (
    <div className={CocktailsCSS.cocktails}>
      <h2>Cocktails</h2>
      <p>By Amir Babayoff</p>
      <div className={CocktailsCSS.downloadBtnDiv}>
        <Link to={downloadUrl} target="_blank">
          <button className={CocktailsCSS.downloadBtn}>Download PDF</button>
        </Link>
      </div>
      <div className={CocktailsCSS.column}>
        <div className={CocktailsCSS.container}>
          {cocktails.map((cocktail) => (
            <div key={cocktail.id}>
              <h3>{cocktail.h3}</h3>
              <p>{cocktail.p}</p>
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

export default Cocktails;
