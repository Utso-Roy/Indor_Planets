import React from 'react';
import { FaArrowAltCircleLeft } from 'react-icons/fa';

const UserHome = () => {
  return (
    <div className="max-w-3xl my-5 bg-green-700 mx-auto p-6">
      <h2 className="text-3xl font-bold text-white mb-6 text-center">
        Welcome to Your Dashboard
      </h2>

      <div className="bg-white p-8 rounded-xl shadow-lg border border-gray-200">
        <h4 className="text-xl flex gap-1 justify-center items-center  font-semibold text-green-600 mb-4">
        <FaArrowAltCircleLeft />  Explore Your Dashboard
        </h4>
        <p className="text-gray-700 mb-6 leading-relaxed">
          Take a tour around your dashboard to discover all the features. 
          You can check your profile, products and much more.
        </p>
        
      </div>
    </div>
  );
};

export default UserHome;
