   // src/components/Modal.jsx
   import React from 'react';

   const Modal = ({ isOpen, onClose, children }) => {
     if (!isOpen) return null;

     return (
       <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
         <div className="bg-white p-8 rounded-lg shadow-lg max-w-3xl w-full relative">
           <button onClick={onClose} className="absolute top-2 right-2 text-red-500">Close</button>
           {children}
         </div>
       </div>
     );
   };

   export default Modal;