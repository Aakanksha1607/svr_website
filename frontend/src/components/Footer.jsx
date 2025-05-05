// src/components/Footer.jsx
import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-blue-800 text-white py-5">
      <div className="container mx-auto flex justify-between items-center px-4">
        <p className="text-lg font-semibold">
          © Dr. S.V.R. Reddy's Learning Hub | All rights reserved & Developed by
        </p>
        <div className="flex items-center">
          <span className="font-bold ">zenβeta</span>
          <img src="/path/to/logo.png" alt="ZenBeta Logo" className="w-6 h-6 ml-2" />
        </div>
      </div>
    </footer>
  );
};

export default Footer;