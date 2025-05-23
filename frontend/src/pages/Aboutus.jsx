
// import React from 'react';
// import { FaPhoneAlt, FaMapMarkerAlt } from 'react-icons/fa';
// import { Link } from 'react-router-dom';
// import Footer from '../components/Footer';
// import Logo from '../assets/logo.svg';
// import { Helmet } from 'react-helmet';

// const AboutUs = () => {
//   return (
//     <div className="bg-white">
//       <Helmet>
//         <title>About Us | DR S.V.R Reddy’s Study Hall</title>
//         <meta
//           name="description"
//           content="Learn about DR S.V.R. Reddy’s Study Hall—a student-first learning center in Hyderabad offering personalized classes, 24x7 access, rooftop study zones, and a peaceful, modern environment."
//         />
//         <meta
//           name="keywords"
//           content="Study Hall, DR S.V.R. Reddy, Education Hyderabad, 24x7 Learning, Rooftop Study, Personalized Classes, Student Center"
//         />
//         <meta name="author" content="DR S.V.R Reddy’s Study Hall" />
//         <meta name="robots" content="index, follow" />
//         <meta name="viewport" content="width=device-width, initial-scale=1.0" />
//         <meta charset="UTF-8" />

//         {/* Open Graph Tags */}
//         <meta property="og:title" content="About Us | DR S.V.R Reddy’s Study Hall" />
//         <meta
//           property="og:description"
//           content="We provide a safe, personalized, and peaceful learning space in the heart of Hyderabad. Discover more about our mission and facilities."
//         />
//         <meta
//           property="og:image"
//           content="https://media.istockphoto.com/id/1389516990/vector/a-young-man-thinking-concept-hand-drawn-doodle-design.jpg?s=612x612&w=0&k=20&c=_xWc4HF1nnrGzJvvi_iZU_yMjW5efTuSnID8NtdGAu4="
//         />
//         <meta property="og:url" content="https://your-website-url.com/about" />
//         <meta property="og:type" content="website" />

//         {/* Twitter Card */}
//         <meta name="twitter:card" content="summary_large_image" />
//         <meta name="twitter:title" content="About Us | DR S.V.R Reddy’s Study Hall" />
//         <meta
//           name="twitter:description"
//           content="Discover DR S.V.R Reddy’s Study Hall, a modern, personalized, and student-friendly learning space in Hyderabad."
//         />
//         <meta
//           name="twitter:image"
//           content="https://media.istockphoto.com/id/1389516990/vector/a-young-man-thinking-concept-hand-drawn-doodle-design.jpg?s=612x612&w=0&k=20&c=_xWc4HF1nnrGzJvvi_iZU_yMjW5efTuSnID8NtdGAu4="
//         />
//       </Helmet>

//    <header className="bg-orange-300 mt-8 px-4 py-2 flex justify-between items-center h-14 overflow-visible">
//   <img src={Logo} alt="DR S.V.R Reddy’s Study Hall Logo" className="w-35 h-35 mt-5" />
//   <nav>
//     <ul className="flex space-x-4">
//         <li><Link to="/" className="text-blue-400 text-xl font-semibold hover:text-blue-600 hover:underline">Home</Link></li>
//       <li><Link to="/contact" className="text-blue-400 text-xl font-semibold hover:text-blue-600 hover:underline">Contact Us</Link></li>
//     </ul>
//   </nav>
// </header>

// <div className="flex flex-col md:flex-row px-4 sm:px-6 md:px-10 lg:px-20 xl:px-32 py-8 gap-8 max-w-screen-xl mx-auto">

//   <div className="w-full md:w-2/3">
//     <h1 className="text-2xl sm:text-3xl font-bold text-orange-400 mb-4">
//       About Us
//     </h1>
//     <p className="text-blue-700 mb-4 text-base sm:text-lg md:text-xl text-left md:text-justify">
//   At <span className="text-yellow-500 font-bold">DR S.V.R. Reddy’s Learning Hub</span>, we are committed to creating a modern, student-first environment where learning thrives.
// </p>

//           <p className="text-blue-700 mb-4 text-base sm:text-lg md:text-xl text-left md:text-justify">
//             Located in the heart of the city, our centre sits in a quiet and peaceful residential area—free from noise pollution yet conveniently surrounded by essential shops and services. Our facility is fully air-conditioned, providing a comfortable atmosphere year-round, and includes a unique roof terrace study space where students can focus in a calm, open-air setting.
//           </p>
//           <p className="text-blue-700 mb-4  text-base sm:text-lg md:text-xl  text-justify">
//             We offer individual, personalised classes to ensure every student receives the attention they need. With a 24×7 open campus, on-site canteen, secure two-wheeler parking, and round-the-clock security with CCTV surveillance, we aim to make learning accessible, safe, and stress-free for all.
//           </p>
//           <p className="text-blue-700 mb-4 text-base sm:text-lg md:text-xl text-left md:text-justify">
//             Our mission is to empower students through structured guidance, a nurturing environment, and modern teaching methods that foster academic excellence and personal growth.
//           </p>
//         </div>
//         <div className="md:w-1/3 flex justify-center items-center">
//           <img src="https://media.istockphoto.com/id/1389516990/vector/a-young-man-thinking-concept-hand-drawn-doodle-design.jpg?s=612x612&w=0&k=20&c=_xWc4HF1nnrGzJvvi_iZU_yMjW5efTuSnID8NtdGAu4=" alt="About Us" className="w-full max-w-sm h-auto object-contain"/>
//         </div>
//       </div>
//       <div>
//       <div className="flex flex-col md:flex-row px-4 sm:px-6 md:px-10 lg:px-20 xl:px-32 py-8  max-w-screen-xl mx-auto">
//   <div className="w-full md:w-1/2 h-1 bg-yellow-400"></div>
//   <div className="w-full md:w-1/2 h-1 bg-blue-400"></div>
// </div>

// <div className="flex flex-col md:flex-row justify-between items-start gap-8 px-4 sm:px-6 md:px-10 lg:px-20 xl:px-32 mb-10 max-w-screen-xl mx-auto">
//   <div className="w-full md:w-1/2">
//     <h3 className="text-2xl font-semibold text-yellow-500 flex items-center mb-2">
//       <FaPhoneAlt className="mr-2" /> Contact Us
//     </h3>
//     <p className="text-gray-700 text-lg font-bold">Phone: 096521 38998</p>
//   </div>

//   <div className="w-full md:w-1/2">
//     <h3 className="text-2xl font-semibold text-yellow-500 flex items-center mb-2">
//       <FaMapMarkerAlt className="mr-2" /> Address
//     </h3>
//     <p className="text-gray-700 text-lg font-bold leading-relaxed">
//       Plot no 83, 8-3-1048/A, Srinagar Colony Main Rd, <br />
//       Sagar Society, Sri Nagar Colony, <br />
//       Venkateshwara Hills, Banjara Hills, <br />
//       Hyderabad, Telangana 500073
//     </p>
//   </div>
// </div>

//       </div>
//       <Footer />
//     </div>
//   );
// };

// export default AboutUs;



import React from 'react';
import { FaPhoneAlt, FaMapMarkerAlt } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import Footer from '../components/Footer';
import Logo from '../assets/logo.svg';
import { Helmet } from 'react-helmet';

const AboutUs = () => {
  return (
    <div className="bg-white">
      <Helmet>
        <title>About Us | DR S.V.R Reddy’s Learning Hub</title>
        <meta
          name="description"
          content="Learn about DR S.V.R. Reddy’s Study Hall—a student-first learning center in Hyderabad offering personalized classes, 24x7 access, rooftop study zones, and a peaceful, modern environment."
        />
        <meta
          name="keywords"
          content="Study Hall, DR S.V.R. Reddy, Education Hyderabad, 24x7 Learning, Rooftop Study, Personalized Classes, Student Center"
        />
        <meta name="author" content="DR S.V.R Reddy’s Study Hall" />
        <meta name="robots" content="index, follow" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta charset="UTF-8" />

        {/* Open Graph Tags */}
        <meta property="og:title" content="About Us | DR S.V.R Reddy’s Study Hall" />
        <meta
          property="og:description"
          content="We provide a safe, personalized, and peaceful learning space in the heart of Hyderabad. Discover more about our mission and facilities."
        />
        <meta
          property="og:image"
          content="https://media.istockphoto.com/id/1389516990/vector/a-young-man-thinking-concept-hand-drawn-doodle-design.jpg?s=612x612&w=0&k=20&c=_xWc4HF1nnrGzJvvi_iZU_yMjW5efTuSnID8NtdGAu4="
        />
        <meta property="og:url" content="https://your-website-url.com/about" />
        <meta property="og:type" content="website" />

        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="About Us | DR S.V.R Reddy’s Learning Hub" />
        <meta
          name="twitter:description"
          content="Discover DR S.V.R Reddy’s Study Hall, a modern, personalized, and student-friendly learning space in Hyderabad."
        />
        <meta
          name="twitter:image"
          content="https://media.istockphoto.com/id/1389516990/vector/a-young-man-thinking-concept-hand-drawn-doodle-design.jpg?s=612x612&w=0&k=20&c=_xWc4HF1nnrGzJvvi_iZU_yMjW5efTuSnID8NtdGAu4="
        />
      </Helmet>

  
   <header className="bg-orange-300 mt-8 px-4 py-2 flex justify-between items-center h-14 overflow-visible ext-blue-400">
  <img src={Logo} alt="DR S.V.R Reddy’s Study Hall Logo" className="w-35 h-35 mt-5" />
  <nav>
    <ul className="flex space-x-4">
      <li><Link to="/" className="hover:text-blue-600 hover:underline text-black text-xl font-semibold">Home</Link></li>
      <li><Link to="/contact" className="hover:text-blue-600 hover:underline text-black text-xl font-semibold">Contact Us</Link></li>
    </ul>
  </nav>
</header>

<div className="flex flex-col md:flex-row sm:px-6 md:px-10 lg:px-10 xl:px-10 py-8 gap-8 max-w-screen-xl mx-auto">

  <div className="w-full md:w-2/3 px-6 ">
    <h1 className="text-2xl sm:text-lg lg:text-3xl font-bold text-orange-400 mb-4">
      About Us
    </h1>
    <p className="text-blue-700 mb-4 text-base sm:text-md md:text-lg text-left md:text-justify">
  At <span className="text-yellow-500 font-bold">DR S.V.R. Reddy’s Learning Hub</span>, we are committed to creating a modern, student-first environment where learning thrives.
</p>

          <p className="text-blue-700 mb-4 text-base sm:text-md md:text-lg text-left md:text-justify">
            Located in the heart of the city, our centre sits in a quiet and peaceful residential area—free from noise pollution yet conveniently surrounded by essential shops and services. Our facility is fully air-conditioned, providing a comfortable atmosphere year-round, and includes a unique roof terrace study space where students can focus in a calm, open-air setting.
          </p>
          <p className="text-blue-700 mb-4  text-base sm:text-md md:text-lg  text-justify">
            We offer individual, personalised classes to ensure every student receives the attention they need. With a 24×7 open campus, on-site canteen, secure two-wheeler parking, and round-the-clock security with CCTV surveillance, we aim to make learning accessible, safe, and stress-free for all.
          </p>
          <p className="text-blue-700 mb-4 text-base sm:text-md md:text-lg text-left md:text-justify">
            Our mission is to empower students through structured guidance, a nurturing environment, and modern teaching methods that foster academic excellence and personal growth.
          </p>

  

        </div>
        
        <div className="md:w-1/3 flex justify-center items-center">
          <img src="https://media.istockphoto.com/id/1389516990/vector/a-young-man-thinking-concept-hand-drawn-doodle-design.jpg?s=612x612&w=0&k=20&c=_xWc4HF1nnrGzJvvi_iZU_yMjW5efTuSnID8NtdGAu4=" alt="About Us" className="w-full max-w-sm h-auto object-contain text-orange-500"/>
        </div>
      </div>
      <div>

{/* Founders & Director Cards Section */}
<div className="mt-3  ">
  <div className="flex flex-col items-start gap-10 md:flex-row sm:px-6 md:px-10 lg:px-10 xl:px-10">
    
    {/* Cards Row */}
    <div className="flex flex-col md:flex-row md:space-x-6 w-full justify-center items-stretch sm:px-6  ">
      
      {/* Founder Card */}
      <div className="flex-1 bg-white rounded-xl shadow-md hover:shadow-xl transform hover:scale-105 transition duration-300 border-l-4 border-yellow-400 p-5">
        <h3 className="text-2xl font-bold text-yellow-500 mb-2">Founders</h3>
        <p className="text-blue-800 font-semibold mb-1">Dr. S. Nagamani</p>
        <p className="text-blue-800 font-semibold mb-3">Dr. J. Mayurnath Reddy</p>
        <p className="text-gray-900 text-md ">
          A gynecologist & professor, Madam observed students struggling without a study environment.
          Inspired by this, we started with 2 halls in 2015—now grown to 6.
        </p>
      </div>

      {/* Managing Director Card */}
      <div className="flex-1 bg-white rounded-xl shadow-md hover:shadow-xl transform hover:scale-105 transition duration-300 border-l-4 border-blue-400 p-5">
        <h3 className="text-2xl font-bold text-blue-500 mb-2">Managing Director</h3>
        <p className="text-blue-800 font-semibold mb-3">K. Chinna Peeraiah, M.Tech</p>
        <p className="text-gray-900 text-md ">
          Serving as MD since 2015, dedicated to offering a focused and peaceful learning atmosphere
          for all aspirants.
        </p>
      </div>

      {/* Motto / Vision Card
      <div className="flex-1 bg-white rounded-xl shadow-md hover:shadow-xl transform hover:scale-105 transition duration-300 border-l-4 border-orange-400 p-5">
        <h3 className="text-xl font-bold text-orange-500 mb-2">Our Motto</h3>
        <p className="text-gray-700 italic text-md">
          “To provide the best study facilities to those who are truly committed to fulfilling their dreams.”
        </p>
      </div> */}

    </div>
  </div>
</div>




      <div className="flex flex-col md:flex-row px-4 sm:px-6 md:px-10 lg:px-20 xl:px-32 py-8  max-w-screen-xl mx-auto">
  <div className="w-full md:w-1/2 h-1 bg-yellow-400"></div>
  <div className="w-full md:w-1/2 h-1 bg-blue-400"></div>
</div>

<div className="flex flex-col md:flex-row justify-between items-start gap-8 px-4 sm:px-6 md:px-10 lg:px-20 xl:px-32 mb-10 max-w-screen-xl mx-auto">
  <div className="w-full md:w-1/2">
    <h3 className="text-2xl font-semibold text-yellow-500 flex items-center mb-2">
      <FaPhoneAlt className="mr-2" /> Contact Us
    </h3>
    <p className="text-gray-700 text-md font-bold">Phone: 096521 38998</p>
  </div>

  <div className="w-full md:w-1/2">
    <h3 className="text-2xl font-semibold text-yellow-500 flex items-center mb-2">
      <FaMapMarkerAlt className="mr-2" /> Address
    </h3>
    <p className="text-gray-700 text-md font-bold leading-relaxed">
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