import React from 'react'
import './about.css'
import ME from '../../assets/Shanda-4.webp';
import { FaAward } from 'react-icons/fa'
import { FiUsers } from 'react-icons/fi'
import { VscFolderLibrary } from 'react-icons/vsc'


export const About = () => {
  return (
    <section id="about">
      <h5>Get to know</h5>
      <h2>About Me</h2>

      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={ME} alt="Smiling girl with brown, curly hair and a button down short sleeve shirt. She is standing in front of the Houston skyline." />
          </div>
        </div>


        <div className="about__content">
          <div className="about__cards">
            <article className="about__card">
              <FaAward className="about__icon" />
              <h5>Experience</h5>
              <small>3+ Years Working</small>
            </article>

            <article className="about__card">
              <FiUsers className="about__icon" />
              <h5>Clients</h5>
              <small>300+ Clients Worldwide</small>
            </article>

            <article className="about__card">
              <VscFolderLibrary className="about__icon" />
              <h5>Projects</h5>
              <small>80+ Completed Projects</small>
            </article>
          </div>

          <p>I'm baby vHS retro next level man bun vape. Hoodie cloud bread messenger bag hell of fanny pack ramps affogato woke bespoke. Fingerstache literally cold-pressed kombucha umami raclette hexagon mixtape XOXO. Fingerstache literally waistcoat flexitarian bodega boys authentic mukbang, cray salvia banjo coloring book raw denim vibecession biodiesel. Cardigan disrupt air plant, messenger bag tote bag pork belly tacos mukbang bitters tbh. Umami same forage, four loko iPhone humblebrag kickstarter food truck listicle +1.</p>

          <a href="#contact" className="btn btn-primary">Let's Talk</a>
        </div>
      </div>
    </section>
  )
}
export default About