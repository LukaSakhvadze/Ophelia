import React from "react";
import PressCSS from "../ComponentsCSS/Press.module.css";
import Slider from "react-slick";
import { Link } from "react-router-dom";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useInView } from "react-intersection-observer";
import { motion, useAnimation } from "framer-motion";
import { useEffect } from "react";
import { PressImages } from "../Consts/press.const";

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
          dots: true,
        },
      },
      {
        breakpoint: 800,
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
        transition: { type: "spring", duration: 2, bounce: 0.5 },
      });
    }
    if (!inView) {
      animation.start({ x: 300 });
    }
  }, [inView]);

  return (
    <div className={PressCSS.press} id="press">
      <h2>Press</h2>
      <motion.div ref={ref} animate={animation}>
        <Slider {...settings} className={PressCSS.container}>
          {PressImages.map((image) => (
            <div className={PressCSS.box} key={image.id}>
              <Link to={image.linkAddress} target="_blank">
                <div>
                  <img src={image.image}></img>
                </div>
                <h4>{image.h4}</h4>
                <p>{image.p}</p>
              </Link>
            </div>
          ))}
        </Slider>
      </motion.div>
    </div>
  );
}

export default Press;
