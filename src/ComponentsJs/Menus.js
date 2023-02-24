import React from 'react'
import MenusCSS from '../ComponentsCSS/Menus.module.css'

function Menus() {
  return (
    <div className={MenusCSS.menus}>
        <h2>Menus</h2>
        <nav>
            <ul>
                <li>Cuisine</li>
                <li>Sweets</li>
                <li>Cocktails</li>
                <li>Wine</li>
                <li>Beer</li>
            </ul>
        </nav>
        <p>By Chef Antelmo Ambrosio</p>
        <div className={MenusCSS.downloadBtnDiv}>
            <button className={MenusCSS.downloadBtn}><a>Download PDF</a></button>
        </div>
    </div>
  )
}

export default Menus