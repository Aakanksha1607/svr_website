// // src/components/StrengthsSection.jsx
// import React from 'react';

// const StrengthsSection = () => {
//   return (
//     <section className="py-9 bg-white px-4 md:px-12">
//       <div className="mb-8 flex items-center">
//         <h2 className="text-3xl font-bold text-blue-800">Our Strengths</h2>
//         <div className="w-110 h-5 bg-blue-400 mt-2"></div> {/* Blue line */}
//       </div>
//       <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
//         <div className="text-left">
//           <img src="https://bsmedia.business-standard.com/_media/bs/img/article/2021-12/03/full/1638506038-4213.jpg" alt="Students Life Style" className="w-full h-90 object-cover rounded-md mb-4" />
//           <h3 className="text-xl font-semibold text-orange-600">Students Life Style</h3>
//           <p className="mt-2 text-gray-700">
//             Dedication, discipline, integrity, and student-centric learning.
//           </p>
//         </div>
//         <div className="text-left">
//           <img src="https://img.freepik.com/free-vector/24-hours-open-service-everyday-banner-with-clock-sign_1017-52830.jpg?t=st=1746139716~exp=1746143316~hmac=ea6974d12e1bc4dc00b091f10204482253a2542fdfc86ef46ffe88bee8c9e603&w=996" alt="24 Hours Open" className="w-full h-90 object-cover rounded-lg mb-4" />
//           <h3 className="text-xl font-semibold text-orange-600">We are Open</h3>
//           <p className="mt-2 text-gray-700">
//             With a 24×7 open campus.
//           </p>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default StrengthsSection;

import React from 'react';

const StrengthsSection = () => {
  return (
    <section className="py-7 bg-gradient-to-br from-gray-100 to-blue-50 px-6 sm:px-10 md:px-12 ">
      <div className="max-w-7xl mx-auto">

        <div className="flex items-center mb-4">
          <h2 className="text-3xl font-bold text-indigo-900 mb-2 text-center md:text-left">
            Strengths
          </h2>
          <div className="w-110 h-5 bg-orange-400 ml-4"></div> {/* Yellow line beside heading */}
          </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 lg:gap-8">
          <div className="group animate-slide-in-left transition-all duration-500 ease-out bg-white p-6 rounded-xl shadow-md hover:shadow-xl hover:bg-amber-50 flex flex-col">
            <div className="relative overflow-hidden rounded-lg mb-4">
              <img
                src="https://bsmedia.business-standard.com/_media/bs/img/article/2021-12/03/full/1638506038-4213.jpg"
                alt="Students Life Style"
                className="w-full h-64 object-cover transform group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-indigo-900/10 group-hover:bg-indigo-900/5 transition-all duration-500"></div>
            </div>
            <h3 className="text-xl font-semibold text-amber-700 group-hover:text-amber-600 transition-colors duration-300">
              Students Life Style
            </h3>
            <p className="mt-2 text-gray-700 flex-grow">
              Dedication, discipline, integrity, and student-centric learning.
            </p>
          </div>
          <div className="group animate-slide-in-right transition-all duration-500 ease-out bg-white p-6 rounded-xl shadow-md hover:shadow-xl hover:bg-amber-50 flex flex-col delay-200">
            <div className="relative overflow-hidden rounded-lg mb-4">
              <img
                src="https://img.freepik.com/free-vector/24-hours-open-service-everyday-banner-with-clock-sign_1017-52830.jpg?t=st=1746139716~exp=1746143316~hmac=ea6974d12e1bc4dc00b091f10204482253a2542fdfc86ef46ffe88bee8c9e603&w=996"
                alt="24 Hours Open"
                className="w-full h-64 object-cover transform group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-indigo-900/10 group-hover:bg-indigo-900/5 transition-all duration-500"></div>
            </div>
            <h3 className="text-xl font-semibold text-amber-700 group-hover:text-amber-600 transition-colors duration-300">
              We are Open
            </h3>
            <p className="mt-2 text-gray-700 flex-grow">
              With a 24×7 open campus.
            </p>
          </div>
        </div>
      </div>
      <style>
        {`
          .animate-slide-in-top {
            animation: slideInTop 0.8s ease-out forwards;
          }

          .animate-slide-in-left {
            animation: slideInLeft 0.8s ease-out forwards;
          }

          .animate-slide-in-right {
            animation: slideInRight 0.8s ease-out forwards;
          }

          .delay-200 {
            animation-delay: 200ms;
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

export default StrengthsSection;