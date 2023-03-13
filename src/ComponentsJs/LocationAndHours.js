import React,{useState,useEffect} from 'react'
import styles from '../ComponentsCSS/LocationAndHours.module.css'
import { Link } from 'react-router-dom'
import Img1 from '../Images/Globus.png'

const directionURL='https://www.google.com/maps?cid=12748043516579285804'

function LocationAndHours() {
  const [height,setHeight]=useState(window.innerHeight)
  const changeHeight=()=>{
    setHeight(window.innerHeight)
  }
  useEffect(() => {
    window.addEventListener("resize",changeHeight)
  
    return () => {
      window.removeEventListener("resize",changeHeight)
    }
  }, [height])
  
  return (
    <div className={styles.locationAndHours} id="locationAndHours">
        <iframe 
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3022.3920559292583!2d-73.96836764842776!3d40.753400979226!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13. 1!3m3!1m2!1s0x89c258e210135473%3A0xb0ea26094aee0b2c!2sOphelia%20Lounge%20NYC!5e0!3m2!1sen!2sge!4v1677662157368!5m2!1sen!2sge" 
          width="100%" 
          height="100%" 
          style={{border:"0"}}
          allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade">
        </iframe>
        <div className={styles.locationAndHoursInfo}>
           <h2>Location and Hours</h2> 
           <p><Link to="https://www.google.com/maps?cid=12748043516579285804" target="_blank">3 Mitchell Place (49th & 1st Avenue),</Link></p>
           <p><Link to="https://www.google.com/maps?cid=12748043516579285804" target="_blank">New York, NY 10017</Link></p>
           <p><Link to='tel:+212.980.4796'>Contact Number</Link></p>
           <div className={styles.directionBtnDiv}>
            <Link to={directionURL} target="_blank"><button className={styles.directionBtn}>Get Directions</button></Link>
           </div>
           <p><span>Monday - Wednesday:</span> 5pm - 11pm</p>
           <p><span>Thursday:</span> 5pm - 12am</p>
           <p><span>Friday:</span> - Saturday: 5pm - 2am</p>
           <p><span>Sunday:</span> 5pm - 11pm</p>
           {height>700?<img src={Img1}></img>:null}
           <p>Send us a message and we'll get back to you as soon as possible Info@Opheliany.com. You can also reach us by phone at <Link to="tel:+212.980.4796">212.980.4796</Link>. Looking forward to hearing from you.</p>
        </div>
    </div>
  )
}

export default LocationAndHours