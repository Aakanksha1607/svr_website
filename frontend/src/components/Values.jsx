
import React from 'react';

const ValuesSection = () => {
  return (
    <section className="w-full h-auto py-7 px-4 sm:px-6 md:px-10 lg:px-16 xl:px-15 bg-gradient-to-br from-gray-100 overflow-x-hidden">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        <div>
          <div className="flex items-center mb-8 px-4 ">
            <h2 className="text-3xl font-bold text-indigo-900 mb-2 text-center md:text-left">
              Values
            </h2>
            <div className="h-5 w-110 bg-orange-400 ml-4"></div>
          </div>

          <div className="mb-6 group animate-slide-in-left delay-200 bg-white p-5 rounded-lg shadow-md hover:shadow-xl hover:bg-amber-50 transition-all duration-500 ease-out">
            <h3 className="text-xl font-semibold text-orange-500 group-hover:text-amber-600 transition-colors duration-300 hover:scale-105 hover:translate-x-2">
              Our Motto
            </h3>
            <p className="mt-2 text-gray-700 ">
             To provide the best study facilities to study those who really want to full fill their dreams, to the Aspirants who are willing to serve the nation as a doctor,as an engineer ,as  a part of a government servant.
            </p>
          </div>

          <div className="mb-6 group animate-slide-in-left delay-400 bg-white p-5 rounded-lg shadow-md hover:shadow-xl hover:bg-amber-50 transition-all duration-500 ease-out">
            <h3 className="text-xl font-semibold text-orange-500 group-hover:text-amber-600 transition-colors duration-300 hover:scale-105 hover:translate-x-2">
              Our Mission
            </h3>
            <p className="mt-2 text-gray-700">
              To provide high-quality, accessible, and personalized education that empowers students to reach their full potential.
            </p>
          </div>

          <div className="group animate-slide-in-left delay-600 bg-white p-5 rounded-lg shadow-md hover:shadow-xl hover:bg-amber-50 transition-all duration-500 ease-out">
            <h3 className="text-xl font-semibold text-orange-500 group-hover:text-amber-600 transition-colors duration-300 hover:scale-105 hover:translate-x-2">
              © Dr. S.V.R. Reddy's Learning Hub
            </h3>
            <p className="mt-2 text-gray-700">
              We believe in unlocking every student's potential. Whether you're preparing for school exams, competitive tests, or seeking personalized academic guidance, we provide expert mentorship, structured programs, and a supportive learning environment.
            </p>
          </div>
        </div>

        <div className="relative group animate-slide-in-right flex justify-center md:justify-end">
          <div className="absolute inset-0 bg-gradient-to-r to-amber-300/20 rounded-2xl transform scale-95 group-hover:scale-100 transition-transform duration-700 z-0"></div>
          <div className="relative overflow-hidden rounded-2xl shadow-xl group-hover:shadow-2xl transition-shadow duration-500 w-full max-w-lg">
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
            animation-delay: 600ms;
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