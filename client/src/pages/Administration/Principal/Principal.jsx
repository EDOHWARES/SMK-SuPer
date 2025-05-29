import React from 'react';

import principal_img from "../../../assets/images/administration/principal.jpg";

const PrincipalPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-yellow-50">
      {/* Header Section */}
      <div className="bg-gradient-to-r from-blue-900 via-blue-800 to-blue-900 text-white py-8 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center space-x-4 mb-4">
            <div className="h-1 w-12 bg-yellow-400 rounded"></div>
            <span className="text-yellow-400 font-medium tracking-wide">ADMINISTRATION</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-2">Principal</h1>
          <p className="text-blue-100 text-lg">Leadership & Educational Excellence</p>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-6xl mx-auto px-4 py-12">
        <div className="bg-white rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1">
          {/* Principal Banner Image */}
          <div className="relative">
            <img 
              src={principal_img}
              alt="Principal Encik Azman Bin Khambali"
              className="w-full h-auto object-cover"
            />
            
            {/* Overlay for better text readability if needed */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300"></div>
          </div>

          {/* Content Section */}
          <div className="p-8 md:p-12">
            {/* Principal Info */}
            <div className="text-center mb-8">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-blue-600 to-blue-700 rounded-full mb-4">
                <span className="text-white text-2xl font-bold">P</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-2">
                Encik Azman Bin Khambali
              </h2>
              <p className="text-xl text-blue-600 font-semibold mb-4">
                Principal, SMK Suria Perdana
              </p>
              <div className="inline-block px-6 py-2 bg-gradient-to-r from-yellow-400 to-yellow-500 text-black font-medium rounded-full">
                "Together Towards Excellence"
              </div>
            </div>

            {/* School Vision Section */}
            <div className="grid md:grid-cols-3 gap-8 mt-12">
              <div className="text-center group">
                <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-r from-blue-500 to-blue-600 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <div className="w-0 h-0 border-l-4 border-l-transparent border-r-4 border-r-transparent border-b-6 border-b-white"></div>
                </div>
                <h3 className="text-lg font-semibold text-gray-800 mb-2">Vision</h3>
                <p className="text-gray-600 text-sm">Leading educational excellence and character development</p>
              </div>
              
              <div className="text-center group">
                <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-r from-yellow-500 to-yellow-600 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <div className="w-0 h-0 border-l-4 border-l-transparent border-r-4 border-r-transparent border-b-6 border-b-white"></div>
                </div>
                <h3 className="text-lg font-semibold text-gray-800 mb-2">Mission</h3>
                <p className="text-gray-600 text-sm">Nurturing tomorrow's leaders through quality education</p>
              </div>
              
              <div className="text-center group">
                <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-r from-blue-500 to-yellow-500 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <div className="w-0 h-0 border-l-4 border-l-transparent border-r-4 border-r-transparent border-b-6 border-b-white"></div>
                </div>
                <h3 className="text-lg font-semibold text-gray-800 mb-2">Values</h3>
                <p className="text-gray-600 text-sm">Excellence, integrity, and continuous improvement</p>
              </div>
            </div>
          </div>
        </div>

        {/* Contact Information Card */}
        <div className="mt-8 bg-gradient-to-r from-blue-600 to-blue-700 rounded-xl p-8 text-white">
          <div className="text-center">
            <h3 className="text-2xl font-bold mb-4">Get in Touch</h3>
            <p className="text-blue-100 mb-6">
              For appointments or inquiries, please contact the school administration office.
            </p>
            <div className="inline-flex items-center space-x-4">
              <div className="px-6 py-3 bg-white/20 rounded-lg backdrop-blur-sm">
                <span className="font-medium">Office Hours: 8:00 AM - 4:00 PM</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PrincipalPage;