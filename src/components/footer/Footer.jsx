import React from 'react'
import './footer.css'
import {BsLinkedin} from 'react-icons/bs'
import {FaGithub} from 'react-icons/fa'
import {FiDribbble} from 'react-icons/fi'

const Footer = () => {
  return (
   <footer>
    <a href="#" className="footer__logo">SHANDA</a>

    <ul className="permalinks">
      <li><a href="#">Home</a></li>
      <li><a href="#about">About</a></li>
      <li><a href="#experience">Experience</a></li>
      <li><a href="#services">Services</a></li>
      <li><a href="#portfolio">Portfolio</a></li>
      <li><a href="#testimonials">Testimonials</a></li>
      <li><a href="#contact">Contact</a></li>
    </ul>

    <div className='footer__socials'>
    <a href="https://linkedin.com" target="_blank"><BsLinkedin></BsLinkedin></a>
        <a href="https://github.com" target="_blank"><FaGithub></FaGithub></a>
        <a href="https://dribbble  .com" target="_blank"><FiDribbble></FiDribbble></a>
    </div>

    <div className="footer__copyright">
      <small>&copy; Shanda Pinell. All rights reserved.</small>
    </div>
   </footer>
  )
}

export default Footer