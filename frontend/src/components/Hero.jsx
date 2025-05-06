
import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../assets/logo.svg';
import { useEffect } from "react";


const HeroSection = () => {
  useEffect(() => {
    // Preload the background image
    const link = document.createElement("link");
    link.rel = "preload";
    link.href = "https://res.cloudinary.com/dtgjhc9za/image/upload/v1746216766/ACS_5056_auogih.webp";
    link.as = "image";
    document.head.appendChild(link);
  }, []);
  return (
    <section
      className="relative text-white text-center py-16 min-h-[610px] flex flex-col justify-center items-center"
      style={{
        backgroundImage: "url('https://res.cloudinary.com/dtgjhc9za/image/upload/v1746216766/ACS_5056_auogih.webp')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        opacity: 1,
      }}
    >

    {/* Overlay */}
    <div className="absolute inset-0 bg-black opacity-60"></div>"
       <style>
        {`
          @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;700&display=swap');
          .glow-text {
            font-family: 'Poppins', sans-serif;
            text-shadow: 0 0 10px rgba(255, 255, 0, 0.8), 0 0 20px rgba(255, 255, 0, 0.6);
          }
        `}
      </style>
     
      <div className=" absolute inset-0 bg-opacity-70 z-50">
        <header className="flex justify-between items-center  text-yellow-500">
        <img
  src={Logo}
  alt="DR S.V.R Reddy’s Study Hall Logo"
  className="w-16 sm:w-20 md:w-24 lg:w-28 mt-4"
 
  loading="lazy"
/>

          <nav>     
            <ul className="flex space-x-4">
              <li><Link to="/" className="text-yellow-500 text-xl sm:text-lg md:text-lg font-semibold hover:text-blue-400 hover:scale-105 transition-all duration-300 hover:underline ">Home</Link></li>
              <li><Link to="/about" className="text-yellow-500 text-xl sm:text-lg md:text-lg font-semibold hover:text-blue-400 hover:scale-105 transition-all duration-300 hover:underline ">About Us</Link></li>
              <li><Link to="/contact" className="text-yellow-500 text-xl  sm:text-lg md:text-lg font-semibold hover:text-blue-400 hover:scale-105 transition-all duration-300 hover:underline ">Contact Us</Link></li>
            </ul>
          </nav>
        </header>
        <div className="flex flex-col justify-center items-center text-center text-white h-100">
        <img  src={Logo}
  alt="DR S.V.R Reddy’s Study Hall Logo"
  className="w-16 sm:w-20 md:w-24 lg:w-80"

  loading="lazy" />
          <h1 className="text-4xl font-bold ">DR S.V.R Reddy’s Learning Hub</h1>
          <p className="mt-2 text-lg ">
            Unlocking Every Student’s Potential Through Expert Guidance and Personalized Learning
          </p>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;