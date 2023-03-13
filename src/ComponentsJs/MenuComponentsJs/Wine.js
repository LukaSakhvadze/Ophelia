import React from 'react'
import WineCSS from '../../ComponentsCSS/MenuComponentsCSS/Wine.module.css'
import { Link } from 'react-router-dom'

const downloadUrl='https://media-cdn.getbento.com/accounts/0dc3afa185c13d245b6a95eba90422e9/media/FJPC8Y2jSXmctJYojNeY_Ophelia%20Menus%20Cuisine.pdf'

function Wine() {
  return (
    <div className={WineCSS.wine}>
        <p>Glass/Bottle</p>
        <div className={WineCSS.downloadBtnDiv}>
          <Link to={downloadUrl} target="_blank"><button className={WineCSS.downloadBtn}>Download PDF</button></Link>
        </div>
        <div className={WineCSS.column}>
          <div className={WineCSS.container}>
            <h2>Sparkling</h2>
            <div>
              <h3>Prosecco • 14/55</h3>
              <p>MEZZA DI MEZZA CORONA | PROSECCO, ITALY</p>
            </div>
            <div>
              <h3>Champagne • 30/200</h3>
              <p>MOËT & CHANDON | CHAMPAGNE, FRANCE</p>
            </div>
            <div>
              <h3>2006 Champagne • --/495</h3>
              <p>DOM PÉRIGNON | CHAMPAGNE, FRANCE</p>
            </div>
            <div>
              <h3>Champagne • --/675</h3>
              <p>ACE OF SPADES | ARMAND DE BRIGNAC CHAMPAGNE, FRANCE</p>
            </div>
            <hr></hr>
            <h2>White + Rosé</h2>
            <div>
              <h3>2021 Dry Rosé • 17/68</h3>
              <p>LA BERNARD | PROVENCE, FRANCE</p>
            </div>
            <div>
              <h3>2021 Pinot Grigio • 16/64</h3>
              <p>SAN PIETRO | SÜDTIROL ALTO ADIGE</p>
            </div>
            <div>
              <h3>2021 Sauvignon Blanc • 16/64</h3>
              <p>GABRIELSKLOOF | BOT RIVER, SOUTH AFRICA</p>
            </div>
            <div>
              <h3>2021 Riesling • 17/68</h3>
              <p>SCHLOSS LIESER FINEHERB, GERMANY</p>
            </div>
            <div>
              <h3>2020 Chardonnay Y3 • 17/68</h3>
              <p>JAX VINEYARDS | NAPA VALLEY</p>
            </div>
            <div>
              <h3>2018 Unfiltered Chardonnay • --/135</h3>
              <p>NEWTON | NAPA VALLEY</p>
            </div>
            <div>
              <h3>2020 Chardonnay • --/180</h3>
              <p>KISTLER, SONOMA COAST</p>
            </div>
            <hr></hr>
            <h2>Red</h2>
            <div>
              <h3>2020 Pinot Noir • 16/64</h3>
              <p>PLANET OREGON | WILLAMETTE VALLEY</p>
            </div>
            <div>
              <h3>2020 Côtes du Rhône • 17/68</h3>
              <p>DOMAINE LA REMEJEANNE | MONTE LUNE</p>
            </div>
            <div>
              <h3>2018 La Rioja Alta • 17/68</h3>
              <p>RIOJA TEMPRANILLO VINA ALBERDI RESERVA</p>
            </div>
            <div>
              <h3>2020 Cabernet Sauvignon • 17/69</h3>
              <p>RAMSAY, NORTH COAST</p>
            </div>
            <div>
              <h3>2018 Shiraz • 16/64</h3>
              <p>TINY PARADOXES | MCLAREN VALE, AUSTRALIA</p>
            </div>
            <div>
              <h3>2018 De los Andes Grand Malbec • --/140</h3>
              <p>TERRAZZAS | MENZOZA, ARGENTINA</p>
            </div>
            <div>
              <h3>2019 Cabernet Sauvignon • --/850</h3>
              <p>SCHRADER | TO KALON VINEYARD, NAPA VALLEY</p>
            </div>
            <br></br>
            <br></br>
            <br></br>
          </div>
        </div>
    </div>
  )
}

export default Wine