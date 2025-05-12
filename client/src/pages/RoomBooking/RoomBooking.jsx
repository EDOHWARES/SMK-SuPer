import { useState } from 'react';
import { Calendar, Clock, Users, MapPin, CheckCircle, XCircle, AlertCircle } from 'lucide-react';

// Main component for the Room Booking System
export default function RoomBookingSystem() {
  // State for the current active tab
  const [activeTab, setActiveTab] = useState('book');
  
  // Sample rooms data
  const rooms = [
    { id: 1, name: 'Lecture Hall A', capacity: 120 },
    { id: 2, name: 'Seminar Room B', capacity: 40 },
    { id: 3, name: 'Computer Lab C', capacity: 30 },
    { id: 4, name: 'Conference Room D', capacity: 20 },
    { id: 5, name: 'Auditorium', capacity: 250 },
  ];
  
  // Sample booking data for "My Bookings" tab
  const myBookings = [
    { 
      id: 1, 
      room: 'Lecture Hall A', 
      date: '2025-05-15', 
      timeSlot: '09:00 AM - 11:00 AM', 
      attendees: 75, 
      status: 'approved' 
    },
    { 
      id: 2, 
      room: 'Computer Lab C', 
      date: '2025-05-17', 
      timeSlot: '02:00 PM - 04:00 PM', 
      attendees: 28, 
      status: 'pending' 
    },
    { 
      id: 3, 
      room: 'Conference Room D', 
      date: '2025-05-20', 
      timeSlot: '10:00 AM - 12:00 PM', 
      attendees: 12, 
      status: 'rejected' 
    },
  ];
  
  // State for form data
  const [formData, setFormData] = useState({
    roomId: '',
    date: '',
    timeSlot: '',
    attendees: ''
  });
  
  // State for form submission feedback
  const [formSubmitted, setFormSubmitted] = useState(false);
  
  // Handle form input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };
  
  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you would typically send data to your backend
    console.log("Form submitted:", formData);
    setFormSubmitted(true);
    // Reset form after 3 seconds
    setTimeout(() => {
      setFormSubmitted(false);
      setFormData({
        roomId: '',
        date: '',
        timeSlot: '',
        attendees: ''
      });
    }, 3000);
  };
  
  // Time slot options
  const timeSlots = [
    '08:00 AM - 10:00 AM',
    '10:00 AM - 12:00 PM',
    '12:00 PM - 02:00 PM',
    '02:00 PM - 04:00 PM',
    '04:00 PM - 06:00 PM'
  ];

  // Get status icon based on booking status
  const getStatusIcon = (status) => {
    switch(status) {
      case 'approved':
        return <CheckCircle className="text-green-600" />;
      case 'rejected':
        return <XCircle className="text-red-600" />;
      case 'pending':
      default:
        return <AlertCircle className="text-yellow-500" />;
    }
  };
  
  // Get status text based on booking status
  const getStatusText = (status) => {
    switch(status) {
      case 'approved':
        return 'Approved';
      case 'rejected':
        return 'Rejected';
      case 'pending':
      default:
        return 'Pending';
    }
  };
  
  return (
    <div className="min-h-screen bg-gray-50 mt-5">
      {/* Header */}
      <header className=" text-blue-950 p-4">
        <div className="container mx-auto">
          <h1 className="text-2xl md:text-3xl font-bold">School Room Booking System</h1>
          <p className="text-gray-500">Book rooms for your events and programs</p>
        </div>
      </header>
      
      {/* Main content */}
      <main className="container mx-auto p-4">
        {/* Navigation Tabs */}
        <div className="flex border-b border-gray-200 mb-6">
          <button
            className={`px-4 py-2 font-medium text-sm ${
              activeTab === 'book'
                ? 'border-b-2 border-yellow-500 text-blue-700'
                : 'text-gray-600 hover:text-blue-700'
            }`}
            onClick={() => setActiveTab('book')}
          >
            Book a Room
          </button>
          <button
            className={`px-4 py-2 font-medium text-sm ${
              activeTab === 'mybookings'
                ? 'border-b-2 border-yellow-500 text-blue-700'
                : 'text-gray-600 hover:text-blue-700'
            }`}
            onClick={() => setActiveTab('mybookings')}
          >
            My Bookings
          </button>
        </div>
        
        {/* Book a Room Form */}
        {activeTab === 'book' && (
          <div className="bg-white rounded-lg shadow p-6">
            <h2 className="text-xl font-semibold text-blue-800 mb-4">Book a Room</h2>
            
            {formSubmitted ? (
              <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded">
                <p className="font-bold">Success!</p>
                <p>Your room booking request has been submitted. You can check its status in the "My Bookings" tab.</p>
              </div>
            ) : (
              <div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {/* Room Selection */}
                  <div className="space-y-2">
                    <label htmlFor="roomId" className="block text-sm font-medium text-gray-700 flex items-center">
                      <MapPin size={16} className="mr-1 text-blue-600" />
                      Select Room
                    </label>
                    <select
                      id="roomId"
                      name="roomId"
                      value={formData.roomId}
                      onChange={handleInputChange}
                      className="w-full p-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                    >
                      <option value="">-- Select a Room --</option>
                      {rooms.map(room => (
                        <option key={room.id} value={room.id}>
                          {room.name} (Capacity: {room.capacity})
                        </option>
                      ))}
                    </select>
                  </div>
                  
                  {/* Date Selection */}
                  <div className="space-y-2">
                    <label htmlFor="date" className="block text-sm font-medium text-gray-700 flex items-center">
                      <Calendar size={16} className="mr-1 text-blue-600" />
                      Date
                    </label>
                    <input
                      type="date"
                      id="date"
                      name="date"
                      value={formData.date}
                      onChange={handleInputChange}
                      className="w-full p-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                    />
                  </div>
                  
                  {/* Time Slot Selection */}
                  <div className="space-y-2">
                    <label htmlFor="timeSlot" className="block text-sm font-medium text-gray-700 flex items-center">
                      <Clock size={16} className="mr-1 text-blue-600" />
                      Time Slot
                    </label>
                    <select
                      id="timeSlot"
                      name="timeSlot"
                      value={formData.timeSlot}
                      onChange={handleInputChange}
                      className="w-full p-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                    >
                      <option value="">-- Select a Time Slot --</option>
                      {timeSlots.map((slot, index) => (
                        <option key={index} value={slot}>
                          {slot}
                        </option>
                      ))}
                    </select>
                  </div>
                  
                  {/* Number of Attendees */}
                  <div className="space-y-2">
                    <label htmlFor="attendees" className="block text-sm font-medium text-gray-700 flex items-center">
                      <Users size={16} className="mr-1 text-blue-600" />
                      Number of Attendees
                    </label>
                    <input
                      type="number"
                      id="attendees"
                      name="attendees"
                      value={formData.attendees}
                      onChange={handleInputChange}
                      min="1"
                      className="w-full p-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                    />
                  </div>
                </div>
                
                {/* Submit Button */}
                <div className="mt-6">
                  <button
                    onClick={handleSubmit}
                    className="w-full sm:w-auto px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-md shadow-sm flex items-center justify-center transition-colors duration-300"
                  >
                    <span>Submit Booking Request</span>
                  </button>
                </div>
              </div>
            )}
          </div>
        )}
        
        {/* My Bookings Tab */}
        {activeTab === 'mybookings' && (
          <div className="bg-white rounded-lg shadow overflow-hidden">
            <h2 className="text-xl font-semibold text-blue-800 p-4 border-b border-gray-200">My Bookings</h2>
            
            {myBookings.length === 0 ? (
              <div className="p-6 text-center text-gray-500">
                <p>You don't have any bookings yet.</p>
              </div>
            ) : (
              <div className="overflow-x-auto">
                <table className="min-w-full divide-y divide-gray-200">
                  <thead className="bg-gray-50">
                    <tr>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Room</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Date</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Time Slot</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Attendees</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
                    </tr>
                  </thead>
                  <tbody className="bg-white divide-y divide-gray-200">
                    {myBookings.map((booking) => (
                      <tr key={booking.id} className="hover:bg-gray-50">
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className="text-sm font-medium text-gray-900">{booking.room}</div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className="text-sm text-gray-900">{new Date(booking.date).toLocaleDateString()}</div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className="text-sm text-gray-900">{booking.timeSlot}</div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className="text-sm text-gray-900">{booking.attendees}</div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className="flex items-center text-sm font-medium">
                            <span className="mr-1">{getStatusIcon(booking.status)}</span>
                            <span
                              className={`${
                                booking.status === 'approved' ? 'text-green-600' : 
                                booking.status === 'rejected' ? 'text-red-600' : 'text-yellow-500'
                              }`}
                            >
                              {getStatusText(booking.status)}
                            </span>
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )}
          </div>
        )}
      </main>
      
      {/* Footer */}
      <footer className="bg-blue-800 text-white p-4 mt-8">
        <div className="container mx-auto text-center text-sm">
          <p>© {new Date().getFullYear()} School Room Booking System</p>
          <p className="mt-1">For support, contact the School Admin Office</p>
        </div>
      </footer>
    </div>
  );
}