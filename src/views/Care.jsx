// local imports
import { careTitle, careSubtitle, careList } from "../data";
import imageFour from "../assets/image-four.jpg";
import FadeIn from "../components/FadeIn";

// Functional component named Care
const Care = () => {
  return (
    // Main container for the care section with specified styles
    <div id="care" className="px-10 max-w-[1490px] mx-auto mb-[80px] md:mb-[120px] lg:mb-[160px]">
       {/* Fading in the care section  */}
      <FadeIn delay={0.2} direction="down">
        <h1 className="text-3xl  md:text-4xl lg:text-5xl mb-6 font-bold text-fontBlack  text-center">
          {careTitle}
        </h1>
      </FadeIn>
      <FadeIn delay={0.4} direction="down">
        <h5 className="text-[#4F4F4F] text-xl text-center md:text-2xl lg:text-2xl  mb-10 md:mb-20 lg:mb-20">
          {careSubtitle}
        </h5>
      </FadeIn>
      {/* Container for care items with flex layout */}
      <div className="flex flex-col lg:flex-row gap-8">
         {/* Container for individual care items */}
        <div className="flex flex-col gap-8 items-start">
          {careList.map((item, i) => (
            <FadeIn key={i} delay={(i + 1) * 0.2} direction="left">
              <div className="flex flex-col xs:flex-row gap-6 items-center xs:items-start">
                <img
                  src={item.img}
                  alt={item.title}
                  className="h-[88px] w-[68px]"
                />
                <div>
                  <h3 className="text-center xs:text-start mb-2 text-2xl lg:text-[25px] text-fontBlack font-medium">
                    {item.title}
                  </h3>
                  <h6 className="text-center xs:text-start text-base lg:text-lg text-fontGray font-medium">
                    {item.subtitle}
                  </h6>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
        <FadeIn delay={0.6} direction="right">
          <img src={imageFour} alt="plants" />
        </FadeIn>
      </div>
    </div>
  );
};

// Exporting the Care component for use in other parts of the application
export default Care;
