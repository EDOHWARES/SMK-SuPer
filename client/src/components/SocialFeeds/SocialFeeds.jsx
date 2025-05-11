// import React from "react";

// const SocialFeeds = () => {
//   return (
//     <div className="max-w-6xl mx-auto p-4 grid grid-cols-1 lg:grid-cols-2 gap-6 mb-[4rem]">
//       {/* YouTube Embed */}
//       <div className="w-full">
//         <iframe
//           className="w-full h-64 rounded-lg shadow-lg"
//           src="https://www.youtube.com/embed/NqTg6E2a4BM" 
//           title="YouTube video"
//           allowFullScreen
//         ></iframe>
//       </div>

//       {/* Facebook Embed */}
//       <div className="flex flex-col">
//         <h2 className="text-lg font-semibold flex items-center gap-2">
//           <span className="text-blue-600 text-xl">📘</span> Facebook Posts
//         </h2>
//         <div
//           className="mt-2 w-full h-40 bg-gray-200 rounded-lg shadow-lg flex items-center justify-center"
//         >
//           <iframe
//             className="w-full h-full rounded-lg"
//             src="https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2FFacebook&tabs=timeline&width=340&height=130&small_header=false&adapt_container_width=true&hide_cover=false&show_facepile=true"
//             title="Facebook Page"
//           ></iframe>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default SocialFeeds;

import ppk_activities from "../../assets/images/PPKI activity 1.jpg";



import React from 'react';
import {ChevronRight, Facebook, Calendar, Star } from 'lucide-react';
// Facebook Posts Component
export const SocialFeeds = () => {

  const MessageCircle = (props) => {
    return (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
        <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path>
      </svg>
    );
  };
  
  // Mock Facebook posts data
  const posts = [
    {
      id: 1,
      title: "Science Fair Winners Announced!",
      content: "Congratulations to all participants in our Annual Science Fair. The creativity and innovation displayed were truly impressive!",
      image: ppk_activities,
      date: "May 8, 2025",
      likes: 124,
      comments: 32,
    },
    {
      id: 2,
      title: "New Library Resources Now Available",
      content: "We're excited to announce that our school library has been upgraded with new digital resources and books for all grade levels.",
      image: ppk_activities,
      date: "May 5, 2025",
      likes: 98,
      comments: 17,
    },
    {
      id: 3,
      title: "Basketball Team Advances to Finals",
      content: "Our school basketball team has advanced to the regional finals after an impressive victory last Friday. Go Eagles!",
      image: ppk_activities,
      date: "May 3, 2025",
      likes: 156,
      comments: 42,
    },
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between mb-12">
          <div>
            <h2 className="text-3xl font-bold text-blue-900">Latest School Updates</h2>
            <p className="text-gray-600 mt-2">Stay connected with our school community activities</p>
          </div>
          <div className="hidden md:block">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="flex items-center text-blue-600 font-medium hover:text-blue-800 transition-colors">
              <Facebook className="w-5 h-5 mr-2" />
              Follow Us on Facebook
            </a>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {posts.map((post) => (
            <div key={post.id} className="bg-white border border-gray-200 rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow">
              <div className="h-48 overflow-hidden">
                <img src={post.image} alt={post.title} className="w-full h-full object-cover" />
              </div>
              <div className="p-6">
                <div className="flex items-center text-gray-500 text-sm mb-3">
                  <Calendar className="w-4 h-4 mr-1" />
                  <span>{post.date}</span>
                </div>
                <h3 className="text-xl font-semibold text-blue-900 mb-2">{post.title}</h3>
                <p className="text-gray-600 mb-4 line-clamp-3">{post.content}</p>
                <div className="flex items-center justify-between">
                  <div className="flex space-x-4 text-sm text-gray-500">
                    <span className="flex items-center">
                      <Star className="w-4 h-4 mr-1 text-yellow-500" />
                      {post.likes} Likes
                    </span>
                    <span className="flex items-center">
                      <MessageCircle className="w-4 h-4 mr-1 text-blue-500" />
                      {post.comments} Comments
                    </span>
                  </div>
                  <a href={`/post/${post.id}`} className="text-blue-900 hover:text-yellow-600 font-medium text-sm">Read More</a>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-12 text-center">
          <a href="/news" className="inline-flex items-center bg-blue-900 text-white px-6 py-3 rounded-lg hover:bg-blue-800 transition-colors">
            View All Updates
            <ChevronRight className="ml-2 w-5 h-5" />
          </a>
        </div>
      </div>
    </section>
  );
};
