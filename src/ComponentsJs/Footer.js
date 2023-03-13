import React,{useState,useEffect} from 'react'
import FooterCSS from '../ComponentsCSS/Footer.module.css'
import { Link } from 'react-router-dom'
import { HashLink } from 'react-router-hash-link'


function Footer() {
    const [width,setWidth]=useState(window.innerWidth)
    const changeWidth=()=>{
        setWidth(window.innerWidth)
    }
    useEffect(() => {
      window.addEventListener("resize",changeWidth)
    
      return () => {
        window.removeEventListener("resize",changeWidth)
      }
    }, [width])
    
  return (
    <footer>
        <div className={FooterCSS.container}>
            <nav>
                <ul>
                    <li>
                        <Link to="https://www.facebook.com/ophelianewyork/" target="_blank"><svg xmlns="http://www.w3.org/2000/svg" width="1.5em" height="1.5em" viewBox="0 0 24 24"><path fill="currentColor" d="M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12c0 4.84 3.44 8.87 8 9.8V15H8v-3h2V9.5C10 7.57 11.57 6 13.5 6H16v3h-2c-.55 0-1 .45-1 1v2h3v3h-3v6.95c5.05-.5 9-4.76 9-9.95z"/></svg></Link>
                    </li>
                    <li>
                        <Link to="https://twitter.com/OpheliaNY_" target="_blank"><svg xmlns="http://www.w3.org/2000/svg" width="1.5em" height="1.5em" viewBox="0 0 24 24"><path fill="currentColor" d="M22.46 6c-.77.35-1.6.58-2.46.69c.88-.53 1.56-1.37 1.88-2.38c-.83.5-1.75.85-2.72 1.05C18.37 4.5 17.26 4 16 4c-2.35 0-4.27 1.92-4.27 4.29c0 .34.04.67.11.98C8.28 9.09 5.11 7.38 3 4.79c-.37.63-.58 1.37-.58 2.15c0 1.49.75 2.81 1.91 3.56c-.71 0-1.37-.2-1.95-.5v.03c0 2.08 1.48 3.82 3.44 4.21a4.22 4.22 0 0 1-1.93.07a4.28 4.28 0 0 0 4 2.98a8.521 8.521 0 0 1-5.33 1.84c-.34 0-.68-.02-1.02-.06C3.44 20.29 5.7 21 8.12 21C16 21 20.33 14.46 20.33 8.79c0-.19 0-.37-.01-.56c.84-.6 1.56-1.36 2.14-2.23Z"/></svg></Link>
                    </li>
                    <li>
                        <Link to="https://www.instagram.com/opheliany/" target="_blank"><svg xmlns="http://www.w3.org/2000/svg" width="1.5em" height="1.5em" viewBox="0 0 24 24"><path fill="currentColor" d="M7.8 2h8.4C19.4 2 22 4.6 22 7.8v8.4a5.8 5.8 0 0 1-5.8 5.8H7.8C4.6 22 2 19.4 2 16.2V7.8A5.8 5.8 0 0 1 7.8 2m-.2 2A3.6 3.6 0 0 0 4 7.6v8.8C4 18.39 5.61 20 7.6 20h8.8a3.6 3.6 0 0 0 3.6-3.6V7.6C20 5.61 18.39 4 16.4 4H7.6m9.65 1.5a1.25 1.25 0 0 1 1.25 1.25A1.25 1.25 0 0 1 17.25 8A1.25 1.25 0 0 1 16 6.75a1.25 1.25 0 0 1 1.25-1.25M12 7a5 5 0 0 1 5 5a5 5 0 0 1-5 5a5 5 0 0 1-5-5a5 5 0 0 1 5-5m0 2a3 3 0 0 0-3 3a3 3 0 0 0 3 3a3 3 0 0 0 3-3a3 3 0 0 0-3-3Z"/></svg></Link>
                    </li>
                    <li>
                        <Link to="https://www.youtube.com/@OpheliaNY" target="_blank"><svg xmlns="http://www.w3.org/2000/svg" width="1.5em" height="1.5em" viewBox="0 0 24 24"><path fill="currentColor" d="m10 15l5.19-3L10 9v6m11.56-7.83c.13.47.22 1.1.28 1.9c.07.8.1 1.49.1 2.09L22 12c0 2.19-.16 3.8-.44 4.83c-.25.9-.83 1.48-1.73 1.73c-.47.13-1.33.22-2.65.28c-1.3.07-2.49.1-3.59.1L12 19c-4.19 0-6.8-.16-7.83-.44c-.9-.25-1.48-.83-1.73-1.73c-.13-.47-.22-1.1-.28-1.9c-.07-.8-.1-1.49-.1-2.09L2 12c0-2.19.16-3.8.44-4.83c.25-.9.83-1.48 1.73-1.73c.47-.13 1.33-.22 2.65-.28c1.3-.07 2.49-.1 3.59-.1L12 5c4.19 0 6.8.16 7.83.44c.9.25 1.48.83 1.73 1.73Z"/></svg></Link>
                    </li> 
                </ul>
            </nav>
            <nav>
                <ul>
                    <li><Link to="https://merchantshospitality.securetree.com/" target="_blank">gift cards</Link></li>
                    <li>
                        <Link to="https://www.google.com/maps/place/Ophelia+Lounge+NYC/@40.753401,-73.9683623,17z/data=!3m1!4b1!4m5!3m4!1s0x89c258e210135473:0xb0ea26094aee0b2c!8m2!3d40.753401!4d-73.9661736" target="_blank">
                        {width>750?"3 Mitchell Pl, 26th Floor (49th & 1st), New York, NY 10017":"Location"}
                        </Link>
                    </li>
                    <li><HashLink to="#contact">contact</HashLink></li>
                    <Link to="/EmailSignup"><li>Email Signup</li></Link>
                </ul>
            </nav>
        </div>
    </footer>
  )
}

export default Footer