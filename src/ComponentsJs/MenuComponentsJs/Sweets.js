import React from 'react'
import SweetCSS from '../../ComponentsCSS/MenuComponentsCSS/Sweets.module.css'
import { Link } from 'react-router-dom'

const downloadUrl='https://media-cdn.getbento.com/accounts/0dc3afa185c13d245b6a95eba90422e9/media/FJPC8Y2jSXmctJYojNeY_Ophelia%20Menus%20Cuisine.pdf'

function Sweets() {
  return (
    <div className={SweetCSS.sweets}>
      <div className={SweetCSS.downloadBtnDiv}>
        <Link to={downloadUrl} target="_blank"><button className={SweetCSS.downloadBtn}>Download PDF</button></Link>
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
  )
}

export default Sweets