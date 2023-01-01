import React from 'react'
import { Carousel } from 'react-responsive-carousel'
import 'react-responsive-carousel/lib/styles/carousel.min.css'
import '../assets/Services.scss'
import img1 from "../assets/3.jpg"
import img2 from "../assets/4.jpg"

const Services = () => {
  return (
    <div className='services'>
      <Carousel infiniteLoop autoPlay showStatus={false} showArrows={false} interval={2000} showThumbs={false}>
        <div>
          <img src={img2} alt="Item1" />
          <p className='title'>Learn with Community</p>
        </div>
        <div>
          <img src={img1} alt="Item1" />
          <p className='title'>Full Stack Web Dev</p>
        </div>
      </Carousel>
    </div>
  )
}

export default Services
