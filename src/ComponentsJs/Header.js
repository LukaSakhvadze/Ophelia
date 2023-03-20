import React, { useState } from 'react'
import HeaderCss from '../ComponentsCSS/Header.module.css'
import OpheliaImg from '../Images/Ophelia.png'
import OpheliaImg2 from '../Images/Ophelia2.png'
import {HashLink} from 'react-router-hash-link'
import HeaderNavList from './HeaderNavList'

function Header() {
  const [btnClicked,setBtnClicked]=useState(false)
  const [isScrolled,setIsScrolled]=useState(false)
  const changeNavbar=()=>{
    if(window.scrollY>0){
      setIsScrolled(true)
    }else{
      setIsScrolled(false)
    }
  }
  window.addEventListener("scroll",changeNavbar)
  const checkBtnClick=btnClicked===true?"clickedMenuIcon":"unclickedMenuIcon"
  

  return (
    <header className={HeaderCss[isScrolled?"scrolled":"unScrolled"]}>
      <div className={HeaderCss[isScrolled?"scrolledImg":"unScrolledImg"]}><HashLink to="#"><img src={isScrolled?OpheliaImg2:OpheliaImg} alt=""></img></HashLink></div>
      <div className={HeaderCss.menuDiv}>
        <div className={HeaderCss.menuDiv2}>
          <div className={HeaderCss.menuDiv3}>
            <button className={HeaderCss.menuBtn} onClick={()=>setBtnClicked(!btnClicked)}>
              <div className={`${HeaderCss.menuIcon} ${HeaderCss[checkBtnClick]}`}></div>
            </button>
          </div>
          {btnClicked&&<div className={HeaderCss.wrappedList}>
            <HeaderNavList/>
          </div>} 
        </div>
      </div>
      <nav>
        <ul className={HeaderCss[isScrolled?"scrolledList":null]}>
          <HeaderNavList/>
        </ul>
      </nav>
    </header>
  )
}

export default Header