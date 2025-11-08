import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from './landing_page/home/HomePage';


import Signup from "./landing_page/signup/Signup";
import AboutPage from "./landing_page/about/AboutPage";

import Admission from "./landing_page/admission/Admission";
import Contact from "./landing_page/contact/Contact";

import Navbar from "./landing_page/Navbar";
import Footer from "./landing_page/Footer";


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
   <BrowserRouter>
    <Navbar />
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/about" element={<AboutPage />} />
      
      <Route path="/admission" element={<Admission />} />
      <Route path="/contact" element={<Contact />} />
      
    </Routes>
    <Footer />
  </BrowserRouter>
);
