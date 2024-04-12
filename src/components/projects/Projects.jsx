import React from 'react'
import { projects } from '../../utils/Data'
import './projects.css'

const Projects = () => {
  return (
    <section id='projects' className='projects container'>
      <div className='projects__content grid'>
        <h2>Mis proyectos</h2>

        <div className="card__container grid">
          {projects.map(({img, title, skills, links}, index) => {
            return (
              <article className="card__article" key={index}> 
                <img src={img} alt="img" className='card__img'/>
                <div className="card__data">
                  <p className='card__title'>{title}</p>
                  <div className='card__icons skills'>
                    {skills.map((element, index) => {
                      return (
                        <div key={index}>{element.type}</div>
                      )
                    })}
                  </div>
                  <div className='card__icons'>
                  {links.map(({icon, path}, index) => {
                      return(
                        <a className='icon__link' key={index} href={path}>{icon}</a>
                      )
                    })}
                  </div>
                </div>
              </article>
            )
          })}
        </div>

      </div>
    </section>
  )
}

export default Projects