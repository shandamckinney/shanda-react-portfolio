import React from 'react'
import './service.css'
import { BiCheck } from 'react-icons/bi'
const Service = () => {
  return (
    <section id="services">
      <h5>What I Offer</h5>
      <h2>Services</h2>

      <div className="container services__container">
        <article className="service">
          <div className="service__head">
            <h3>Website Development</h3>
          </div>
          <ul className="service__list">
            <li>
              <BiCheck classname="service__list-icon"></BiCheck>
              <p>Coding of website from given design</p>
            </li>
            <li>
              <BiCheck classname="service__list-icon"></BiCheck>
              <p>Make changes to existing website</p>
            </li>
            <li>
              <BiCheck classname="service__list-icon"></BiCheck>
              <p>Add backend to existing front-end</p>
            </li>
            <li>
              <BiCheck classname="service__list-icon"></BiCheck>
              <p>Up to 6 pages</p>
            </li>
            <li>
              <BiCheck classname="service__list-icon"></BiCheck>
              <p>2 week turn-around</p>
            </li>
            <li>
              <BiCheck classname="service__list-icon"></BiCheck>
              <p>Support for 6 months</p>
            </li>
          </ul>
        </article>
        <article className="service">
          <div className="service__head">
            <h3>Web Design and Development</h3>
          </div>
          <ul className="service__list">
            <li>
              <BiCheck classname="service__list-icon"></BiCheck>
              <p>Work together to design website</p>
            </li>
            <li>
              <BiCheck classname="service__list-icon"></BiCheck>
              <p>Up to 3 edits</p>
            </li>
            <li>
              <BiCheck classname="service__list-icon"></BiCheck>
              <p>Website development from design</p>
            </li>
            <li>
              <BiCheck classname="service__list-icon"></BiCheck>
              <p>Front end and backend</p>
            </li>
            <li>
              <BiCheck classname="service__list-icon"></BiCheck>
              <p>Up to 6 pages</p>
            </li>
            <li>
              <BiCheck classname="service__list-icon"></BiCheck>
              <p>4 week turn-around</p>
            </li>
            <li>
              <BiCheck classname="service__list-icon"></BiCheck>
              <p>Support for 6 months</p>
            </li>
          </ul>
        </article>
        <article className="service">
          <div className="service__head">
            <h3>Accessibility Audit</h3>
          </div>
          <ul className="service__list">
            <li>
              <BiCheck classname="service__list-icon"></BiCheck>
              <p>Audit existing website for accessiblity rating</p>
            </li>
            <li>
              <BiCheck classname="service__list-icon"></BiCheck>
              <p>Make changes to existing website to increase accessiblity</p>
            </li>
            <li>
              <BiCheck classname="service__list-icon"></BiCheck>
              <p>Provide written suggestions</p>
            </li>
          </ul>
        </article>
      </div>
    </section>
  )
}

export default Service