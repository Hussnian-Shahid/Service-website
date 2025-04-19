import React from 'react'
import { Route, Routes } from "react-router-dom";
import Home from './Home';
import Contact from './Component/Contact';
import Aboutmenu from "./Component/Aboutmenu";
import Projectmenu from "./Component/Projectmenu";
import Projectdetail from "./Component/Projectdetail";
import Blogmenu from "./Component/Blogmenu";
import Blogdetail from "./Component/Blogdetail";



const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/about" element={<Aboutmenu />} />
        <Route path="/project" element={<Projectmenu />} />
        <Route path="/projectdetail" element={<Projectdetail />} />
        <Route path="/blog" element={<Blogmenu />} />
        <Route path="/blogdetail" element={<Blogdetail />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </>
  );
}

export default App