import React from "react";

const SocialFeeds = () => {
  return (
    <div className="max-w-6xl mx-auto p-4 grid grid-cols-1 lg:grid-cols-2 gap-6 mb-[4rem]">
      {/* YouTube Embed */}
      <div className="w-full">
        <iframe
          className="w-full h-64 rounded-lg shadow-lg"
          src="https://www.youtube.com/embed/NqTg6E2a4BM" 
          title="YouTube video"
          allowFullScreen
        ></iframe>
      </div>

      {/* Facebook Embed */}
      <div className="flex flex-col">
        <h2 className="text-lg font-semibold flex items-center gap-2">
          <span className="text-blue-600 text-xl">📘</span> Facebook Posts
        </h2>
        <div
          className="mt-2 w-full h-40 bg-gray-200 rounded-lg shadow-lg flex items-center justify-center"
        >
          <iframe
            className="w-full h-full rounded-lg"
            src="https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2FFacebook&tabs=timeline&width=340&height=130&small_header=false&adapt_container_width=true&hide_cover=false&show_facepile=true"
            title="Facebook Page"
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default SocialFeeds;
