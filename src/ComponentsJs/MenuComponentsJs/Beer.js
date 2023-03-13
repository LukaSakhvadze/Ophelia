import React from 'react'
import BeerCSS from '../../ComponentsCSS/MenuComponentsCSS/Beer.module.css'
import { Link } from 'react-router-dom'

const downloadUrl='https://media-cdn.getbento.com/accounts/0dc3afa185c13d245b6a95eba90422e9/media/FJPC8Y2jSXmctJYojNeY_Ophelia%20Menus%20Cuisine.pdf'

function Beer() {
  return (
    <div className={BeerCSS.beer}>
      <div className={BeerCSS.downloadBtnDiv}>
        <Link to={downloadUrl} target="_blank"><button className={BeerCSS.downloadBtn}>Download PDF</button></Link>
      </div>
      <div className={BeerCSS.column}>
        <div className={BeerCSS.container}>
          <div>
            <h3>pale lager • 8</h3>
            <p>4.7% | RADEBERGER PILSNER RIEDENBURGER BRAUHAUS | GERMANY</p>
          </div>
          <div>
            <h3>kölsch • 8</h3>
            <p>5% | REISSDORF KÖLSCH BRAUEREI HEINRICH REISSDORF | GERMANY</p>
          </div>
          <div>
            <h3>IPA • 10</h3>
            <p>7% | HIGHER BURNIN' | LIC BEER PROJECT | USA</p>
          </div>
          <div>
            <h3>stout • 10</h3>
            <p>9% | OLD RASPUTIN-RUSSIAN IMPERIAL STOUT NORTH COAST | USA</p>
          </div>
          <div>
            <h3>ale • 10</h3>
            <p>4.5% | AMERICAN AMBER | ABITA, LOUISIANA | USA</p>
          </div>
          <div>
            <h3>belgian pale ale • 14</h3>
            <p>6.9% | ORVAL BELGIAN PALE ALE</p>
          </div>
          <div>
            <h3>cider • 13</h3>
            <p>6.9% | WOLFFER ROSE CIDER, NY | USA</p>
          </div>
          <br></br>
          <br></br>
          <br></br>
        </div>
      </div>
    </div>
  )
}

export default Beer