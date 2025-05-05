// // src/components/ValuesSection.jsx
// import React from 'react';

// const ValuesSection = () => {
//   return (
//     <section className="py-9 bg-white px-4 md:px-12">
//       <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
//         <div>
//           <h2 className="text-3xl font-bold text-blue-800 mb-4">Values</h2>
//           <div className="mb-6">
//             <h3 className="text-xl font-semibold text-orange-600">Our Vision</h3>
//             <p className="mt-2 text-gray-700">
//               To be the most trusted learning partner for students in our community.
//             </p>
//           </div>
//           <div className="mb-6">
//             <h3 className="text-xl font-semibold text-orange-600">Our Mission</h3>
//             <p className="mt-2 text-gray-700">
//               To provide high-quality, accessible, and personalized education that empowers students to reach their full potential.
//             </p>
//           </div>
//           <div>
//             <h3 className="text-xl font-semibold text-orange-600">© Dr. S.V.R. Reddy's Learning Hub</h3>
//             <p className="mt-2 text-gray-700">
//               We believe in unlocking every student's potential. Whether you're preparing for school exams, competitive tests, or seeking personalized academic guidance, we provide expert mentorship, structured programs, and a supportive learning environment.
//             </p>
//           </div>
//         </div>
//         <div>
//           <img src="https://res.cloudinary.com/dtgjhc9za/image/upload/v1746216766/ACS_5056_auogih.webp" alt="Building" className="w-full h-auto rounded-lg" />
//         </div>
//       </div>
//     </section>
//   );
// };

// export default ValuesSection;

// import React from 'react';

// const ValuesSection = () => {
//   return (
//     <div>
//      <style>
//         {`
//           @keyframes fadeInDown {
//             0% {
//               opacity: 0;
//               transform: translateY(-20px);
//             }
//             100% {
//               opacity: 1;
//               transform: translateY(0);
//             }
//           }

//           @keyframes fadeInLeft {
//             0% {
//               opacity: 0;
//               transform: translateX(-20px);
//             }
//             100% {
//               opacity: 1;
//               transform: translateX(0);
//             }
//           }

//           @keyframes revolveLine {
//             0% {
//               top: -2px;
//               left: -2px;
//               transform: rotate(0deg);
//             }
//             24% {
//               top: -2px;
//               left: calc(100% - 60px);
//               transform: rotate(0deg);
//             }
//             25% {
//               top: -2px;
//               left: calc(100% + 2px);
//               transform: rotate(90deg);
//             }
//             49% {
//               top: calc(100% - 4px);
//               left: calc(100% + 2px);
//               transform: rotate(90deg);
//             }
//             50% {
//               top: calc(100% - 4px);
//               left: calc(100% - 60px);
//               transform: rotate(180deg);
//             }
//             74% {
//               top: calc(100% - 4px);
//               left: -2px;
//               transform: rotate(180deg);
//             }
//             75% {
//               top: calc(100% - 4px);
//               left: -6px;
//               transform: rotate(270deg);
//             }
//             99% {
//               top: -2px;
//               left: -6px;
//               transform: rotate(270deg);
//             }
//             100% {
//               top: -2px;
//               left: -2px;
//               transform: rotate(360deg);
//             }
//           }

//           .animate-fade-in-down {
//             animation: fadeInDown 1s ease-out;
//           }

//           .animate-fade-in-left {
//             animation: fadeInLeft 1s ease-out;
//           }

//           .delay-200 {
//             animation-delay: 200ms;
//           }

//           .delay-400 {
//             animation-delay: 400ms;
//           }

//           .delay-600 {
//             animation-delay: 600ms;
//           }

//           .image-container {
//             position: relative;
//             display: inline-block;
//           }

//           .image-container::before {
//             content: '';
//             position: absolute;
//             width: 60px;
//             height: 4px;
//             background: #eab308; /* Tailwind's yellow-500 */
//             border-radius: 2px;
//             box-shadow: 0 0 10px rgba(234, 179, 8, 0.8), 0 0 20px rgba(234, 179, 8, 0.5);
//             animation: revolveLine 4s linear infinite;
//           }
//         `}
//       </style>
//       <section className="py-9 bg-white px-4 md:px-12">
//         <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
//           <div>
//             <h2 className="text-3xl font-bold text-blue-800 mb-4 animate-fade-in-down">
//               Values
//             </h2>
//             <div className="mb-6 animate-fade-in-left delay-200">
//               <h3 className="text-xl font-semibold text-orange-600 transition-all duration-300 ease-in-out hover:scale-105 hover:translate-x-2 hover:text-orange-500">
//                 Our Vision
//               </h3>
//               <p className="mt-2 text-gray-700">
//                 To be the most trusted learning partner for students in our community.
//               </p>
//             </div>
//             <div className="mb-6 animate-fade-in-left delay-400">
//               <h3 className="text-xl font-semibold text-orange-600 transition-all duration-300 ease-in-out hover:scale-105 hover:translate-x-2 hover:text-orange-500">
//                 Our Mission
//               </h3>
//               <p className="mt-2 text-gray-700">
//                 To provide high-quality, accessible, and personalized education that empowers students to reach their full potential.
//               </p>
//             </div>
//             <div className="animate-fade-in-left delay-600">
//               <h3 className="text-xl font-semibold text-orange-600 transition-all duration-300 ease-in-out hover:scale-105 hover:translate-x-2 hover:text-orange-500">
//                 © Dr. S.V.R. Reddy's Learning Hub
//               </h3>
//               <p className="mt-2 text-gray-700">
//                 We believe in unlocking every student's potential. Whether you're preparing for school exams, competitive tests, or seeking personalized academic guidance, we provide expert mentorship, structured programs, and a supportive learning environment.
//               </p>
//             </div>
//           </div>
//           <div className="image-container">
//             <img 
//               src="https://res.cloudinary.com/dtgjhc9za/image/upload/v1746216766/ACS_5056_auogih.webp" 
//               alt="Building" 
//               className="w-full h-auto rounded-lg transition-all duration-500 ease-in-out hover:shadow-xl" 
//             />
//           </div>
//         </div>
//       </section>
//     </div>
//   );
// };

// export default ValuesSection;


import React from 'react';

const ValuesSection = () => {
  return (
    <section className="py-7 bg-gradient-to-br from-gray-100 px-4 md:px-12">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        <div>
          <div className="flex items-center mb-4">
          <h2 className="text-3xl font-bold text-indigo-900 mb-2 text-center md:text-left">
            Values
          </h2>
          <div className="w-110 h-5 bg-orange-400 ml-4"></div> {/* Yellow line beside heading */}
          </div>
          <div className="mb-6 group animate-slide-in-left delay-200 bg-white p-5 rounded-lg  w-170 shadow-md hover:shadow-xl hover:bg-amber-50 transition-all duration-500 ease-out">
            <h3 className="text-xl font-semibold text-amber-700 group-hover:text-amber-600 transition-colors duration-300 hover:scale-105 hover:translate-x-2">
              Our Vision
            </h3>
            <p className="mt-2 text-gray-700">
              To be the most trusted learning partner for students in our community.
            </p>
          </div>
          <div className="mb-6 group animate-slide-in-left delay-400 bg-white p-5 w-170 rounded-lg shadow-md hover:shadow-xl hover:bg-amber-50 transition-all duration-500 ease-out">
            <h3 className="text-xl font-semibold text-amber-700 group-hover:text-amber-600 transition-colors duration-300 hover:scale-105 hover:translate-x-2">
              Our Mission
            </h3>
            <p className="mt-2 text-gray-700">
              To provide high-quality, accessible, and personalized education that empowers students to reach their full potential.
            </p>
          </div>
          <div className="group animate-slide-in-left delay-600 bg-white p-5 rounded-lg  w-170 shadow-md hover:shadow-xl hover:bg-amber-50 transition-all duration-500 ease-out">
            <h3 className="text-xl font-semibold text-amber-700 group-hover:text-amber-600 transition-colors duration-300 hover:scale-105 hover:translate-x-2">
              © Dr. S.V.R. Reddy's Learning Hub
            </h3>
            <p className="mt-2 text-gray-700">
              We believe in unlocking every student's potential. Whether you're preparing for school exams, competitive tests, or seeking personalized academic guidance, we provide expert mentorship, structured programs, and a supportive learning environment.
            </p>
          </div>
        </div>
        <div className="relative group animate-slide-in-right flex justify-center md:justify-end">
          <div className="absolute inset-0 bg-gradient-to-r  to-amber-300/20 rounded-2xl transform scale-95 group-hover:scale-100 transition-transform duration-700 z-0"></div>
          <div className="relative overflow-hidden rounded-2xl shadow-xl group-hover:shadow-2xl transition-shadow duration-500 max-w-lg w-full">
            <img
              src="https://res.cloudinary.com/dtgjhc9za/image/upload/v1746216766/ACS_5056_auogih.webp"
              alt="Building"
              className="w-full h-120 object-cover transform group-hover:scale-105 transition-transform duration-700"
            />
           
          </div>
        </div>
      </div>
      <style>
        {`
        

          .animate-slide-in-left {
            animation: slideInLeft 0.8s ease-out forwards;
          }

          .animate-slide-in-right {
            animation: slideInRight 0.8s ease-out forwards;
          }

          .delay-200 {
            animation-delay: 200ms;
          }

          .delay-400 {
            animation-delay: 400ms;
          }

          .delay-600 {
            animation-delay: 400ms;
          }

          @keyframes slideInTop {
            0% {
              opacity: 0;
              transform: translateY(-30px);
            }
            100% {
              opacity: 1;
              transform: translateY(0);
            }
          }

          @keyframes slideInLeft {
            0% {
              opacity: 0;
              transform: translateX(-30px);
            }
            100% {
              opacity: 1;
              transform: translateX(0);
            }
          }

          @keyframes slideInRight {
            0% {
              opacity: 0;
              transform: translateX(30px);
            }
            100% {
              opacity: 1;
              transform: translateX(0);
            }
          }
        `}
      </style>
    </section>
  );
};

export default ValuesSection;