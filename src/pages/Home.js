import React from 'react'
import HeroSection from "../components/HeroSection.js";
import ImproveSkillSection from "../components/ImproveSkillSection.js";
import QuoteSection from "../components/QuoteSection.js";
import ChefSection from "../components/ChefSection.js";
import Footer from "../components/footer.js";

const Home = () => {
  return (
    <div>
        <HeroSection/>
        <ImproveSkillSection/>
        <QuoteSection/>
        <ChefSection/>
        <Footer/>
    </div>
  )
}

export default Home
