import React, { useState } from 'react'
import GalleryCSS from '../ComponentsCSS/Gallery.module.css'
import Img1 from '../Images/Gallery1.png'
import Img2 from '../Images/Gallery2.png'
import Img3 from '../Images/Gallery3.png'
import Img4 from '../Images/Gallery4.png'
import Img5 from '../Images/Gallery5.png'
import Img6 from '../Images/Gallery6.png'
import Img7 from '../Images/Gallery7.png'
import Img8 from '../Images/Gallery8.png'
import Img9 from '../Images/Gallery9.png'
import Img10 from '../Images/Gallery10.png'
import Slider from "react-slick"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import { motion,useAnimation } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { useEffect } from 'react'

function Gallery() {
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
        breakpoint: 600,
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
         transition:{type:"spring",duration:2,bounce:0.2}
    })
  }
    if(!inView){
      animation.start({x:-300})
    }
    
  }, [inView])
  return (
    <div className={GalleryCSS.gallery} id="gallery">
        <h2>Gallery</h2>
        <motion.div ref={ref} animate={animation} className={GalleryCSS.galleryLine}>
          <Slider {...settings} className={GalleryCSS.container}>
            <div className={GalleryCSS.box}><img src={Img1}></img></div>
            <div className={GalleryCSS.box}><img src={Img2}></img></div>
            <div className={GalleryCSS.box}><img src={Img3}></img></div>
            <div className={GalleryCSS.box}><img src={Img4}></img></div>
            <div className={GalleryCSS.box}><img src={Img5}></img></div>
            <div className={GalleryCSS.box}><img src={Img6}></img></div>
            <div className={GalleryCSS.box}><img src={Img7}></img></div>
            <div className={GalleryCSS.box}><img src={Img8}></img></div>
            <div className={GalleryCSS.box}><img src={Img9}></img></div>
            <div className={GalleryCSS.box}><img src={Img10}></img></div>
          </Slider>  
        </motion.div>
        
    </div>
  )
}

export default Gallery
