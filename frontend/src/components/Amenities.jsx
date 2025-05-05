
import React from 'react';

const AmenitiesSection = () => {
  return (
    <section className="py-12 bg-white">
      <style>
        {`
          .glow-effect {
            position: relative;
            overflow: hidden;
            border-radius: 0.5rem;
            transition: transform 0.3s, box-shadow 0.3s;
          }
          .glow-effect::before {
            content: '';
            position: absolute;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            background: linear-gradient(45deg, transparent, #ff9f1c, transparent);
            z-index: -1;
            transition: opacity 0.3s;
            opacity: 0;
            border-radius: 0.5rem;
          }
          .glow-effect:hover {
            transform: scale(1.05);
            box-shadow: 0 0 15px rgba(0, 0, 0, 0.2);
          }
          .glow-effect:hover::before {
            opacity: 1;
            animation: glow 2.5s linear infinite;
          }
          @keyframes glow {
            0% {
              transform: translateX(-100%);
            }
            100% {
              transform: translateX(100%);
            }
          }
        `}
      </style>
      <div className="flex items-center mb-8 px-4 md:px-12">
        <h2 className="text-3xl font-bold text-blue-800">Amenities</h2>
        <div className="w-110 h-5 bg-orange-400 ml-4"></div> {/* Yellow line beside heading */}
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 px-4 md:px-12">
        <div className="glow-effect p-4 bg-white rounded-lg">
          <img src="https://res.cloudinary.com/dtgjhc9za/image/upload/v1746216694/FB_IMG_1446123780343_c2jrtv.webp" alt="Roof Terrace" className="w-full h-80 object-cover rounded-lg mb-4" />
          <h3 className="text-xl font-semibold text-orange-600">Roof Terrace Study Facility</h3>
          <p className="mt-2 text-gray-700">
            Study in a Peaceful, Open-Air Environment. Our rooftop study area offers a calm, well-ventilated space designed to help students focus better.
          </p>
        </div>
        <div className="glow-effect p-4 bg-white rounded-lg">
          <img src="https://res.cloudinary.com/dtgjhc9za/image/upload/v1746216582/SVR_xocfiq.webp " alt="Classroom" className="w-full h-80 object-cover rounded-lg mb-4" />
          <h3 className="text-xl font-semibold text-orange-600">Air-Conditioned Classrooms</h3>
          <p className="mt-2 text-gray-700">
            Our air-conditioned classrooms ensure a comfortable, focused, and distraction-free learning environment year-round.
          </p>
        </div>
        <div className="glow-effect p-4 bg-white rounded-lg">
          <img src="https://res.cloudinary.com/dtgjhc9za/image/upload/v1746216766/ACS_5056_auogih.webp" alt="Location" className="w-full h-80 object-cover rounded-lg mb-4" />
          <h3 className="text-xl font-semibold text-orange-600">Located at Heart of the City</h3>
          <p className="mt-2 text-gray-700">
            Conveniently located in the heart of the city, our centre is nestled in a quiet, peaceful residential area—free from noise pollution and close to all essential shops.
          </p>
        </div>
      </div>
    </section>
  );
};

export default AmenitiesSection;