import React from 'react'
import profile from '../../assets/img/profile-1.jpg';
import { FaArrowDown } from "react-icons/fa";
import { Link } from 'react-scroll';
import './home.css';

const Home = () => {
  return (
    <section id='home' className='banner__wrapper grid'>
      <div className="home__img">
        <img src={profile} alt="" className='home__profile'/>
      </div>

      <div className="home__content">
        <div className='home__text'>
          <h1>
            <span>Magali</span> Zapata
          </h1>
          <h2 className="banner__job">Full Stack Developer</h2>
          <div className="home__button">
          <Link 
            to='about' 
            className='btn'
            spy={true} 
            smooth={true}
            offset={-70}
            duration={500}   
          >
            ¡Conoceme!
            <span><FaArrowDown/></span>
          </Link>
        </div>
        </div>
        

      </div>
    </section>
  )
}

export default Home