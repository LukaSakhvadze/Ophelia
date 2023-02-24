import React from 'react'
import HeadingCss from '../ComponentsCSS/Heading.module.css'
import OpheliaImg from '../Images/Ophelia.png'

function Heading() {
  return (
    <header>
      <h1><img src={OpheliaImg} alt=""></img></h1>
      <nav>
        <ul>
          <li>Videos</li>
          <li>History</li>
          <li>Menus</li>
          <li>Private Events</li>
          <li>Gallery</li>
          <li>Press</li>
          <li>Location and hours</li>
          <li>Join our team</li>
          <li>Reservations</li>
        </ul>
      </nav>
    </header>
  )
}

export default Heading