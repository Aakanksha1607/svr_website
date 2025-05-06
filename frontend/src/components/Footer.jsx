
import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-blue-800 text-white py-5">
      <div className="w-full h-auto px-4 sm:px-6 md:px-10 lg:px-16 xl:px-24 overflow-x-hidden">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-center sm:text-left text-base sm:text-lg font-semibold">
            © Dr. S.V.R. Reddy's Learning Hub | All rights reserved & Developed by
          </p>
          <div className="flex items-center justify-center sm:justify-end">
           
            <img src="https://res.cloudinary.com/dtgjhc9za/image/upload/v1746478850/logo_transparent_gfmunv.png" alt="ZenBeta Logo" className="w-50 h-15 " />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
