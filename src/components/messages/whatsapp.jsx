import React from 'react'
import './whatsapp.css'
import { FaWhatsapp } from "react-icons/fa";
const whatsapp = () => {
  return (
    <a href="https://api.whatsapp.com/send?phone=5491160200142" className="float" target="_blank">
        <FaWhatsapp className='my-float'/>
    </a>
  )
}

export default whatsapp