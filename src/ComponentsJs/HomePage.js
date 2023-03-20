import React from "react";
import Header from "../ComponentsJs/Header";
import Videos from "../ComponentsJs/Videos";
import History from "../ComponentsJs/History";
import Menus from "../ComponentsJs/Menus";
import Gallery from "../ComponentsJs/Gallery";
import Press from "../ComponentsJs/Press";
import LocationAndHours from "../ComponentsJs/LocationAndHours";
import Contact from "../ComponentsJs/Contact";
import Footer from "../ComponentsJs/Footer";

function HomePage() {
  return (
    <>
      <Header />
      <Videos />
      <History />
      <Menus />
      <Gallery />
      <Press />
      <LocationAndHours />
      <Contact />
      <Footer />
    </>
  );
}

export default HomePage;
