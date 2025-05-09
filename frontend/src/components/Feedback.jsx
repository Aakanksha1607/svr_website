
import React from 'react';
import { FaMapMarkerAlt, FaPhoneAlt, FaFacebook, FaLinkedin, FaInstagram, FaYoutube, FaHome, FaInfoCircle,FaStar, FaStarHalfAlt, FaRegStar } from 'react-icons/fa';

const FeedbackSection = () => {
  return (
    <section className="w-full h-auto py-7 px-4 sm:px-6 md:px-10 lg:px-16 xl:px-15 bg-gradient-to-br from-gray-100 overflow-x-hidden">
      <div className="flex items-center mb-4 ">
        <h2 className="text-3xl  font-bold text-blue-800">Feedback</h2>
        <div className="w-110 h-5 bg-orange-400 ml-4"></div> {/* Yellow line */}
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
        <div className="p-4 border border-gray-200 rounded-lg shadow">
          <p className="text-gray-700 font-bold text-xl mb-2">" Pretty Clean and hygienic.."</p>
          <p>This is one of it's own kind of Study Hall in hyderabad, From the upper management to the lower management everybody here treats with Respect, 
          Pretty Clean and hygienic. Also has a discussion room at the top. It has been 2 years since joined 
          </p>
          <div className="flex items-center mt-4">
            <img src=" https://img.freepik.com/premium-vector/round-man-character-mockup-icon-flat-color-character-template-jacket-round-icon-man-jacket-dark-hair-vector-icon_774778-2396.jpg" alt="D.Shagun " className="w-11 h-11 rounded-full mr-3 mt-1" />
            <div>
              <p className="font-semibold mt-1">D.Shagun </p>
              <span className="flex  text-yellow-400">
        <FaStar />
        <FaStar />
        <FaStar />
        <FaStar />
        <FaStar />
      </span>
              <p className="text-sm text-gray-500"> UPSC Aspirant</p>
            </div>
          </div>
        </div>
        <div className="p-4 border border-gray-200 rounded-lg shadow">
          <p className="text-gray-700 font-bold text-xl mb-2">"Found a unique way of studies.."</p>
          <p>Space for the study is good. Proud to be part of SVR Reddy's Learning hub. Here at this study hall I have noticed a unique way of studies that 
          Aspirants do. It has been more than 1 year I have joined and able to focus on my self.</p>
          <div className="flex items-center mt-4">
            <img src="https://cdn-icons-png.flaticon.com/256/4140/4140047.png" alt="Dr.Roopa" className="w-10 h-10 rounded-full mr-3 mt-6" />
            <div> 
              <p className="font-semibold mt-6">Dr.Roopa</p>
              <span className="flex text-yellow-400">
        <FaStar />
        <FaStar />
        <FaStar />
        <FaStar />
        <FaStarHalfAlt />
      </span>
              <p className="text-sm text-gray-500 ">NEET Aspirant</p>
            </div>
          </div>
        </div>
        <div className="p-4 border border-gray-200 rounded-lg shadow">
          <p className="text-gray-700 font-bold text-xl mb-2">"Here Learning is like Meditation.."</p>
          <p> I start my day here at 5 Am in the morning. Very calm and composed.Studying in SVR Reddy's learning is like Meditation. More Concentration More Power to Us,
         this gives chill while you study here. This Study hall made me fell in love more with my course.
          </p>
          <div className="flex items-center mt-4">
            <img src="https://res.cloudinary.com/dtgjhc9za/image/upload/v1746740706/fbimg_j2olaf.png" alt="M.Guna Shekar" className="w-10 h-10 rounded-full mr-3 " />
            <div>
              <p className="font-semibold">M.Guna Shekar</p>
              <span className="flex text-yellow-400">
        <FaStar />
        <FaStar />
        <FaStar />
        <FaStar />
        <FaRegStar />
      </span>
              <p className="text-sm text-gray-500">DSC Aspirant</p>
            </div>
          </div>
        </div>
      </div>

      <div className="flex mb-4">
        <div className="w-1/2 h-1 bg-yellow-400"></div> {/* Yellow half */}
        <div className="w-1/2 h-1 bg-blue-400"></div>   {/* Blue half */}
      </div>
      <div className="flex items-center mb-4">
        <h3 className="text-xl font-semibold text-yellow-500 ">Dr. S.V.R. Reddy's Learning Hub</h3>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-left">
        <div>
          <div className="flex items-start ">
            <div >
              <div className="flex items-center space-x-2">
                <FaMapMarkerAlt className="text-yellow-500" />
                <h3 className="text-xl font-semibold text-yellow-500">Address</h3>
              </div>


              <p className="text-gray-700">
                Plot no 83, 8-3-1048/A, Srinagar Colony Main Rd, Sagar Society, Sri Nagar Colony, Venkateshwara Hills, Banjara Hills, Hyderabad, Telangana 500073
              </p>
            </div>
          </div>
        </div>
        <div className="border-l-2 border-blue-500   pl-8"> {/* Increased width and decreased height */}
          <div >
            <div className="flex items-center space-x-2 text-yellow-500">
              <FaPhoneAlt className="text-xl" />
              <h3 className="text-xl font-semibold">Contact Us</h3>
            </div>


            <p className="mt-2 text-gray-700">Phone: 096521 38998<br />040-23740655</p>
          </div>
        </div>
        <div className="border-l-2 border-blue-500 pl-8">
          <h3 className="text-xl font-semibold text-yellow-500">Follow Us</h3>
          <div className="flex space-x-4 mt-2">
            <a href="#"><FaFacebook className="text-blue-600 w-6 h-6" /></a>
            <a href="#"><FaLinkedin className="text-blue-700 w-6 h-6" /></a>
            <a href="#"><FaInstagram className="text-pink-500 w-6 h-6" /></a>
            <a href="#"><FaYoutube className="text-red-600 w-6 h-6" /></a>
          </div>
        </div>
        <div className="border-l-2 border-blue-500 pl-8">
          <h3 className="text-xl font-semibold text-yellow-500">Links</h3>
          <ul className="mt-2 text-blue-700">
            <li className="flex items-center">
              <FaHome className="mr-2 text-blue-500" />
              <a href="#" className="font-semibold">Home</a>
            </li>
            <li className="flex items-center mt-2">
              <FaInfoCircle className="mr-2 text-blue-500" />
              <a href="#" className="font-semibold">About Us</a>
            </li>
            <li className="flex items-center mt-2">
              <FaPhoneAlt className="mr-2 text-blue-500" />
              <a href="#" className="font-semibold">Contact Us</a>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default FeedbackSection;