
import { Link } from 'react-router-dom';
import Footer from '../components/Footer';
import Logo from '../assets/logo.svg';

import React from 'react';

import {Helmet} from 'react-helmet';
import { FaMapMarkerAlt } from 'react-icons/fa';




function Contact() {
  
    return (
          <div className="bg-white">
              <Helmet>
        <title>Contact Us | DR S.V.R Reddy’s Study Hall - Hyderabad</title>
        <meta name="title" content="Contact Us | DR S.V.R Reddy’s Study Hall - Hyderabad" />
        <meta name="description" content="Get in touch with DR S.V.R Reddy’s Study Hall located in Srinagar Colony, Hyderabad. Reach us via phone or email, or visit us using the embedded Google Map." />
        <meta name="keywords" content="DR S.V.R Reddy, Study Hall Hyderabad, Contact, Srinagar Colony, Education, Coaching Center, Hyderabad" />
        <meta name="author" content="DR S.V.R Reddy’s Study Hall" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="robots" content="index, follow" />
      </Helmet>


         <header className="bg-orange-300 mt-8 px-4 py-2 flex justify-between items-center h-14 overflow-visible ext-blue-400 ">
         <img src={Logo} alt="DR S.V.R Reddy’s Study Hall Logo" className="w-35 h-35 mt-5" />
           <nav>
             <ul className="flex space-x-4">
               <li><Link to="/" className="hover:text-blue-600 hover:underline text-black text-xl font-semibold ">Home</Link></li>
               <li><Link to="/about" className="hover:text-blue-600 hover:underline text-black text-xl font-semibold">About Us</Link></li>
             </ul>
           </nav>
         </header>
        <div className="max-w-7xl mx-auto px-4">
          <h1 className="text-3xl font-bold text-orange-400 mt-6">Contact Us</h1>
          <div className="flex flex-col md:flex-row gap-8">
            {/* Address Section */}
            <div className="md:w-1/2 mt-4">
            <div className="bg-white rounded-xl shadow-md transition duration-300 p-6 hover:shadow-[0_0_20px_4px_rgba(255,215,0,0.7)]">
    <h2 className="text-2xl font-semibold text-yellow-500 flex items-center mb-4">
      <FaMapMarkerAlt className="mr-2" /> Our Address
    </h2>
    <p className="text-lg text-gray-800">
      DR S.V.R Reddy’s Learning Hub<br />
      Srinagar Colony<br />
      Hyderabad, Telangana 500073<br />
      India
    </p>
    <p className="text-lg text-gray-800 mt-4">
      <strong>Phone:</strong> 096521 38998, 040-23740655<br />
      <strong>Email:</strong> contact@svrreddystudyhall.com
    </p>
  </div>
</div>
            {/* Map Section */}
            <div className="md:w-1/2 mb-9">
              <div className="bg-blue-100 rounded-lg p-4 shadow-lg">
                <iframe 
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6993.479186998527!2d78.43566413240575!3d17.43003568201482!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb90d279b172e9%3A0x7a6546d20d67e84!2sDr%20SVR%20Reddy's%20Learning%20Hub!5e0!3m2!1sen!2sin!4v1746464490224!5m2!1sen!2sin" 
                  width="100%" 
                  height="400" 
                  style={{border:0}} 
                  allowFullScreen="" 
                  loading="lazy" 
                  referrerPolicy="no-referrer-when-downgrade"
                  className="w-full rounded-lg"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
         <Footer />
      </div>
     
     
    );
  }
  
  export default Contact;