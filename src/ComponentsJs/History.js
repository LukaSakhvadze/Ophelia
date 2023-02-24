import React from 'react'
import HistoryCss from '../ComponentsCSS/History.module.css'
import TowerImg from '../Images/Tower.jpg'

function History() {
  return (
    <div className={HistoryCss.history}>
       <img src={TowerImg} alt=""></img>
       <div className={HistoryCss.text}>
        <h2>Built in  1928, the iconic art deco tower on the East River was originally known as the Panhellenic Tower.</h2>
        <p>It originally served as a womens-only club and hotel space for the national Greek-letter sororities. And in 1934 it was rebranded as the Beekman Tower and opened to all.</p>
        <p>Ophelia sits a top of this esteemed monument of classic New York architecture, designed by John Mead Howells and featuring sculptures by Rene Paul Chambellan.</p>
        <p>Muse for New Yorkers, including one time regular - Frank Sinatra. Now it's yours to enjoy.</p>
        <p>The doors to the 26th floor have once again opened and are now inspiring a new generation.</p>
       </div>
    </div>
  )
}

export default History