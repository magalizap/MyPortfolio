import React from 'react'
import { skills } from "../../utils/Data"
import './skills.css'

const Skills = () => {
  return (
    <section id="skills" className="skills container">
        <div className="skills__content grid">
            <h2>Tecnologías</h2>
            <ul className='skills__list grid'>
            {skills.map(({title, icon}, index) => {
                return(

                    <li className='skill' key={index}>
                        {icon}
                        <p className='skills__title'>{title}</p>
                    </li>

                )
            })}
            </ul>
        </div>
    </section>
  )
}

export default Skills