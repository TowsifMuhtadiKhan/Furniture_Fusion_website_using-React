// local imports
import { services } from "../data";
import FadeIn from "../components/FadeIn";

// Functional component named Services
const Services = () => {
    // JSX code representing the services section of the website
  return(
     <div id="services" className="mt-[80px] md:mt-[90px] lg:mt-[160px] mb-[80px] md:mb-[90px] lg:mb-[160px] max-w-[1490px] mx-auto px-10 flex flex-col xs:flex-row gap-12 xs:gap-6 xs:justify-between w-full">
    {services.map((service, i) =>(
      // Applying fade-in animation effect using the 'FadeIn' component with a delay and direction
      <FadeIn key={i} delay={0.2} direction="down">
         {/* Individual service item with an icon, title, and subtitle */}
        <div className="flex flex-col lg:flex-row gap-4 w-full items-center">
          <img src={service.icon}
          className="max-h-[84px] max-w-[84px]" 
          alt=""
          />
          <div className="flex flex-col gap-1.5">
            <h3 className="text-center lg:text-start text-2xl lg:text-[28px] text-fontBlack font-medium">
              {service.title}
            </h3>
            <h6 className="text-center lg:text-start text-base lg:text-lg] text-fontGray font-mediumt">
              {service.subtitle}
            </h6>
          </div>
        </div>
      </FadeIn> 
    )
    )}
   </div>
  );
};
// Exporting the Services component for use in other parts of the application
export default Services;
