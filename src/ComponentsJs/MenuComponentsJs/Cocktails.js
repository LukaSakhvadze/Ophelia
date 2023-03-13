import React from 'react'
import CocktailsCSS from '../../ComponentsCSS/MenuComponentsCSS/Cocktails.module.css'
import { Link } from 'react-router-dom'

const downloadUrl='https://media-cdn.getbento.com/accounts/0dc3afa185c13d245b6a95eba90422e9/media/FJPC8Y2jSXmctJYojNeY_Ophelia%20Menus%20Cuisine.pdf'

function Cocktails() {
  return (
    <div className={CocktailsCSS.cocktails}>
        <h2>Cocktails</h2>
        <p>By Amir Babayoff</p>
        <div className={CocktailsCSS.downloadBtnDiv}>
          <Link to={downloadUrl} target="_blank"><button className={CocktailsCSS.downloadBtn}>Download PDF</button></Link>
        </div>
        <div className={CocktailsCSS.column}>
          <div className={CocktailsCSS.container}>
            <div>
              <h3>a la Española • 18</h3>
              <p>ROOTS OF RUIN HARVEST GIN + ROCKEY'S LIQUEUR + FRENCH TARRAGON + LICORICE + LAVENDER-BLUEBERRY SHRUB + MEDITERRANEAN FEVER TREE TONIC</p>
            </div>
            <div>
              <h3>resurrection • 19</h3>
              <p>GREY GOOSE VODKA + CAMPARI + LIME + PASSION FRUIT + HIBISCUS</p>
            </div>
            <div>
              <h3>Caribbean old fashioned • 19</h3>
              <p>EL-DORADO 12 RUM +PILONCILLO CANE SUGAR + WINTER SPICES + CITRUS OILS</p>
            </div>
            <div>
              <h3>the flapper • 19</h3>
              <p>KETEL ONE VODKA + DI SARONNO + LEMON + PINEAPPLE + RASPBERRIES + ANGOSTURA BITTERS + MOET CHAMPAGNE + ALMOND DUST</p>
            </div>
            <div>
              <h3>white lightning • 20</h3>
              <p>MANHATTAN MOONSHINE WHISKEY + LYCHEE LIQUEUR + COINTREAU + WORMWOOD BITTERS + RAMBUTAN</p>
            </div>
            <div>
              <h3>pain killa • 20</h3>
              <p>DON JULIO SILVER TEQUILA + GINGER + LEMON + ESSENCE OF MEZCAL</p>
            </div>
            <div>
              <h3>purple tuxedo • 20</h3>
              <p>EMPRESS 1908 GIN + BRENNIVIN AQUAVIT + C.COMOZ DE CHAMBERY + VELVET FALERNUM + ABSINTHE + PLUM BITTERS</p>
            </div>
            <div>
              <h3>lower east side • 20</h3>
              <p>NEW RIFF RYE + ST. ELIZABETH ALLSPICE DRAM + PASSION FRUIT + LEMON + CINNAMON</p>
            </div>
            <div>
              <h3>Ophelia's ascension • 21</h3>
              <p>SMOKED JAMAICAN PEPPER INFUSED DEL MAGUEY VIDA MEZCAL + MAKERS MARK + SRI LANKA PALM SUGAR + AROMATIC BITTERS + CEDAR SMOKE + HABANERO PEPPER</p>
            </div>
            <div>
              <h3>polaris express • 21</h3>
              <p>DIPLOMATICO RESERVA EXCLUSIVA RUM + SCARLET IBIS RUM + KALANI + CINNAMON + HOMEMADE HORCHATA + VANILLA</p>
            </div>
            <div>
              <h3>jumpstart (espresso martini) • 22</h3>
              <p>TWO STACKS IRISH WHISKEY + BORGHETTI + FORO AMARO + COLD BREW + GREEN CHARTREUSE + MACADAMIA ORGEAT + BROWN BUTTER</p>
            </div>
            <div>
              <h3>Beekman classic palo santo martini • 22</h3>
              <p>JIN JIJI HIGH PROOF INDIA DRY GIN + COCCHI AMERICANO + NOILLY PRAT DRY VERMOUTH + PALO SANTO CORDIAL + PALO SANTO MIST</p>
            </div>
            <div>
              <h3>the X factor • 22</h3>
              <p>GLENMORANGIE X SINGLE MALT + AMONTILLADO SHERRY + REISETBAUER CARROT EAU DE VIE + KUMMEL + ST.GEORGE SPICED PEAR LIQUEUR + MAPLE + WALNUT BITTERS</p>
            </div>
            <div>
              <h3>highs & lows • 23</h3>
              <p>VOLCAN BLANCO TEQUILA + EMPERICAL AYUUK + NEXTA CORN LIQUEUR + ANCHO REYES VERDE + LIME + AGAVE</p>
            </div>
            <div>
              <h3>far east side • 24</h3>
              <p>SHISO INFUSED MIZU SHOCHU + TANQUERAY GIN + YUZU + YELLOW CHARTREUSE</p>
            </div>
            <div>
              <h3>indi sour * • 24</h3>
              <p>LINIE AQUAVIT + BOULARD RYE CASK FINISH CALVADOS + NEW RIFF RYE + ST. GERMAIN + SAFFRON + TURMERIC + MORETTA CHILI + GINGER + HONEY + LEMON + EGG WHITE</p>
            </div>
            <br></br>
            <br></br>
            <br></br>
         </div>
        </div>
    </div>
  )
}

export default Cocktails