import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { toast } from 'react-hot-toast';

const BookingForm = ({ token, userRole }) => {
  const [rooms, setRooms] = useState([]);
  const [form, setForm] = useState({
    roomId: '',
    date: '',
    timeSlot: '',
    attendees: '',
    isSpecial: false
  });

//   useEffect(() => {
//     axios.get('/api/rooms', {
//       headers: { Authorization: `Bearer ${token}` }
//     }).then(res => setRooms(res.data))
//       .catch(err => toast.error('Failed to load rooms'));
//   }, [token]);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setForm({ ...form, [name]: type === 'checkbox' ? checked : value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post('/api/bookings', form, {
        headers: { Authorization: `Bearer ${token}` }
      });
      toast.success('Booking successful');
    } catch (err) {
      toast.error(err.response?.data?.error || 'Booking failed');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="px-6 md:px-12 lg:px-20 max-w-[1440px] py-10 shadow-md rounded mt-[8rem] bg-white mx-auto">
      <h2 className="text-xl font-bold mb-4">Room Booking</h2>

      <label className="block mb-2">Select Room</label>
      <select name="roomId" value={form.roomId} onChange={handleChange} className="w-full mb-4 p-2 border rounded">
        <option value="">-- Select Room --</option>
        {rooms.map(room => <option key={room._id} value={room._id}>{room.name}</option>)}
      </select>

      <label className="block mb-2">Date</label>
      <input type="date" name="date" value={form.date} onChange={handleChange} className="w-full mb-4 p-2 border rounded" />

      <label className="block mb-2">Time Slot</label>
      <input type="text" name="timeSlot" value={form.timeSlot} onChange={handleChange} className="w-full mb-4 p-2 border rounded" placeholder="e.g., 10:00AM - 12:00PM" />

      <label className="block mb-2">Attendees(number of people attending)</label>
      <input type="number" name="attendees" value={form.attendees} onChange={handleChange} className="w-full mb-4 p-2 border rounded" />

      {['teacher', 'principal'].includes(userRole) && (
        <label className="inline-flex items-center mb-4">
          <input type="checkbox" name="isSpecial" checked={form.isSpecial} onChange={handleChange} className="mr-2" />
          Special Booking
        </label>
      )}

      <button type="submit" className="bg-[#003891] text-white py-2 px-4 rounded hover:bg-[#00247D] duration-500">Book Room</button>
    </form>
  );
};

export default BookingForm;