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
   <div className="max-w-6xl mx-auto pb-10 mt-0 ">
    <div className="max-w-6xl mx-auto p-2 mt-0"> 
      <div >
      <h3 className="text-3xl  md:text-4xl lg:text-5xl  mb-2 md:mb-4 lg:mb-6 font-medium text-fontBlack text-center">Customer Review</h3>
      <h6 className="text-xl md:text-2xl lg:text-2xl text-fontBlack mb-6 text-center">What our customers says about us</h6>
      </div>   
       {/* Carousel component with dynamic testimonials */} 
      <Slider {...settings}>
        {testimonials.map(testimonial => (
          <div key={testimonial.id} className="bg-white p-10 md:p-10 lg:p-15 rounded-lg shadow-lg">
            <div className="flex items-center justify-center mb-4 ">
              <img
                src={testimonial.image}  // Dynamically change the image based on the current testimonial
                alt="Profile"
                className="w-44 h-44 rounded-full object-cover border-4 border-white"
              />
            </div>
            <p className="text-gray-800 p-2 md:p-10 lg:p-15 text-[15px]  md:text-xl lg:text-xl mb-4 md:mb-2 lg:mb-2 text-center">{testimonial.comment}</p>
            <p className="text-gray-600 mt-4 md:mt-0 lg:mt-0 font-semibold text-center">{testimonial.name}</p>
          </div>
        ))}
      </Slider>
    </div>
    </div> 
  );
};
// Exporting the TestimonialCarousel component for external use
export default TestimonialCarousel;
