import React from 'react'
import "./Home.css"
import html from "../../assets/html.png"
import css from "../../assets/css.png"
import js from "../../assets/js.png"
import react from "../../assets/react.png"
import uzm from "../../assets/portgolya1.png"
import {FcBiotech} from "react-icons/fc"

function Home() {
  return (
    <div className='home'>
     
      <div className="logolar">
        <div className="box"><img src={html} alt="" /></div>
        <div className="box"><img src={css} alt="" /></div>
      <div className="box1"><img src={js} alt="" /></div>
        <div className="box1"><img src={react} alt="" /></div>
        <h1>Junior Web Developer <FcBiotech/></h1>
       
      </div>
      
      <div className="fotka">
   <img src={uzm} alt="" />
      </div>

    </div>
  )
}

export default Home