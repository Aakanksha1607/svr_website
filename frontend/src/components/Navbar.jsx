     // src/components/Header.jsx
     import React from 'react';

     const Navbar = () => {
       return (
         <header className="flex justify-between items-center p-4 bg-transparent text-yellow-500">
           <h1 className="text-lg">Landing page</h1>
           <nav>
             <ul className="flex space-x-4">
               <li>Home</li>
               <li>About Us</li>
               <li>Contact Us</li>
             </ul>
           </nav>
         </header>
       );
     };

     export default Navbar;