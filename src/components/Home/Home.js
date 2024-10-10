import React from "react";
import ImageSlider from "./ImageSlider";
import Services from "./Services";
import HeroSection from "./Herosection";
import PartnerBrand from "./PartnerBrand";
const Home =()=>
{
return(
  <div>
    <ImageSlider/>
    <HeroSection/>
    <Services/>
    <PartnerBrand></PartnerBrand>
  </div>
)
}
export default Home;