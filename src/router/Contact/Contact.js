import React from 'react'
import "./Contact.css"
import { FiPhoneCall } from "react-icons/fi"

function Contact() {
  return (
    <div className='contact'>
     
      <div className="con">
          <div className="telegram">
              
              <a href="https://t.me/azeezsheyx"> <h3>TELEGRAM</h3></a>

          </div>

          <div className="instagram">
              
              <a href="https://instagram.com/akhadov.077"> <h3>INSTAGRAM</h3></a>

          </div>

          <div className="email">
              
              <a href="https://azizshoxofficial@gmail.com"> <h3>EMAIL</h3></a>

          </div>

      </div>
      <div className="iconka">
        <FiPhoneCall/>
        <a href="#"><h3>+99833 859 82 82 </h3></a>
       
      </div>
    </div>
  )
}

export default Contact