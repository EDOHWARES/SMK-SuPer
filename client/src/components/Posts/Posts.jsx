import React from "react";

const Posts = () => {
  return (
    <div className="max-w-6xl mx-auto p-4">
      {/* Grid of Post Placeholders */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {Array.from({ length: 21 }).map((_, index) => (
          <div
            key={index}
            className="bg-gray-300 opacity-50 h-48 rounded-lg animate-pulse"
          ></div>
        ))}
      </div>

      {/* Buttons Section */}
      <div className="flex justify-center items-center gap-4 mt-6">
        <button className="bg-gray-800 text-white px-4 py-2 rounded-md hover:bg-gray-700 transition">
          Load More
        </button>
        <button className="bg-blue-500 text-white px-4 py-2 rounded-md flex items-center gap-2 hover:bg-blue-600 transition">
          <span className="text-lg">📷</span> Follow on Instagram
        </button>
      </div>
    </div>
  );
};

export default Posts;
