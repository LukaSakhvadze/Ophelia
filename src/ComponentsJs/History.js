import React from 'react'
import HistoryCss from '../ComponentsCSS/History.module.css'
import TowerImg from '../Images/Tower.jpg'
import { useEffect } from 'react'
import { motion, useAnimation } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

function History() {
  const [ref,inView]=useInView()
  const animation=useAnimation()
  const animation1=useAnimation()
  useEffect(()=>{
    if(inView){
      animation.start({
        x:0,
        transition:{duration:1.5}
      })
      animation1.start({
        x:0,
        transition:{duration:1.5}
      })
    }
    if(!inView){
      animation.start({x:-200}) 
      animation1.start({x:200}) 
    }
  },[inView])
  return (
    <div ref={ref} className={HistoryCss.history} id="history">
       <motion.img animate={animation} src={TowerImg} alt=""></motion.img>
       <motion.div animate={animation1} className={HistoryCss.text}>
        <h2>Built in  1928, the iconic art deco tower on the East River was originally known as the Panhellenic Tower.</h2>
        <p>It originally served as a womens-only club and hotel space for the national Greek-letter sororities. And in 1934 it was rebranded as the Beekman Tower and opened to all.</p>
        <p>Ophelia sits a top of this esteemed monument of classic New York architecture, designed by John Mead Howells and featuring sculptures by Rene Paul Chambellan.</p>
        <p>Muse for New Yorkers, including one time regular - Frank Sinatra. Now it's yours to enjoy.</p>
        <p>The doors to the 26th floor have once again opened and are now inspiring a new generation.</p>
       </motion.div>
    </div>
  )
}

export default History