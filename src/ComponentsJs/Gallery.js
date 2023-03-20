import React from "react";
import GalleryCSS from "../ComponentsCSS/Gallery.module.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";
import { GalleryImages } from "../Massives,Consts/Consts";

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
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  const [ref, inView] = useInView();
  const animation = useAnimation();
  useEffect(() => {
    if (inView) {
      animation.start({
        x: 0,
        transition: { type: "spring", duration: 2, bounce: 0.2 },
      });
    }
    if (!inView) {
      animation.start({ x: -300 });
    }
  }, [inView]);

  return (
    <div className={GalleryCSS.gallery} id="gallery">
      <h2>Gallery</h2>
      <motion.div
        ref={ref}
        animate={animation}
        className={GalleryCSS.galleryLine}
      >
        <Slider {...settings} className={GalleryCSS.container}>
          {GalleryImages.map((image, index) => (
            <div key={index} className={GalleryCSS.box}>
              <img src={image} alt=""></img>
            </div>
          ))}
        </Slider>
      </motion.div>
    </div>
  );
}

export default Gallery;
