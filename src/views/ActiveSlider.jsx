// local imports
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/free-mode";
import { FreeMode, Pagination } from "swiper/modules";
import { RxArrowTopRight } from "react-icons/rx";
import { ServiceData } from "../data";

// Functional component named ActiveSlider
const ActiveSlider = () => {
  return (
    // Main container for the active slider section
    <div className="mb-10 " >
      <div>
          <h2  className="text-3xl  md:text-4xl lg:text-5xl px-8 md:px-15 lg:px-20 font-bold text-fontBlack mb-6 text-center">Furniture in Room Inspirations</h2>
          <h6 className="text-xl md:text-2xl lg:text-2xl px-8 md:px-15 lg:px-20 mb-10 md:mb-10 lg:mb-10 text-fontBlack  text-center">Imagining Possibilities, Transforming Spaces: Discover Furniture that Fits Your Life</h6>
      </div>
       {/* Container for the Swiper component */}
      <div className="flex items-center justify-center flex-col  h-[550] md:h-[600] lg:h-[600px] bg-[#ffffff] ">
      <Swiper
        breakpoints={{
          340: {
            slidesPerView: 1,
            spaceBetween: 10,
         
          },
          // 500: {
          //   slidesPerView: 2,
    
          // },
          700: {
            slidesPerView: 2,
            spaceBetween: 10,
          },
          1331: {
            slidesPerView: 3, // Show 3 slides on screens wider than 1024px
            spaceBetween: 10,
          },
         
        }}
        freeMode={true}
        pagination={{
          clickable: true,
        }}
        modules={[FreeMode, Pagination]}
        className="max-w-[90%] lg:max-w-[80%] mx-auto"
      >
        {ServiceData.map((item) => (
          <SwiperSlide key={item.title}>
             {/* Individual slide with background image, title, content, and arrow icon */}
            <div className="flex flex-col gap-6 mb-20 group relative shadow-lg text-black rounded-xl px-6 py-8 h-[350px] w-[300px] lg:h-[400px] lg:w-[350px] overflow-hidden cursor-pointer">
              <div
                className="absolute inset-0 bg-cover bg-center"
                style={{ backgroundImage: `url(${item.backgroundImage})` }}
              />
              <div className="absolute inset-0 bg-black opacity-10  group-hover:opacity-50  " />
              <div className="relative flex-col gap-3">
              <div className="text-xl lg:text-2xl opacity-0 group-hover:opacity-100 group-hover:text-white transition duration-300">
                {item.title}
              </div>
              <div className="lg:text-[18px] opacity-0 group-hover:opacity-100 group-hover:text-white transition duration-300">
                {item.content}
              </div>
</div>
              <RxArrowTopRight className="absolute bottom-5 left-5 w-[35px] h-[35px] text-white group-hover:text-blue-500 group-hover:rotate-45 duration-100" />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
    </div>  
  );
};

// Exporting the ActiveSlider component for use in other parts of the application
export default ActiveSlider;