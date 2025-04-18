import React from 'react'
import Blog from './Blog'
import Navbar from './Navbar';
import Footer from './Footer';

const Blogmenu = () => {
  return (
    <div>
      <Navbar/>
      <Blog />
      <Blog />
      <Footer/>
    </div>
  );
}

export default Blogmenu