import React from 'react'
import VideosCSS from '../ComponentsCSS/Videos.module.css'
import OpheliaSnowGlobInTheSky from '../Images/Ophelia-Snow-Glob-In-The-Sky.webp'
import ReactPlayer from 'react-player'
import ZodiacImg from '../Images/Zodiac.png'
import SnakeImg from '../Images/Snake.png'

function Videos() {
    
  return (
    <div className={VideosCSS.videos}>
        <img className={VideosCSS.video1} src={OpheliaSnowGlobInTheSky} alt=""></img>  
        <button className={VideosCSS.reservationBtn2}>Reservations</button>
        <ReactPlayer width="65rem" height="40rem" controls url='https://www.youtube.com/watch?v=XNksvZjGQ50&t=10s&ab_channel=OpheliaLoungeNYC'></ReactPlayer>
        <a href="https://www.youtube.com/channel/UC1jMXPz34KvewKeJ-kf8-vA" target="_blank"><button className={VideosCSS.subscribeBtn}>Subscribe to Ophelia's YouTube Channel</button></a>
        <h2 className={VideosCSS.beSocial}>Be Social</h2>
        <img src={ZodiacImg} alt=""></img>
        <h2 className={VideosCSS.liveDays}>Thursday| Fridays| Saturdays</h2>
        <h2>Featuring live djs</h2>
        <div className={VideosCSS.cocktail}>
          <h2>A cocktail lounge at the top of the Beekman Tower.</h2>
          <h2>360° greenhouse terrace. Manhattan views.</h2>
          <h2>Custom design. 5 Star Menu. All year round.</h2>
        </div>
        <img className={VideosCSS.SnakeImg} src={SnakeImg}></img>
    </div>
  )
}

export default Videos