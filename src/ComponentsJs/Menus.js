import React, { useEffect } from 'react'
import {useState} from "react"
import MenusCSS from '../ComponentsCSS/Menus.module.css'
import Cuisine from './MenuComponentsJs/Cuisine'
import Sweets from './MenuComponentsJs/Sweets'
import Cocktails from './MenuComponentsJs/Cocktails'
import Wine from './MenuComponentsJs/Wine'
import Beer from './MenuComponentsJs/Beer'
import { motion,useAnimation } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

function Menus() {
  const [number,setNumber]=useState(1)
  const [ref,inView]=useInView()
  const animation1=useAnimation()
  const animation2=useAnimation()
  const animation3=useAnimation()
  const animation4=useAnimation()
  useEffect(()=>{
    if(inView){
      animation1.start({
        opacity:1,
        transition:{duration:1,delay:0.5}
      })
      animation2.start({
        opacity:1,
        transition:{duration:1,delay:1}
      })
      animation3.start({
        opacity:1,
        transition:{duration:1,delay:1.5}
      })
      animation4.start({
        opacity:1,
        transition:{duration:1,delay:2}
      })
    }
    if(!inView){
      animation1.start({opacity:0})
      animation2.start({opacity:0})
      animation3.start({opacity:0})
      animation4.start({opacity:0})
    }
  },[inView])
  return (
    <div ref={ref} className={MenusCSS.menus} id="menus">
        <h2>Menus</h2>
        <nav> 
            <ul>
                <motion.li className={MenusCSS[number===1?"highlited":null]} onClick={()=>setNumber(1)}>Cuisine</motion.li>
                <motion.li animate={animation1} className={MenusCSS[number===2?"highlited":null]} onClick={()=>setNumber(2)}>Sweets</motion.li>
                <motion.li animate={animation2} className={MenusCSS[number===3?"highlited":null]} onClick={()=>setNumber(3)}>Cocktails</motion.li>
                <motion.li animate={animation3} className={MenusCSS[number===4?"highlited":null]} onClick={()=>setNumber(4)}>Wine</motion.li>
                <motion.li animate={animation4} className={MenusCSS[number===5?"highlited":null]} onClick={()=>setNumber(5)}>Beer</motion.li>
            </ul>
        </nav>
        {number===1?<Cuisine></Cuisine>:number===2?<Sweets></Sweets>:number===3?<Cocktails></Cocktails>:number===4?<Wine></Wine>:<Beer></Beer>}
    </div>
  )
}

export default Menus