  // // src/components/HeroSection.jsx
  // import React from 'react';
  // import { Link } from 'react-router-dom';

  // const HeroSection = () => {
  //   return (
  //     <section className="relative">
  //       <img
  //         src="https://res.cloudinary.com/dtgjhc9za/image/upload/v1746216766/ACS_5056_auogih.webp"
  //         alt="Building"
  //         className="w-full h-screen object-cover z-60"
  //       />
  //       <div className=" absolute inset-0 bg-black bg-opacity-70 z-50">
  //         <header className="flex justify-between items-center p-4 text-yellow-500">
  //           <h1 className="text-lg"></h1>
  //           <nav>
  //           <ul className="flex space-x-4">
  //              <li><Link to="/" className="text-yellow-500">Home</Link></li>
  //              <li><Link to="/about" className="text-yellow-500">About Us</Link></li>
  //              <li><Link to="/contact" className="text-yellow-500">Contact Us</Link></li>
  //            </ul>
  //           </nav>
  //         </header>
  //         <div className="flex flex-col justify-center items-center text-center text-white h-full">
  //           <img src="/path/to/logo.png" alt="Logo" className="mb-4" />
  //           <h1 className="text-4xl font-bold">DR S.V.R Reddy’s Study Hall</h1>
  //           <p className="mt-2 text-lg">
  //             Unlocking Every Student’s Potential Through Expert Guidance and Personalized Learning
  //           </p>
  //         </div>
  //       </div>
  //     </section>
  //   );
  // };

  // export default HeroSection;


  import React from 'react';
import { Link } from 'react-router-dom';

const HeroSection = () => {
  return (
    <section   className="relative text-white text-center py-16 min-h-[610px] flex flex-col justify-center items-center"
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
        <header className="flex justify-between items-center p-4 text-yellow-500">
          <h1 className="text-lg"></h1>
          <nav>
            <ul className="flex space-x-4">
              <li><Link to="/" className="text-yellow-500 text-xl font-semibold hover:text-blue-400 hover:scale-105 transition-all duration-300 hover:underline ">Home</Link></li>
              <li><Link to="/about" className="text-yellow-500 text-xl font-semibold hover:text-blue-400 hover:scale-105 transition-all duration-300 hover:underline ">About Us</Link></li>
              <li><Link to="/contact" className="text-yellow-500 text-xl font-semibold hover:text-blue-400 hover:scale-105 transition-all duration-300 hover:underline ">Contact Us</Link></li>
            </ul>
          </nav>
        </header>
        <div className="flex flex-col justify-center items-center text-center text-white h-full">
          <img src="/path/to/logo.png" alt="Logo" className="mb-4" />
          <h1 className="text-4xl font-bold glow-text">DR S.V.R Reddy’s Study Hall</h1>
          <p className="mt-2 text-lg glow-text">
            Unlocking Every Student’s Potential Through Expert Guidance and Personalized Learning
          </p>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;