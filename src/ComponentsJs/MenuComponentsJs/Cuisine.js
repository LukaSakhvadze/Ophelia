import React from 'react'
import CuisineCss from '../../ComponentsCSS/MenuComponentsCSS/Cuisine.module.css'
import { Link } from 'react-router-dom'

const downloadUrl='https://media-cdn.getbento.com/accounts/0dc3afa185c13d245b6a95eba90422e9/media/FJPC8Y2jSXmctJYojNeY_Ophelia%20Menus%20Cuisine.pdf'

function Cuisine() {
  return (
    <div className={CuisineCss.cuisine}>
        <p>By Chef Antelmo Ambrosio</p>
        <div className={CuisineCss.downloadBtnDiv}>
          <Link to={downloadUrl} target="_blank"><button className={CuisineCss.downloadBtn}>Download PDF</button></Link>
        </div>
        <div className={CuisineCss.column}>
          <div className={CuisineCss.container}>
            <div>
              <h3>truffle fries • 16</h3>
              <p>YUKON POTATO + TARTUFO + PARMESAN + TRUFFLE AIOLI</p>
            </div>
            <div>
              <h3>classic hummus • 16</h3>
              <p>PINE NUTS + ZAATAR + NAAN</p>
            </div>
            <div>
              <h3>spinach & artichoke dip • 17</h3>
              <p>PARMESAN + ROASTED GARLIC + CRISPS</p>
            </div>
            <div>
              <h3>roasted cauliflower steak • 18</h3>
              <p>TAHINI-TURMERIC VINAIGRETTE + TOASTED PISTACHIOS + SESAME SEEDS</p>
            </div>
            <div>
              <h3>french onion sliders* (3) • 19</h3>
              <p>GRUYÈRE + BRANDY CARAMELIZED ONIONS + ROASTED GARLIC MAYO</p>
            </div>
            <div>
              <h3>burrata caprese salad • 20</h3>
              <p>LIONI LATTICINI BURRATA + HEIRLOOM TOMATO + AGED BALSAMIC REDUCTION + BASIL OLIVE OIL + BLOOD ORANGE</p>
            </div>
            <div>
              <h3>duck confit spring rolls • 20</h3>
              <p>CABBAGE + SCALLIONS + MUSHROOM + PICKLED CARROTS + APRICOT</p>
            </div>
            <div>
              <h3>crostini platter • 20</h3>
              <p>PROSCIUTTO + TOMATO JAM SMOKED SALMON + CRÈME FRAICHE BUTTERNUT SQUASH + CANDIED PECANS + PINE NUTS</p>
            </div>
            <div>
              <h3>brie brûlée • 22</h3>
              <p>BAKED BRIE + CANDIED PECANS + FIGS + TOASTED BAGUETTE</p>
            </div>
            <div>
              <h3>crispy prawn tacos • 24</h3>
              <p>YUZU-WASABI AIOLI + WATERMELON RADISH RELISH + BOSTON LETTUCE + MICRO CILANTRO</p>
            </div>
            <div>
              <h3>Chilean sea bass skewers • 35</h3>
              <p>ORANGE-MISO GLAZE + TOGARASHI + LEMON ZEST + YUZO KOSHO</p>
            </div>
            <div>
              <h3>truffle mushroom ravioli • 35</h3>
              <p>SARVECCHIO PARMESAN SAUCE</p>
            </div>
            <div>
              <h3>wagyu beef tartare • 35</h3>
              <p>CAPERS + CORNICHONS + PICKLED ONIONS + SCALLIONS + QUAIL EGG YOLK + CRISPY LOTUS ROOT CHIPS</p>
            </div>
            <div>
              <h3>charcuterie & cheese board (for two) • 38</h3>
              <p className={CuisineCss.beforeComment}>PROSCIUTTO + SOPRESSATA + CHORIZO + AGED GOUDA + BRIE + DRIED FRUIT + CRISPY SOURDOUGH</p>
              <p className={CuisineCss.comment}>*CONSUMING RAW OR UNDERCOOKED MEATS, POULTRY, SEAFOOD, SHELLFISH OR EGGS MAY INCREASE YOUR RISK OF FOODBORNE ILLNESS</p>
            </div>
            <div>
              <h3>crispy pommes & caviar bites • 38</h3>
              <p>LAYERED POTATO BITES + CRÈME FRAICHE + AMERICAN CAVIAR + CHIVES</p>
            </div>
            <div>
              <h3>ribeye steak • 59</h3>
              <p>14 OZ BLACK ANGUS CHOICE + POTATO GRATIN + GRILLED ASPARAGUS + PEPPERCORN SAUCE</p>
            </div>
            <div>
              <h3>taste of the tower (for two) • 79</h3>
              <p>SMOKED SALMON CROSTINI + BUTTERNUT SQUASH PHYLLO BITES + PROSCIUTTO DE PARMA CROSTINI + CRISPY POMMES AND CAVIAR+ CRISPY PRAWN TACOS + FRENCH ONION SLIDERS</p>
            </div>
            <br></br>
            <br></br>
            <br></br>
          </div>
        </div>
    </div>
  )
}

export default Cuisine