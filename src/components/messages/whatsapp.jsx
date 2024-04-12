import React from 'react'
import './whatsapp.css'
import { FaWhatsapp } from "react-icons/fa";
const whatsapp = () => {
  return (
    <a href="https://api.whatsapp.com/send?phone=1234567891" className="float" target="_blank">
        <FaWhatsapp className='my-float'/>
    </a>
  )
}

export default whatsapp