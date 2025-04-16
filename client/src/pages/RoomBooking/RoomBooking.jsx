import React, { useEffect, useState } from "react";
import axios from "axios";
import { toast } from "react-hot-toast";

import seminar_room from "../../assets/images/semina-room.jpg";

const BookingForm = ({ token, userRole }) => {
  const [rooms, setRooms] = useState([]);
  const [form, setForm] = useState({
    roomId: "",
    date: "",
    timeSlot: "",
    attendees: "",
    isSpecial: false,
  });

  useEffect(() => {
    // Dummy rooms data
    const dummyRooms = [
      { _id: "1", name: "Room A", capacity: 10, type: "library" },
      { _id: "2", name: "Room B", capacity: 15, type: "meeting" },
      { _id: "3", name: "Room C", capacity: 20, type: "special" },
      { _id: "4", name: "Room D", capacity: 25, type: "library" },
      { _id: "5", name: "Room E", capacity: 30, type: "meeting" },
      { _id: "6", name: "Room F", capacity: 35, type: "special" },
      { _id: "7", name: "Room G", capacity: 40, type: "library" },
      { _id: "8", name: "Room H", capacity: 45, type: "meeting" },
      { _id: "9", name: "Room I", capacity: 50, type: "special" },
      { _id: "10", name: "Room J", capacity: 55, type: "library" },
      { _id: "11", name: "Room K", capacity: 60, type: "meeting" },
      { _id: "12", name: "Room L", capacity: 65, type: "special" },
      { _id: "13", name: "Room M", capacity: 70, type: "library" },
      { _id: "14", name: "Room N", capacity: 75, type: "meeting" },
      { _id: "15", name: "Room O", capacity: 80, type: "special" },
      { _id: "16", name: "Room P", capacity: 85, type: "library" },
      { _id: "17", name: "Room Q", capacity: 90, type: "meeting" },
      { _id: "18", name: "Room R", capacity: 95, type: "special" },
      { _id: "19", name: "Room S", capacity: 100, type: "library" },
      { _id: "20", name: "Room T", capacity: 105, type: "meeting" },
      { _id: "21", name: "Room U", capacity: 110, type: "special" },
      { _id: "22", name: "Room V", capacity: 115, type: "library" },
      { _id: "23", name: "Room W", capacity: 120, type: "meeting" },
      { _id: "24", name: "Room X", capacity: 125, type: "special" },
      { _id: "25", name: "Room Y", capacity: 130, type: "library" },
      { _id: "26", name: "Room Z", capacity: 135, type: "meeting" },
    ];

    setRooms(dummyRooms);
  }, []);

  //   useEffect(() => {
  //     axios.get('/api/rooms', {
  //       headers: { Authorization: `Bearer ${token}` }
  //     }).then(res => setRooms(res.data))
  //       .catch(err => toast.error('Failed to load rooms'));
  //   }, [token]);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setForm({ ...form, [name]: type === "checkbox" ? checked : value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("/api/bookings", form, {
        headers: { Authorization: `Bearer ${token}` },
      });
      toast.success("Booking successful");
    } catch (err) {
      toast.error(err.response?.data?.error || "Booking failed");
    }
  };

  return (
    <section className="mt-[5rem] relative flex justify-center">
      <img
        src={seminar_room}
        alt="semina-room"
        className="w-full brightness-50 max-h-[50vh] object-cover md:object-center z-[888]"
      />
      <div className="bg-white absolute w-[90%] top-[15rem] md:top-[20rem] shadow-md rounded max-w-[1440px] px-6 md:px-12 z-[9999] lg:px-20 py-10 mx-auto">
        <form onSubmit={handleSubmit} className="">
          <h2 className="text-xl font-bold mb-4">Room Booking</h2>

          <label className="block mb-2">Select Room</label>
          <select
            name="roomId"
            value={form.roomId}
            onChange={handleChange}
            className="w-full mb-4 p-2 border rounded"
          >
            <option value="">-- Select Room --</option>
            {rooms.map((room) => (
              <option key={room._id} value={room._id}>
                {room.name}
              </option>
            ))}
          </select>

          <label className="block mb-2">Date</label>
          <input
            type="date"
            name="date"
            value={form.date}
            min={new Date().toISOString().split("T")[0]}
            onChange={handleChange}
            className="w-full mb-4 p-2 border rounded"
          />

          <label className="block mb-2">Time Slot</label>
          <select
            name="timeSlot"
            value={form.timeSlot}
            onChange={handleChange}
            className="w-full mb-4 p-2 border rounded"
          >
            <option value="">-- Select Time Slot --</option>
            <option value="00:00 - 02:00">00:00 - 02:00</option>
            <option value="02:00 - 04:00">02:00 - 04:00</option>
            <option value="04:00 - 06:00">04:00 - 06:00</option>
            <option value="06:00 - 08:00">06:00 - 08:00</option>
            <option value="08:00 - 10:00">08:00 - 10:00</option>
            <option value="10:00 - 12:00">10:00 - 12:00</option>
            <option value="12:00 - 14:00">12:00 - 14:00</option>
            <option value="14:00 - 16:00">14:00 - 16:00</option>
            <option value="16:00 - 18:00">16:00 - 18:00</option>
            <option value="18:00 - 20:00">18:00 - 20:00</option>
            <option value="20:00 - 22:00">20:00 - 22:00</option>
            <option value="22:00 - 00:00">22:00 - 00:00</option>
          </select>

          <label className="block mb-2">
            Attendees(number of people attending)
          </label>
          <input
            type="number"
            name="attendees"
            value={form.attendees}
            onChange={handleChange}
            className="w-full mb-4 p-2 border rounded"
          />

          {["teacher", "principal"].includes(userRole) && (
            <label className="inline-flex items-center mb-4">
              <input
                type="checkbox"
                name="isSpecial"
                checked={form.isSpecial}
                onChange={handleChange}
                className="mr-2"
              />
              Special Booking
            </label>
          )}

          <button
            type="submit"
            className="bg-[#003891] w-full md:w-fit text-white py-2 px-4 rounded hover:bg-[#00247D] duration-500"
          >
            Book Room
          </button>
        </form>
      </div>
    </section>
  );
};

export default BookingForm;
