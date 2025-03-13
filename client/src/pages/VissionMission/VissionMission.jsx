import React from "react";
import logo from '../../assets/images/logo.png'

const VisionMission = () => {
  return (
    <div className="bg-white mt-[5rem] py-10 px-6 md:px-20">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-8">Vision & Mission</h2>
        
        <div className="flex flex-col md:flex-row items-center gap-8 mb-12">
          <div className="flex-1 p-6 bg-white shadow-lg rounded-lg">
            <h3 className="text-xl font-semibold mb-3">Our Vision</h3>
            <p className="text-gray-700">A world-class fully residential institution fostering innovation and leadership.</p>
          </div>
          <div className="flex-1 p-6 bg-white shadow-lg rounded-lg">
            <h3 className="text-xl font-semibold mb-3">Our Mission</h3>
            <p className="text-gray-700">
              To develop holistic individuals who are independent and lifelong learners, providing an innovative educational environment.
            </p>
          </div>
        </div>
        
        <div className="w-full flex justify-center mb-10">
          <div className="w-48 h-48 bg-gray-300 flex items-center justify-center rounded-lg shadow-md">
            <img src={logo} alt="logo" />
          </div>
        </div>
        
        <div className="bg-gray-200 p-6 rounded-lg shadow-md text-center">
          <h3 className="text-xl font-semibold mb-4">College Song</h3>
          <div className="w-full h-64 bg-gray-400 flex items-center justify-center rounded-lg">
            <span className="text-gray-800">[ Dummy Video Placeholder ]</span>
          </div>
          <p className="mt-4 text-gray-700">Lyrics of the college song go here...</p>
        </div>
      </div>
    </div>
  );
};

export default VisionMission;
