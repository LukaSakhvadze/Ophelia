import React from 'react'
import VideosCSS from '../ComponentsCSS/Videos.module.css'
import OpheliaSnowGlobInTheSky from '../Images/Ophelia-Snow-Glob-In-The-Sky.webp'
import SnakeImg from '../Images/Snake.png'
import { Link } from 'react-router-dom'
import {motion} from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { useEffect } from 'react'
import { useAnimation } from 'framer-motion' 

function Videos() {
    const [ref1,inView1]=useInView()
    const [ref2,inView2]=useInView()
    const animation1=useAnimation()
    const animation2=useAnimation()
    const animation3=useAnimation()
    
    useEffect(()=>{
      if(inView1){
        animation1.start({
          scale:1,
          transition:{type:"spring",duration:2,bounce:0.2}
        })
      }
      if(inView2){
        animation2.start({
          rotateX:360,
          opacity:1,
          transition:{duration:1}
        })
        animation3.start({
          opacity:1,
          transition:{duration:1}
        })
      }
      
      if(!inView1){
        animation1.start({scale:0})
      }
      if(!inView2){
        animation2.start({rotateX:0,opacity:0})
        animation3.start({opacity:0})
      }
      
    },[inView1,inView2])
    
  return (
    <div className={VideosCSS.videos} id="videos">
        <motion.img initial={{y:300}} animate={{y:0,transition:{duration:2}}} className={VideosCSS.video1} src={OpheliaSnowGlobInTheSky} alt=""></motion.img>
        <Link className={VideosCSS.reservationLink} to='https://www.opentable.com/restref/client/?rid=995113&restref=995113&datetime=2022-11-15T23%3A00&covers=1&rtype=ism&searchdatetime=2022-11-15T23%3A00&partysize=1&lang=en&corrid=1012cffb-09d7-4c7f-8c88-32b9990ed919' target="_blank">Reservations</Link>
        {<div className={VideosCSS.video2}>
        <iframe 
          src="https://www.youtube.com/embed/XNksvZjGQ50" 
          width="100%" 
          height="100%" 
          style={{border:"0"}}
          allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade">
        </iframe>
        </div>}
        <Link to="https://www.youtube.com/channel/UC1jMXPz34KvewKeJ-kf8-vA" target="_blank"><button className={VideosCSS.subscribeBtn}>Subscribe to Ophelia's YouTube Channel</button></Link>
        <motion.img className={VideosCSS.zodiacImg} ref={ref1} animate={animation1} src="https://images.getbento.com/accounts/0dc3afa185c13d245b6a95eba90422e9/media/images/ophelia-zodiac-dj-ad-v1-2019.gif?w=1000&fit=max&auto=compress,format&h=1000" alt=""></motion.img>
        <h2>Featuring live djs</h2>
        <motion.div animate={animation3} className={VideosCSS.cocktail}>
          <h2>A cocktail lounge at the top of the Beekman Tower.</h2>
          <h2>360° greenhouse terrace. Manhattan views.</h2>
          <h2>Custom design. 5 Star Menu. All year round.</h2>
        </motion.div>
        <motion.img ref={ref2} animate={animation2} className={VideosCSS.SnakeImg} src={SnakeImg}></motion.img>
    </div>
  )
}

export default Videos