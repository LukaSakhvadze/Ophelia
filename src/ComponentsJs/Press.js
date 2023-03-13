import React from 'react'
import PressCSS from '../ComponentsCSS/Press.module.css'
import Slider from "react-slick"
import { Link } from 'react-router-dom'
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import Img1 from '../Images/Press1.png'
import Img2 from '../Images/Press2.png'
import Img3 from '../Images/Press3.png'
import Img4 from '../Images/Press4.png'
import Img5 from '../Images/Press5.png'
import Img6 from '../Images/Press6.png'
import Img7 from '../Images/Press7.png'
import Img8 from '../Images/Press8.png'
import Img9 from '../Images/Press9.png'
import Img10 from '../Images/Press10.png'
import Img11 from '../Images/Press11.png'
import Img12 from '../Images/Press12.png'
import Img13 from '../Images/Press13.png'
import Img14 from '../Images/Press14.png'
import Img15 from '../Images/Press15.png'
import { useInView } from 'react-intersection-observer'
import {motion, useAnimation} from 'framer-motion'
import { useEffect } from 'react'

function Press() {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 3,
        initialSlide: 0,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 3,
              infinite: true,
              dots: true
            }
          },
          {
            breakpoint: 800,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2,
              initialSlide: 2
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          }
        ]
      };

    const [ref,inView]=useInView()
    const animation=useAnimation()
    useEffect(() => {
      if(inView){
        animation.start({
           x:0,
           transition:{type:"spring",duration:2,bounce:0.5}
      })
    }
      if(!inView){
        animation.start({x:300})
      }
      
    }, [inView])
    
  return (
    <div className={PressCSS.press} id="press"> 
        <h2>Press</h2>  
        <motion.div ref={ref} animate={animation}>
          <Slider  {...settings} className={PressCSS.container}>
            <div className={PressCSS.box}>
              <Link to="https://mybartender.com/places/best-bars-midtown-nyc/" target="_blank">
                <div><img src={Img1}></img></div>
                <h4>MyBartender</h4>
                <p>15 Best Bars In Midtown, NYC in 2023</p>
              </Link>
            </div>
            <div className={PressCSS.box}>
              <Link to="https://media-cdn.getbento.com/accounts/0dc3afa185c13d245b6a95eba90422e9/media/8PaXO3fTbOMG9i5bO2le_01.03.23%20_%20TimeOut.pdf" target="_blank">
                <div><img src={Img2}></img></div>
                <h4>Time Out New York</h4>
                <p>NYC's 21 best rooftop bars open during cooler weather</p>
              </Link>
            </div>
            <div className={PressCSS.box}>
              <Link to="https://media-cdn.getbento.com/accounts/0dc3afa185c13d245b6a95eba90422e9/media/zizLUwAMRoGrp50hd0AM_12.19.22%20_%20Forbes.pdf" target="_blank">
                <div><img src={Img3}></img></div>
                <h4>Forbes</h4>
                <p>25 Sparkling Cocktails To Enjoy On New Year's Eve</p>
               </Link>
            </div>
            <div className={PressCSS.box}>
              <Link to="https://media-cdn.getbento.com/accounts/0dc3afa185c13d245b6a95eba90422e9/media/vWXhQsuvT5Gh30m3IIDI_12.11.22%20_%20The%20Infatuation.pdf" target="_blank">
                <div><img src={Img4}></img></div>
                <h4>The Infatuation</h4>
                <p>9 NYC Restaurants And Bars With Over-The-Top Holiday Decorations - New York</p>
              </Link>
            </div>
            <div className={PressCSS.box}>
              <Link to="https://media-cdn.getbento.com/accounts/0dc3afa185c13d245b6a95eba90422e9/media/HZ3mrINUSp6dwIiHrz6x_12.07.22%20_%20Harper-s%20Bazaar%20Italia.pdf"    target="_blank">
                <div><img src={Img5}></img></div>
                <h4>The Harper's BAZAAR</h4>
                <p>Gli otto rooftop da scoprire questo inverno a New York</p>
              </Link>
            </div>
            <div className={PressCSS.box}>
              <Link to="https://media-cdn.getbento.com/accounts/0dc3afa185c13d245b6a95eba90422e9/media/zW0W7bRXTWWc3xAL35CO_12.09.22%20_%20The%20Travel.pdf" target="_blank">
                <div><img src={Img6}></img></div>
                <h4>LaptrinhX / News</h4>
                <p>The Dead Rabbit Is Opening an Irish Christmas Pop-Up Bar</p>
              </Link>
            </div>
            <div className={PressCSS.box}>
              <Link to="https://media-cdn.getbento.com/accounts/0dc3afa185c13d245b6a95eba90422e9/media/GlvHirNQnua3WdtVxbOV_11.03.22%20_%20URL4Ever.Com.pdf" target="_blank">
                <div><img src={Img7}></img></div>
                <h4>World Today</h4>
                <p>Inside Glamour's Girls of the Yr After-Celebration 🌐</p>
              </Link>
            </div>
            <div className={PressCSS.box}>
              <Link to="https://media-cdn.getbento.com/accounts/0dc3afa185c13d245b6a95eba90422e9/media/Jdnu1tEtS5qi4xHfYPiT_09.23.22%20_%20Delish%20%281%29.pdf" target="_blank">
                <div><img src={Img8}></img></div>
                <h4>Delish</h4>
                <p>New To Mezcal? These 13 Brands Are Worth Your Money</p>
              </Link>
            </div>
            <div className={PressCSS.box}>
              <Link to="https://media-cdn.getbento.com/accounts/0dc3afa185c13d245b6a95eba90422e9/media/S1B2frDoS0WEBb68QoIP_07.16.22%20-%20The%20Travel.pdf" target="_blank">
                <div><img src={Img9}></img></div>
                <h4>TheTravel</h4>
                <p>10 Rooftop Bars In NYC With The Best View (& Drinks)</p>
              </Link>
            </div>
            <div className={PressCSS.box}>
              <Link to="https://media-cdn.getbento.com/accounts/0dc3afa185c13d245b6a95eba90422e9/media/AC2HBYT4y8gfQ8Djc9vQ_06.03.22%20%20Open%20Table.pdf" target="_blank">
                <div><img src={Img10}></img></div>
                <h4>OpenTable</h4>
                <p>The Best Places to Grab a Drink in New York City</p>
              </Link>
            </div>
            <div className={PressCSS.box}>
              <Link to="https://media-cdn.getbento.com/accounts/0dc3afa185c13d245b6a95eba90422e9/media/awNI0A3iR7ige2TWVEGz_05.06.22%20%20ML%20Manhattan%20Newsletter.pdf" target="_blank">
                <div><img src={Img11}></img></div>
                <h4>Modern Luxury Manhattan</h4>
                <p>The 8 Best Cocktail Lounges In NYC</p>
              </Link>
            </div>
            <div className={PressCSS.box}>
              <Link to="https://patch.com/new-york/new-york-city/calendar#expired_event" target="_blank">
                <div><img src={Img12}></img></div>
                <h4>New York City, NY Patch</h4>
                <p>Local Event: Ophelia's Early Evening Sunset Soirée + Late Night NYE Bash</p>
              </Link>
            </div>
            <div className={PressCSS.box}>
              <Link to="https://media-cdn.getbento.com/accounts/0dc3afa185c13d245b6a95eba90422e9/media/X5tYVfj8Ru6b5daBeU6s_11.29.21%20%20Secret%20NYC..pdf" target="_blank">
                <div><img src={Img13}></img></div>
                <h4>Secret NYC</h4>
                <p>Fire Pits, Igloos And Blankets: The 11 Best Winter Rooftops In NYC</p>
              </Link>
            </div>
            <div className={PressCSS.box}>
              <Link to="https://guestofaguest.com/new-york/nightlife/the-best-winter-rooftop-bars-in-nyc" target="_blank">
                <div><img src={Img14}></img></div>
                <h4>Guest of a Guest</h4>
                <p>The Dreamiest Winter Rooftop Bars In NYC</p>
              </Link>
            </div>
            <div className={PressCSS.box}>
              <Link to="https://www.thrillist.com/drink/new-york/best-bars-nyc" target="_blank">
                <div><img src={Img15}></img></div>
                <h4>Thrillist</h4>
                <p>The Best Bars in New York City Right Now</p>
              </Link>
            </div>
          </Slider>
        </motion.div>  
    </div>
  )
}

export default Press