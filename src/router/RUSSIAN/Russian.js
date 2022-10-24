import React from 'react'
import about from "../../assets/about.jpg"
import {Link} from "react-router-dom"
import "./Russian.css"

function Russian() {
  return (
    <div className='about'>
      <div className="about1">
        <h4>Меня зовут Ахадов Азизбек. Я родился 17 июня 2004 года в городе Наманган. С февраля 2022 года я начал изучать язык ИТ веб-программирования в «ALGORITIM EDUCATION», где изучал html, css, JavaScript, React JS и достиг уровня Junior. Это мое первое портфолио</h4>
        <Link to="./About"><h3>UZBEK</h3></Link>
      </div>

      <div className="abfoto">
        <img src={about} alt="" />
      </div>
    </div>
  )
}

export default Russian