// local imports
import { referenceTitle, referenceSubtitle } from "../data";
import imageOne from "../assets/image-one.jpg";
import imageTwo from "../assets/image-two.jpg";
import imageThree from "../assets/image-three.png";
import FadeIn from "../components/FadeIn";

// Functional component named Reference
const Reference = () => {
  return (
    // Main container for the reference section with specified styles
    <div id="reference" className="mb-[80px] md:mb-[90px] lg:mb-[160px] px-10 max-w-[1490px] mx-auto">
       {/* Fading in the reference section*/}
      <FadeIn delay={0.2} direction="down">
        <h1 className="text-3xl  md:text-4xl lg:text-5xl  mb-6  font-bold text-fontBlack text-center">
          {referenceTitle}
        </h1>
      </FadeIn>
      <FadeIn delay={0.4} direction="down">
        <h5 className="text-[#4F4F4F] text-xl md:text-2xl lg:text-2xl mb-12 text-center">
          {referenceSubtitle}
        </h5>
      </FadeIn>

      {/* Container for reference images with flex layout */}
      <div className="flex flex-col md:flex-row md:justify-center gap-8">
          {/* Fading in the first two images from the right */}
        <FadeIn delay={0.2} direction="right">
          <div className="flex flex-col gap-8">
            <img src={imageOne} alt="" />
            <img src={imageTwo} alt="" />
          </div>
        </FadeIn>
        {/* Fading in the third image from the left */}
        <FadeIn delay={0.2} direction="left">
          <div>
            <img src={imageThree} alt="" />
          </div>
        </FadeIn>
      </div>
    </div>
  );
};

// Exporting the Reference component for use in other parts of the application
export default Reference;
