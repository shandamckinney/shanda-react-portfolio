import React from 'react'
import './testimonials.css'

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Pagination, Navigation, Scrollbar, A11y } from "swiper";


const Testimonials = () => {
  return (
    <section id="testimonials">
      <h5>Reviews from Clients</h5>
      <h2>Testimonials</h2>

      {/* {
        data.map(({ avatar, name, review }, index) => {
          return (
            <article key={index} className="testimonial">
              <div className="client__avatar">
                <img src={avatar} alt=""></img>
              </div>
              <h5>{name}</h5>
              <small classname="client__review">{review}</small>
            </article>
          )
        })
      } */}

      <Swiper className="container testimonials__container"
       modules={[Navigation, Pagination, Scrollbar, A11y]}
       spaceBetween={40}
       slidesPerView={1}
       navigation
       pagination={{ clickable: true }}>
        <SwiperSlide className="testimonial">
          <div className="client__avatar">
            <img src="https://media.gettyimages.com/photos/smiling-hispanic-man-against-white-background-picture-id1314489757?s=612x612" alt=""></img>
          </div>
            <h5>Henry Stern</h5>
            <small classname="client__review">Since having our new website built by Shanda, we have seen a 200% increase in the number of online contact forms being filled out and returned to us. Shanda worked closely with us to provide a site that met all of the criteria that we were looking for. The end result was a website that is attractive, organized and effective. Thanks to Shanda for all of your hard work and support!</small>
        </SwiperSlide>
        <SwiperSlide className="testimonial">
          <div className="client__avatar">
            <img src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cGVyc29ufGVufDB8fDB8fA%3D%3D&w=1000&q=80" alt=""></img>
          </div>
            <h5> Gail Martin</h5>
            <small classname="client__review">Shanda developed a new website for our non-profit healthcare organization. Shanda did an excellent job and was easy to work with. While we shared our vision for the site, she took our vision and added all the bells and whistles that we needed for a great website! We were very pleased with the outcome and would highly recommend her!</small>
        </SwiperSlide>
        <SwiperSlide className="testimonial">
          <div className="client__avatar">
            <img src="https://imageio.forbes.com/specials-images/imageserve/6099a48187fe756a3e620703/0x0.jpg?format=jpg&width=1200" alt=""></img>
          </div>
            <h5>Richard Fisher</h5>
            <small classname="client__review">Shanda Pinell provided the most prompt quote of three requested for website design, communicated well during the project, and provided a well-designed website with an easy to use content management system.</small>
        </SwiperSlide>
        
      </Swiper>
    </section>
  )
}

export default Testimonials