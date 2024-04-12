import React from 'react'
import  CV from  '../../assets/pdf/cv-developer.pdf'
import {FaDownload} from 'react-icons/fa'
import profile2 from '../../assets/img/profile-2.jpeg'
import './about.css'

const About = () => {
  return (
    <section id='about' className='about container'>
      <div className='about__content grid'>
        <div className='about__info'>
          <h2 className='about__title'>Sobre <span>Mi</span></h2>
          <div className="about__description">
            <p>¡Hola! Me llamo Magali Sol Zapata, tengo 20 años, </p>
            <p> y vivo en Buenos Aires, Argentina.</p>
            <p>Me considero una persona dedicada, entusiasta y curiosa por las tecnologías. Me apasiona todo lo que se puede lograr con unos comandos y líneas de código. Soy paciente y enfocada a la hora de programar, me marco metas claras y persevero hasta alcanzarlas.</p>
          </div>
          <a href={CV} download='' className="btn">Descargar CV<span><FaDownload/></span></a>
        </div>
        <div className="about__img">
          <div className='border-img'>
            <img src={profile2} alt="img__profile2" className='about__profile'/>
          </div>
        </div>
      </div>
    </section>
          
  )
}

export default About