// local imports
import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { testimonials } from "../data";

// Functional component for displaying a carousel of customer testimonials
const TestimonialCarousel = () => {
    // Configuration settings for the carousel
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    adaptiveHeight: true
  };

  return (
    <div className="max-w-6xl mx-auto p-8 "> 
    <div >
      <h2  className="text-5xl lg:text-[64px] font-medium text-fontBlack mb-6 text-center">Customer Review</h2>
      <h6 className="text-2xl lg:text-[22px]  text-fontBlack mb-6 text-center">What our customers says about us</h6>
      </div>   
       {/* Carousel component with dynamic testimonials */} 
      <Slider {...settings}>
        {testimonials.map(testimonial => (
          <div key={testimonial.id} className="bg-white p-20 rounded-lg shadow-lg">
            <div className="flex items-center justify-center mb-4 ">
              <img
                src={testimonial.image}  // Dynamically change the image based on the current testimonial
                alt="Profile"
                className="w-44 h-44 rounded-full object-cover border-4 border-white"
              />
            </div>
            <p className="text-gray-800 text-lg mb-4 text-center">{testimonial.comment}</p>
            <p className="text-gray-600 font-semibold text-center">{testimonial.name}</p>
          </div>
        ))}
      </Slider>
    </div>
  );
};
// Exporting the TestimonialCarousel component for external use
export default TestimonialCarousel;
