    //  // src/App.jsx
    //  import React from 'react';

    //  import HeroSection from './components/Hero';
    //  import AmenitiesSection from './components/Amenities'
    //  import ValuesSection from './components/Values'
    //  import StrengthsSection from './components/Strength'
    //  import FeedbackSection from './components/Feedback'
    //  import Footer from './components/Footer'
    //  const App = () => {
    //    return (
    //       <div>
    //     {/* //    <Header /> */}
    //        <HeroSection />
    //        <AmenitiesSection />
    //        <ValuesSection />
    //        <StrengthsSection />
    //        <FeedbackSection />
    //        <Footer />
    //      </div>
    //    );
    //  };

    //  export default App;


    // src/App.jsx
import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import HeroSection from './components/Hero';
import AmenitiesSection from './components/Amenities';
import ValuesSection from './components/Values';
import StrengthsSection from './components/Strength';
import FeedbackSection from './components/Feedback';
import Footer from './components/Footer';
import AboutUs from './pages/Aboutus'; // Import the AboutUs component

const Home = () => (
  <>
    <HeroSection />
    <AmenitiesSection />
    <ValuesSection />
    <StrengthsSection />
    <FeedbackSection />
    <Footer />
  </>
);

const App = () => {
  return (
    <Router>
      <div>
       
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<AboutUs />} />
          {/* <Route path="/contact" element={<Contact />} /> */}
          {/* Add more routes as needed */}
        </Routes>

       

      </div>
    </Router>
  );
};

export default App;