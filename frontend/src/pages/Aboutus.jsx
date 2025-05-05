//    // src/components/AboutUs.jsx
//    import React from 'react';
//    import { FaPhoneAlt, FaMapMarkerAlt, FaFacebook, FaLinkedin, FaInstagram, FaYoutube } from 'react-icons/fa';
//    import Footer from '../components/Footer';
//    const AboutUs = () => {
//      return (
//        <div className="px-8 py-12">
//          <h1 className="text-3xl font-bold text-orange-600 mb-4">About Us</h1>
//          <p className="text-gray-700 mb-4">
//            At <span className="text-blue-800 font-bold">DR S.V.R. Reddy’s Study Hall</span>, we are committed to creating a modern, student-first environment where learning thrives.
//          </p>
//          <p className="text-gray-700 mb-4">
//            Located in the heart of the city, our centre sits in a quiet and peaceful residential area—free from noise pollution yet conveniently surrounded by essential shops and services. Our facility is fully air-conditioned, providing a comfortable atmosphere year-round, and includes a unique roof terrace study space where students can focus in a calm, open-air setting.
//          </p>
//          <p className="text-gray-700 mb-4">
//            We offer individual, personalised classes to ensure every student receives the attention they need. With a 24×7 open campus, on-site canteen, secure two-wheeler parking, and round-the-clock security with CCTV surveillance, we aim to make learning accessible, safe, and stress-free for all.
//          </p>
//          <p className="text-gray-700 mb-4">
//            Our mission is to empower students through structured guidance, a nurturing environment, and modern teaching methods that foster academic excellence and personal growth.
//          </p>
//          <div className="flex justify-between mt-8">
//            <div className="border-t-2 border-blue-500 pt-4">
//              <h3 className="text-lg font-semibold text-yellow-500 flex items-center">
//                <FaPhoneAlt className="mr-2" /> Contact Us
//              </h3>
//              <p className="text-gray-700">Phone: 096521 38998</p>
//            </div>
//            <div className="border-t-2 border-blue-500 pt-4">
//              <h3 className="text-lg font-semibold text-yellow-500 flex items-center">
//                <FaMapMarkerAlt className="mr-2" /> Address
//              </h3>
//              <p className="text-gray-700">
//                Plot no 83, 8-3-1048/A, Srinagar Colony Main Rd, Sagar Society, Sri Nagar Colony, Venkateshwara Hills, Banjara Hills, Hyderabad, Telangana 500073
//              </p>
//            </div>
//          </div>
//           <Footer />
//        </div>
//      );
//    };

//    export default AboutUs;

   // src/components/AboutUs.jsx
   import React from 'react';
   import { FaPhoneAlt, FaMapMarkerAlt } from 'react-icons/fa';
   import { Link } from 'react-router-dom';
   import Footer from '../components/Footer';

   const AboutUs = () => {
     return (
       <div className="bg-white">
         <header className="bg-orange-300 mt-8 p-4 flex justify-between items-center">
           <h1 className="text-lg font-bold">About</h1>
           <nav>
             <ul className="flex space-x-4">
               <li><Link to="/" className="text-black text-xl font-semibold">Home</Link></li>
               <li><Link to="/contact" className="text-black text-xl font-semibold">Contact Us</Link></li>
             </ul>
           </nav>
         </header>
         <div className="flex flex-col md:flex-row p-8">
           <div className="md:w-2/3">
             <h1 className="text-3xl font-bold text-orange-400 mb-4">About Us</h1>
             <p className="text-blue-700 mb-4 text-xl text-justify ">
               At <span className="text-yellow-500 font-bold">DR S.V.R. Reddy’s Study Hall</span>, we are committed to creating a modern, student-first environment where learning thrives.
             </p>
             <p className="text-blue-700 mb-4 text-xl text-justify">
               Located in the heart of the city, our centre sits in a quiet and peaceful residential area—free from noise pollution yet conveniently surrounded by essential shops and services. Our facility is fully air-conditioned, providing a comfortable atmosphere year-round, and includes a unique roof terrace study space where students can focus in a calm, open-air setting.
             </p>
             <p className="text-blue-700 mb-4 text-xl text-justify">
               We offer individual, personalised classes to ensure every student receives the attention they need. With a 24×7 open campus, on-site canteen, secure two-wheeler parking, and round-the-clock security with CCTV surveillance, we aim to make learning accessible, safe, and stress-free for all.
             </p>
             <p className="text-blue-700 mb-4 text-xl text-justify">
               Our mission is to empower students through structured guidance, a nurturing environment, and modern teaching methods that foster academic excellence and personal growth.
             </p>
           </div>
           <div className="md:w-1/3 flex justify-center items-center">
             <img src="https://media.istockphoto.com/id/1389516990/vector/a-young-man-thinking-concept-hand-drawn-doodle-design.jpg?s=612x612&w=0&k=20&c=_xWc4HF1nnrGzJvvi_iZU_yMjW5efTuSnID8NtdGAu4=" alt="About Us" className="w-90 h-100" />
           </div>
         </div>
         {/* <div className="flex justify-between p-8 border-t-2 border-blue-500"> */}
         <div>
         <div className="flex mb-4 justify-between  p-8 ">
        <div className="w-1/2 h-1 bg-yellow-400"></div> {/* Yellow half */}
        <div className="w-1/2 h-1 bg-blue-400"></div>
        </div>
        <div className="flex justify-between px-50 mb-10">
           <div>
             <h3 className="text-2xl font-semibold text-yellow-500 flex items-center ">
               <FaPhoneAlt className="mr-2" /> Contact Us
             </h3>
             <p className="text-gray-700 text-xl font-bold">Phone: 096521 38998</p>
           </div>
           <div>
             <h3 className="text-2xl font-semibold text-yellow-500 flex items-center">
               <FaMapMarkerAlt className="mr-2" /> Address
             </h3>
             <p className="text-gray-700 text-xl font-bold">
               Plot no 83, 8-3-1048/A, Srinagar Colony Main Rd, <br />
               Sagar Society, Sri Nagar Colony, <br />
                Venkateshwara Hills, Banjara Hills, <br />
               Hyderabad, Telangana 500073
             </p>
           </div>
         </div>
         </div>
         <Footer />
       </div>
     );
   };

   export default AboutUs;
   