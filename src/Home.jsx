import React from 'react'
import Header from "./Component/Header";
import Service from "./Component/Service";
import Resume from "./Component/Resume";
import About from "./Component/About";
import Work from "./Component/Work";
import Testimonial from "./Component/Testimonial";
import Blog from "./Component/Blog";
import Paid from "./Component/Paid";
import Footer from "./Component/Footer";
import "animate.css";


const Home = () => {
  return (
    <div>
      <Header />
      <Service />
      <Resume />
      <About />
      <Work />
      <Testimonial />
      <Blog />
      <Paid />
      <Footer />
    </div>
  );
}

export default Home