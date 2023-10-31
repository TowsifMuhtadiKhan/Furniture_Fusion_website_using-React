// local imports
import Hero from "./views/Hero";
import Services from "./views/Services";
import Products from "./views/Products";
import Reference from "./views/Reference";
import Care from "./views/Care";
import ActiveSlider from "./views/ActiveSlider";
import TestimonialCarousel from "./views/TestimonialCarousel";
import Footer from "./views/Footer";

function App() {
  return (
    <>
      <Hero /> 
      <Services />
      <Products />
      <Reference />
      <Care />     
      <ActiveSlider/>  
     <TestimonialCarousel/>
      <Footer />
    </>
  );
}

export default App;
