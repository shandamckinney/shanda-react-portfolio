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
              <small>1 Million+ Users Reached</small>
            </article>

            <article className="about__card">
              <VscFolderLibrary className="about__icon" />
              <h5>Languages</h5>
              <small>6+ Languages Used</small>
            </article>
          </div>

          <p>I'm Shanda Pinell and I am a coffee drinking, dog-loving, rock-climbing full-stack software engineer. With a degree in American Sign Language interpreting, and after working 2+ years, I made the plunge and accepted my first software engineering position. Every role I've taken has been in a language I've learned on the job and I thrive on constantly picking up new skills and diving into features that nobody else knows what to do.</p>
          <p>Outside of work, I spend most of my time with my wife and dogs living life and driving around new parts of Houston. I'll never turn down food or a chance to build something from scratch. My dreams for the future are to buy a trailer and travel around the US with the family.</p>

          <a href="#contact" className="btn btn-primary">Let's Talk</a>
        </div>
      </div>
    </section>
  )
}
export default About