// src/components/ValuesSection.jsx
import React from 'react';

const ValuesSection = () => {
  return (
    <section className="py-9 bg-white px-4 md:px-12">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div>
          <h2 className="text-3xl font-bold text-blue-800 mb-4">Values</h2>
          <div className="mb-6">
            <h3 className="text-xl font-semibold text-orange-600">Our Vision</h3>
            <p className="mt-2 text-gray-700">
              To be the most trusted learning partner for students in our community.
            </p>
          </div>
          <div className="mb-6">
            <h3 className="text-xl font-semibold text-orange-600">Our Mission</h3>
            <p className="mt-2 text-gray-700">
              To provide high-quality, accessible, and personalized education that empowers students to reach their full potential.
            </p>
          </div>
          <div>
            <h3 className="text-xl font-semibold text-orange-600">© Dr. S.V.R. Reddy's Learning Hub</h3>
            <p className="mt-2 text-gray-700">
              We believe in unlocking every student's potential. Whether you're preparing for school exams, competitive tests, or seeking personalized academic guidance, we provide expert mentorship, structured programs, and a supportive learning environment.
            </p>
          </div>
        </div>
        <div>
          <img src="https://res.cloudinary.com/dtgjhc9za/image/upload/v1746216766/ACS_5056_auogih.webp" alt="Building" className="w-full h-auto rounded-lg" />
        </div>
      </div>
    </section>
  );
};

export default ValuesSection;