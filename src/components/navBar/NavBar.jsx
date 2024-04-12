import React from 'react'
import { useState } from 'react'
import { Link } from 'react-scroll'
import { links } from '../../utils/Data'
import './navBar.css'

const NavBar = () => {

    const [menuOpen, setMenuOpen] = useState(false)

  return (
    <nav className='navbar'>
        <Link 
            to='home'
            className='navLink' 
            spy={true} 
            smooth={true}
            offset={-70}
            duration={500}   
            onClick={() => setMenuOpen(false)} 
        >
        <h1 className='navbar__title'>Portfolio.</h1>
        </Link>
        
        <div 
                className={`${menuOpen ? 'nav__toggle animate-toggle' : 'nav__toggle'}`}
                onClick={() => setMenuOpen(!menuOpen)}
            >
                <span></span>
                <span></span>
                <span></span>
            </div>  
        <div className='menu'>        
            <ul 
                className={`menu__items ${menuOpen && 'menu__open'}`}
                
            >
                {links.map(({name, section}, index) => {
                    return(
                        <li key={index}>
                            <Link
                                to={section} 
                                className='navLink' 
                                spy={true} 
                                smooth={true}
                                offset={-70}
                                duration={500}   
                                onClick={() => setMenuOpen(false)} 
                            >
                            {name}
                            </Link>
                        </li>
                    )
                })}
            </ul>
        </div>

    </nav>
  )
}

export default NavBar

