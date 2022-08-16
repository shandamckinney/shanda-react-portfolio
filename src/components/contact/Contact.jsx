import React, {useRef} from 'react'
import './contact.css'
import { MdOutlineEmail } from 'react-icons/md'
import { RiMessengerLine } from 'react-icons/ri'
import { BsWhatsapp } from 'react-icons/bs'
import emailjs from '@emailjs/browser';
const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_lx1wj97', 'template_4kpbqbc', form.current, 'user_HB7mvCjWOIJmN1xDWdkCO' )
    e.target.reset();
  }
  return (
    <section id="contact">
      <h5>Get in Touch</h5>
      <h2>Contact</h2>

      <div className="container contact__container">
        <div className="contact__options">
          <article className="contact__option">
            <MdOutlineEmail class="contact__option-icon" />
            <h4>Email</h4>
            <h5>mckinney.shanda@gmail.com</h5>
            <a href="mailto:mckinney.shanda@gmail.com">Send a Message</a>
          </article>
          <article className="contact__option">
            <RiMessengerLine class="contact__option-icon" />
            <h4>Messanger</h4>
            <h5>mckinney.shanda@gmail.com</h5>
            <a href="mailto:mckinney.shanda@gmail.com">Send a Message</a>
          </article>
          <article className="contact__option">
            <BsWhatsapp class="contact__option-icon" />
            <h4>WhatsApp</h4>
            <h5>+1234567890</h5>
            <a href="https://api.whatsapp.com/send?phone+01234567890">Send a Message</a>
          </article>
        </div>
        <form ref={form} onSubmit={sendEmail}>
          <input type="text" name='name' placeholder="Your Full Name" required />
          <input type="email" name="email" placeholder="Your email" required />
          <textarea name="message" rows="7" placeholder="Your message" required></textarea>
          <button type="submit" className="btn btn-primary">Send</button>
        </form>
      </div>
    </section>
  )
}

export default Contact