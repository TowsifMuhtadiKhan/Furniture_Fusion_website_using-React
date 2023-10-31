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
    <div>
      <div>
          <h2  className="text-5xl lg:text-[64px] font-medium text-fontBlack mb-6 text-center">Furniture in Room Inspirations</h2>
          <h6 className="text-2xl lg:text-[22px]  text-fontBlack mb-6 text-center">Imagining Possibilities, Transforming Spaces: Discover Furniture that Fits Your Life</h6>
      </div>
       {/* Container for the Swiper component */}
      <div className="flex items-center justify-center flex-col h-[600px] bg-[#ffffff]">
      <Swiper
        breakpoints={{
          340: {
            slidesPerView: 2,
            spaceBetween: 15,
          },
          700: {
            slidesPerView: 3,
            spaceBetween: 15,
          },
        }}
        freeMode={true}
        pagination={{
          clickable: true,
        }}
        modules={[FreeMode, Pagination]}
        className="max-w-[90%] lg:max-w-[80%]"
      >
        {ServiceData.map((item) => (
          <SwiperSlide key={item.title}>
             {/* Individual slide with background image, title, content, and arrow icon */}
            <div className="flex flex-col gap-6 mb-20 group relative shadow-lg text-black rounded-xl px-6 py-8 h-[250px] w-[215px] lg:h-[400px] lg:w-[350px] overflow-hidden cursor-pointer">
              <div
                className="absolute inset-0 bg-cover bg-center"
                style={{ backgroundImage: `url(${item.backgroundImage})` }}
              />
              <div className="absolute inset-0 bg-black opacity-10  group-hover:opacity-50  " />
              <div className="relative flex flex-col gap-3 group-hover:text-white">  
                <h1 className="text-xl lg:text-2xl">{item.title} </h1>
                <p className="lg:text-[18px]">{item.content} </p>
              </div>
              <RxArrowTopRight className="absolute bottom-5 left-5 w-[35px] h-[35px] text-white group-hover:text-green-500 group-hover:rotate-45 duration-100" />
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