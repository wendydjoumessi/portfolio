import React from "react";
import "./testimonial.css";

// import Swiper core and required modules
import { Pagination, Navigation, Scrollbar, A11y } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import client from "../../api/axios";


export const Testimonial = () => {
  const [testimonials, setTestimonials] = React.useState([]);

  React.useEffect(()=>{
    client.get("/testimonials")
    .then((response)=>{
      const temp = response.data
      setTestimonials(temp)
    }).catch((err)=>{
      console.log("testimonial error:", err)
    })
  },[])

  return (
    <section id="testimonial">
      <h5>Review from client</h5>
      <h2>Testimonials</h2>

      <Swiper className="container testimonials__container"
      modules={[Pagination, Navigation, Scrollbar, A11y]}
      spaceBetween={40}
      slidesPerView={1}
      pagination={{ clickable: true }}
      >
        {testimonials.map((testi) => {
          return (
            <SwiperSlide key={testi.id} className="testimonial">
              <div className="client__avatar">
                <img src={testi.clientProfile} alt="client avatar" />
              </div>
              <h5 className="client__name"> {testi.clientName} </h5>
              <small className="client__review"> {testi.testimonialMessage} </small>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </section>
  );
};
export default Testimonial;
