import React from "react";
import WineCSS from "../../ComponentsCSS/MenuComponentsCSS/Wine.module.css";
import { Link } from "react-router-dom";
import {
  downloadUrl,
  wines1,
  wines2,
  wines3,
} from "../../Massives,Consts/Consts";

function Wine() {
  return (
    <div className={WineCSS.wine}>
      <p>Glass/Bottle</p>
      <div className={WineCSS.downloadBtnDiv}>
        <Link to={downloadUrl} target="_blank">
          <button className={WineCSS.downloadBtn}>Download PDF</button>
        </Link>
      </div>
      <div className={WineCSS.column}>
        <div className={WineCSS.container}>
          <h2>Sparkling</h2>
          {wines1.map((wine) => (
            <div key={wine.id}>
              <h3>{wine.h3}</h3>
              <p>{wine.p}</p>
            </div>
          ))}
          <hr></hr>
          <h2>White + Rosé</h2>
          {wines2.map((wine) => (
            <div key={wine.id}>
              <h3>{wine.h3}</h3>
              <p>{wine.p}</p>
            </div>
          ))}
          <hr></hr>
          <h2>Red</h2>
          {wines3.map((wine) => (
            <div key={wine.id}>
              <h3>{wine.h3}</h3>
              <p>{wine.p}</p>
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

export default Wine;
