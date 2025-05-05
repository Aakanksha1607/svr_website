import { Link } from 'react-router-dom';
import Footer from '../components/Footer';

import React from 'react';
import { FaPhoneAlt, FaMapMarkerAlt } from 'react-icons/fa';


function Contact() {
    return (
     
          <div className="bg-white">
         <header className="bg-yellow-300 mt-8 p-4 flex justify-between items-center">
           <h1 className="text-lg font-bold">About</h1>
           <nav>
             <ul className="flex space-x-4">
               <li><Link to="/" className="text-black text-xl font-semibold">Home</Link></li>
               <li><Link to="/about" className="text-black text-xl font-semibold">About Us</Link></li>
             </ul>
           </nav>
         </header>
        <div className="max-w-7xl mx-auto px-4">
          <h1 className="text-3xl font-bold text-orange-400 mb-8">Contact Us</h1>
          <div className="flex flex-col md:flex-row gap-8">
            {/* Address Section */}
            <div className="md:w-1/2">
              <h2 className="text-2xl font-semibold text-orange-400 mb-4">Our Address</h2>
              <p className="text-lg text-gray-600">
                DR S.V.R Reddy’s Study Hall<br />
                Srinagar Colony<br />
                Hyderabad, Telangana 500073<br />
                India
              </p>
              <p className="text-lg text-gray-600 mt-4">
                <strong>Phone:</strong> +91 123-456-7890<br />
                <strong>Email:</strong> contact@svrreddystudyhall.com
              </p>
            </div>
  
            {/* Map Section */}
            <div className="md:w-1/2">
              <div className="bg-blue-100 rounded-lg p-4 shadow-lg">
                <img
                  src="https://via.placeholder.com/600x400?text=Map+of+Srinagar+Colony"
                  alt="Map of Srinagar Colony"
                  className="w-full h-64 object-cover rounded-lg"
                />
              </div>
            </div>
          </div>
        </div>
         <Footer />
      </div>
     
     
    );
  }
  
  export default Contact;