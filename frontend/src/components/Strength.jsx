// src/components/StrengthsSection.jsx
import React from 'react';

const StrengthsSection = () => {
  return (
    <section className="py-9 bg-white px-4 md:px-12">
      <div className="mb-8 flex items-center">
        <h2 className="text-3xl font-bold text-blue-800">Our Strengths</h2>
        <div className="w-110 h-5 bg-blue-400 mt-2"></div> {/* Blue line */}
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="text-left">
          <img src="https://bsmedia.business-standard.com/_media/bs/img/article/2021-12/03/full/1638506038-4213.jpg" alt="Students Life Style" className="w-full h-90 object-cover rounded-md mb-4" />
          <h3 className="text-xl font-semibold text-orange-600">Students Life Style</h3>
          <p className="mt-2 text-gray-700">
            Dedication, discipline, integrity, and student-centric learning.
          </p>
        </div>
        <div className="text-left">
          <img src="https://img.freepik.com/free-vector/24-hours-open-service-everyday-banner-with-clock-sign_1017-52830.jpg?t=st=1746139716~exp=1746143316~hmac=ea6974d12e1bc4dc00b091f10204482253a2542fdfc86ef46ffe88bee8c9e603&w=996" alt="24 Hours Open" className="w-full h-90 object-cover rounded-lg mb-4" />
          <h3 className="text-xl font-semibold text-orange-600">We are Open</h3>
          <p className="mt-2 text-gray-700">
            With a 24×7 open campus.
          </p>
        </div>
      </div>
    </section>
  );
};

export default StrengthsSection;