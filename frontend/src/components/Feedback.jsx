
import React from 'react';
import { FaMapMarkerAlt, FaPhoneAlt, FaFacebook, FaLinkedin, FaInstagram, FaYoutube, FaHome, FaInfoCircle} from 'react-icons/fa';

const FeedbackSection = () => {
  return (
    <section className="w-full h-auto py-7 px-4 sm:px-6 md:px-10 lg:px-16 xl:px-15 bg-gradient-to-br from-gray-100 overflow-x-hidden">
      <div className="flex items-center mb-4 ">
        <h2 className="text-3xl  font-bold text-blue-800">Feedback</h2>
        <div className="w-110 h-5 bg-yellow-400 ml-4"></div> {/* Yellow line */}
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
        <div className="p-4 border border-gray-200 rounded-lg shadow">
          <p className="text-gray-700 font-bold text-xl">"A great place to focus on something which makes us"</p>
          <div className="flex items-center mt-4">
            <img src="https://res.cloudinary.com/dwliqhmpe/image/upload/v1746487888/feedback3_ie3q0c.avif" alt="Mandeep Ram" className="w-11 h-11 rounded-full mr-3" />
            <div>
              <p className="font-semibold">Mandeep Ram</p>
              <p className="text-sm text-gray-500">NIT Hyd</p>
            </div>
          </div>
        </div>
        <div className="p-4 border border-gray-200 rounded-lg shadow">
          <p className="text-gray-700 font-bold text-xl">"Lovely area in the Hyderabad to study alone"</p>
          <div className="flex items-center mt-4">
            <img src="https://res.cloudinary.com/dwliqhmpe/image/upload/v1746487889/feedback2_xcssza.png" alt="Akshara" className="w-10 h-10 rounded-full mr-3" />
            <div>
              <p className="font-semibold">Akshara</p>
              <p className="text-sm text-gray-500">JNTU</p>
            </div>
          </div>
        </div>
        <div className="p-4 border border-gray-200 rounded-lg shadow">
          <p className="text-gray-700 font-bold text-xl">"I like this place the most to focus on my studies"</p>
          <div className="flex items-center mt-4">
            <img src="https://res.cloudinary.com/dwliqhmpe/image/upload/v1746487888/feedback1_ypvcsc.png" alt="Shreya Agarwal" className="w-10 h-10 rounded-full mr-3" />
            <div>
              <p className="font-semibold">Shreya Agarwal</p>
              <p className="text-sm text-gray-500">Sr Developer</p>
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
              <h3 className="text-xl font-semibold text-yellow-500 flex items-center">Address    
                <FaMapMarkerAlt className="text-yellow-500 mt-1" />
              </h3>
              <p className="text-gray-700">
                Plot no 83, 8-3-1048/A, Srinagar Colony Main Rd, Sagar Society, Sri Nagar Colony, Venkateshwara Hills, Banjara Hills, Hyderabad, Telangana 500073
              </p>
            </div>
          </div>
        </div>
        <div className="border-l-2 border-blue-500   pl-8"> {/* Increased width and decreased height */}
          <div className="mt-0">
  <h3 className="text-xl font-semibold text-yellow-500 flex items-center">
    Contact Us <FaPhoneAlt className="text-yellow-500 " /> 
  </h3>
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