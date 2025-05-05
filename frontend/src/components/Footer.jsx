import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-blue-800 text-white py-4">
      <div className="max-w-screen-xl mx-auto px-4 sm:px-6 md:px-10 lg:px-16 xl:px-24">
        <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-center sm:text-left text-sm sm:text-base font-medium">
            © Dr. S.V.R. Reddy's Learning Hub | All rights reserved & Developed by
          </p>
          <div className="flex items-center justify-center sm:justify-end">
            <span className="font-bold text-white">zenβeta</span>
            <img
              src="/path/to/logo.png"
              alt="ZenBeta Logo"
              className="w-6 h-6 ml-2 object-contain"
            />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
