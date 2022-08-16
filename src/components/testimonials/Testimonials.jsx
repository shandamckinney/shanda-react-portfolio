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
            <img src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cGVyc29ufGVufDB8fDB8fA%3D%3D&w=1000&q=80" alt=""></img>
          </div>
            <h5>Jane Doe</h5>
            <small classname="client__review">Kickstarter same bushwick fit. Freegan tumblr narwhal migas VHS bushwick tofu wolf intelligentsia brunch. Ramps microdosing dreamcatcher shoreditch mukbang brunch aesthetic mlkshk ethical echo park wayfarers. Freegan fashion axe selfies yuccie lo-fi DIY.</small>
        </SwiperSlide>
        <SwiperSlide className="testimonial">
          <div className="client__avatar">
            <img src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cGVyc29ufGVufDB8fDB8fA%3D%3D&w=1000&q=80" alt=""></img>
          </div>
            <h5>Jane Doe</h5>
            <small classname="client__review">Kickstarter same bushwick fit. Freegan tumblr narwhal migas VHS bushwick tofu wolf intelligentsia brunch. Ramps microdosing dreamcatcher shoreditch mukbang brunch aesthetic mlkshk ethical echo park wayfarers. Freegan fashion axe selfies yuccie lo-fi DIY.</small>
        </SwiperSlide>
        <SwiperSlide className="testimonial">
          <div className="client__avatar">
            <img src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cGVyc29ufGVufDB8fDB8fA%3D%3D&w=1000&q=80" alt=""></img>
          </div>
            <h5>Jane Doe</h5>
            <small classname="client__review">Kickstarter same bushwick fit. Freegan tumblr narwhal migas VHS bushwick tofu wolf intelligentsia brunch. Ramps microdosing dreamcatcher shoreditch mukbang brunch aesthetic mlkshk ethical echo park wayfarers. Freegan fashion axe selfies yuccie lo-fi DIY.</small>
        </SwiperSlide>
        
      </Swiper>
    </section>
  )
}

export default Testimonials