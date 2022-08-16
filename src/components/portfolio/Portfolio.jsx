import React from 'react'
import './portfolio.css'


const Portfolio = () => {
  return (
    <section id="portfolio">
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      {/* {data.map(({id, image, title, github, demo}) => {
        return (
          <article key={id} className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={image} alt={title}></img>
          </div>
          <h3>{title}</h3>
          <div className="portfolio__item-cta">
            <a href={github} className="btn">Github</a>
            <a href={demo} className="btn btn-primary" target="_blank">Live Demo</a>
          </div>
        </article>
        )
      })} */}

      <div className="container portfolio__container">
        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src="https://cdn.dribbble.com/userupload/3175599/file/original-ac566f0d278344a3d4269fe53fbad683.jpg?compress=1&resize=640x480&vertical=top" alt=""></img>
          </div>
          <h3>This is a portfolio item title</h3>
          <div className="portfolio__item-cta">
            <a href="https://www.google.com" className="btn">Github</a>
            <a href="https://www.dribbble.com/Alien_pixels" className="btn btn-primary" target="_blank">Live Demo</a>
          </div>
        </article>

        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src="https://cdn.dribbble.com/userupload/3175599/file/original-ac566f0d278344a3d4269fe53fbad683.jpg?compress=1&resize=640x480&vertical=top" alt=""></img>
          </div>
          <h3>This is a portfolio item title</h3>
          <div className="portfolio__item-cta">
            <a href="https://www.google.com" className="btn">Github</a>
            <a href="https://www.dribbble.com/Alien_pixels" className="btn btn-primary" target="_blank">Live Demo</a>
          </div>
        </article>
        
        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src="https://cdn.dribbble.com/userupload/3175599/file/original-ac566f0d278344a3d4269fe53fbad683.jpg?compress=1&resize=640x480&vertical=top" alt=""></img>
          </div>
          <h3>This is a portfolio item title</h3>
          <div className="portfolio__item-cta">
            <a href="https://www.google.com" className="btn">Github</a>
            <a href="https://www.dribbble.com/Alien_pixels" className="btn btn-primary" target="_blank">Live Demo</a>
          </div>
        </article>

        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src="https://cdn.dribbble.com/userupload/3175599/file/original-ac566f0d278344a3d4269fe53fbad683.jpg?compress=1&resize=640x480&vertical=top" alt=""></img>
          </div>
          <h3>This is a portfolio item title</h3>
          <div className="portfolio__item-cta">
            <a href="https://www.google.com" className="btn">Github</a>
            <a href="https://www.dribbble.com/Alien_pixels" className="btn btn-primary" target="_blank">Live Demo</a>
          </div>
        </article>

        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src="https://cdn.dribbble.com/userupload/3175599/file/original-ac566f0d278344a3d4269fe53fbad683.jpg?compress=1&resize=640x480&vertical=top" alt=""></img>
          </div>
          <h3>This is a portfolio item title</h3>
          <div className="portfolio__item-cta">
            <a href="https://www.google.com" className="btn">Github</a>
            <a href="https://www.dribbble.com/Alien_pixels" className="btn btn-primary" target="_blank">Live Demo</a>
          </div>
        </article>
      </div>
    </section>
  )
}

export default Portfolio