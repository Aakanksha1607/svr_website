
    // src/App.jsx
import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';

import AboutUs from './pages/Aboutus';
import Contact from './pages/Contactus';
import Home from './pages/HomeRoutes';

const App = () => {
  return (
    <Router>
      <div>
       
        <Routes>
        <Route path="/" element={<Home />} />
         
          <Route path="/about" element={<AboutUs />} />
          <Route path="/contact" element={<Contact />} />
          {/* Add more routes as needed */}
        </Routes>


      </div>
    </Router>
  );
};

export default App;