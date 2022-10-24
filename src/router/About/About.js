import React from 'react'
import "./About.css"
import about from "../../assets/about.jpg"
import {Link} from "react-router-dom"


function About() {
  return (
    <div className='about'>
      <div className="about1">
        <h4>Mening ismim Axadov Azizbek. 2004-yil 17-Iyunda Namangan shaxrida tug'ilganman. 2022-Yil fevreal oyidan boshlab IT web-dasturlash tilini "ALGORITIM EDUCATION" da boshadim, va men u yerda html, css, JavaScript, React JS ni o'rgandim va Junior darajasiga yetdim. Bu birinchi portfolyoyim</h4>
     
       <Link to="./Russian"><h3>RUSSIAN</h3></Link>
        
        
      </div>

      <div className="abfoto">
        <img src={about} alt="" />
      </div>
    </div>
  )
}

export default About