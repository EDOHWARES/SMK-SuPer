import { useState } from 'react';
import { Bell, ChevronRight, Calendar, Users, Info } from 'lucide-react';

// Sample announcement data - in a real application, this would come from an API
const initialAnnouncements = [
  {
    id: 1,
    title: "Fall Festival Next Weekend",
    date: "2025-05-25",
    category: "Events",
    content: "Join us for our annual Fall Festival with games, food, and activities for the whole family. The event starts at 11 AM in the main courtyard.",
    important: true
  },
  {
    id: 2,
    title: "Parent-Teacher Conferences",
    date: "2025-06-03",
    category: "Academic",
    content: "Parent-Teacher conferences will be held next Tuesday and Wednesday. Please schedule your appointment through the parent portal.",
    important: true
  },
  {
    id: 3,
    title: "School Supply List Updated",
    date: "2025-05-10",
    category: "General",
    content: "The school supply list for the upcoming year has been updated. Please check the website for details on what your student will need.",
    important: false
  },
  {
    id: 4,
    title: "Summer Sports Camp Registration",
    date: "2025-05-15",
    category: "Sports",
    content: "Registration for summer sports camps is now open. Spaces are limited, so please register early to secure a spot.",
    important: false
  },
  {
    id: 5,
    title: "New Lunch Menu",
    date: "2025-05-19",
    category: "General",
    content: "Our cafeteria will be introducing a new lunch menu starting next week. The updated menu includes more vegetarian and gluten-free options.",
    important: false
  }
];

// Categories with their corresponding icons
const categories = {
  "Events": <Calendar size={16} />,
  "Academic": <Info size={16} />,
  "Sports": <Users size={16} />,
  "General": <Bell size={16} />
};

export default function AnnouncementSection() {
  const [announcements, setAnnouncements] = useState(initialAnnouncements);
  const [activeFilter, setActiveFilter] = useState("All");
  const [expandedId, setExpandedId] = useState(null);

  // Filter categories including "All"
  const filters = ["All", "Important", ...Object.keys(categories)];
  
  // Filter announcements based on selected filter
  const filteredAnnouncements = announcements.filter(announcement => {
    if (activeFilter === "All") return true;
    if (activeFilter === "Important") return announcement.important;
    return announcement.category === activeFilter;
  });

  // Format date in a more readable way
  const formatDate = (dateStr) => {
    return new Date(dateStr).toLocaleDateString('en-US', {
      month: 'short',
      day: 'numeric',
      year: 'numeric'
    });
  };

  // Toggle announcement expansion
  const toggleExpand = (id) => {
    setExpandedId(expandedId === id ? null : id);
  };

  return (
    <div className="w-full max-w-6xl mx-auto px-4 py-8">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-3xl font-bold text-blue-800">School Announcements</h2>
        <div className="hidden md:block">
          <div className="flex space-x-2">
            {filters.map((filter) => (
              <button
                key={filter}
                onClick={() => setActiveFilter(filter)}
                className={`px-3 py-1 rounded-full text-sm font-medium transition ${
                  activeFilter === filter
                    ? "bg-blue-600 text-white"
                    : "bg-gray-100 text-gray-800 hover:bg-gray-200"
                }`}
              >
                {filter}
              </button>
            ))}
          </div>
        </div>
      </div>
      
      {/* Mobile filter dropdown */}
      <div className="mb-4 md:hidden">
        <select 
          value={activeFilter}
          onChange={(e) => setActiveFilter(e.target.value)}
          className="w-full p-2 border border-gray-300 rounded-md bg-white"
        >
          {filters.map((filter) => (
            <option key={filter} value={filter}>
              {filter}
            </option>
          ))}
        </select>
      </div>

      <div className="bg-white rounded-lg shadow-md overflow-hidden">
        {filteredAnnouncements.length > 0 ? (
          filteredAnnouncements.map((announcement) => (
            <div 
              key={announcement.id} 
              className={`border-b border-gray-200 last:border-b-0 ${
                announcement.important ? "bg-amber-50" : ""
              }`}
            >
              <div 
                className="flex items-center justify-between p-4 cursor-pointer hover:bg-gray-50"
                onClick={() => toggleExpand(announcement.id)}
              >
                <div className="flex items-start space-x-3">
                  {announcement.important && (
                    <span className="flex-shrink-0 mt-1 w-2 h-2 rounded-full bg-red-500"></span>
                  )}
                  <div>
                    <h3 className="font-semibold text-lg text-gray-900">{announcement.title}</h3>
                    <div className="flex flex-col md:flex-row md:items-center text-sm text-gray-600 mt-1 space-y-1 md:space-y-0 md:space-x-4">
                      <span className="flex items-center">
                        <Calendar size={14} className="mr-1" />
                        {formatDate(announcement.date)}
                      </span>
                      <span className="flex items-center">
                        {categories[announcement.category]}
                        <span className="ml-1">{announcement.category}</span>
                      </span>
                    </div>
                  </div>
                </div>
                <ChevronRight 
                  size={20} 
                  className={`text-gray-400 transition-transform duration-200 ${
                    expandedId === announcement.id ? "transform rotate-90" : ""
                  }`} 
                />
              </div>
              
              {expandedId === announcement.id && (
                <div className="px-4 pb-4 pt-0 text-gray-700">
                  <p>{announcement.content}</p>
                </div>
              )}
            </div>
          ))
        ) : (
          <div className="p-8 text-center text-gray-500">
            No announcements found for this filter.
          </div>
        )}
      </div>
    </div>
  );
}