import React from 'react'
import BannerSection from "./Component/BannerSection";
import CardSection from "./Component/CardSection";
import RoadmapSection from "./Component/RoadmapSection";
import Section_3 from "./Component/Section_3";
import Disclaimer from './Component/Disclaimer';



const Home = () => {
  return (
    <div> <BannerSection/>
    
   
    <CardSection/>
   
    <Section_3/>
    <RoadmapSection/>

    <Disclaimer/>
    

    </div>
  )
}

export default Home