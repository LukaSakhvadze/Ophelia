import React from "react";
import CuisineCss from "../../ComponentsCSS/MenuComponentsCSS/Cuisine.module.css";
import { Link } from "react-router-dom";
import { downloadUrl } from "../../Consts/consts";
import { cuisines } from "../../Consts/cuisine.const";

function Cuisine() {
  return (
    <div className={CuisineCss.cuisine}>
      <p>By Chef Antelmo Ambrosio</p>
      <div className={CuisineCss.downloadBtnDiv}>
        <Link to={downloadUrl} target="_blank">
          <button className={CuisineCss.downloadBtn}>Download PDF</button>
        </Link>
      </div>
      <div className={CuisineCss.column}>
        <div className={CuisineCss.container}>
          {cuisines.map((cuisine) => (
            <div key={cuisine.id}>
              <h3>{cuisine.h3}</h3>
              <p>{cuisine.p}</p>
            </div>
          ))}
          <div>
            <h3>charcuterie & cheese board (for two) • 38</h3>
            <p className={CuisineCss.beforeComment}>
              PROSCIUTTO + SOPRESSATA + CHORIZO + AGED GOUDA + BRIE + DRIED
              FRUIT + CRISPY SOURDOUGH
            </p>
            <p className={CuisineCss.comment}>
              *CONSUMING RAW OR UNDERCOOKED MEATS, POULTRY, SEAFOOD, SHELLFISH
              OR EGGS MAY INCREASE YOUR RISK OF FOODBORNE ILLNESS
            </p>
          </div>
          <div>
            <h3>crispy pommes & caviar bites • 38</h3>
            <p>
              LAYERED POTATO BITES + CRÈME FRAICHE + AMERICAN CAVIAR + CHIVES
            </p>
          </div>
          <div>
            <h3>ribeye steak • 59</h3>
            <p>
              14 OZ BLACK ANGUS CHOICE + POTATO GRATIN + GRILLED ASPARAGUS +
              PEPPERCORN SAUCE
            </p>
          </div>
          <div>
            <h3>taste of the tower (for two) • 79</h3>
            <p>
              SMOKED SALMON CROSTINI + BUTTERNUT SQUASH PHYLLO BITES +
              PROSCIUTTO DE PARMA CROSTINI + CRISPY POMMES AND CAVIAR+ CRISPY
              PRAWN TACOS + FRENCH ONION SLIDERS
            </p>
          </div>
          <br></br>
          <br></br>
          <br></br>
        </div>
      </div>
    </div>
  );
}

export default Cuisine;
