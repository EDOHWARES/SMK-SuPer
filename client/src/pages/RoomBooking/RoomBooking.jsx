import React, { useEffect, useState } from "react";
import axios from "axios";
import { toast } from "react-hot-toast";

import seminar_room from "../../assets/images/semina-room.jpg";

const BookingForm = () => {
  const [rooms, setRooms] = useState([]);
  const [form, setForm] = useState({
    roomId: "",
    date: "",
    timeSlot: "",
    attendees: "",
    isSpecial: false,
  });

  console.log(form);

  useEffect(() => {
    const api_url = import.meta.env.VITE_API_URL;
    axios
      .get(`${api_url}/rooms`)
      .then((res) => setRooms(res.data))
      .catch((err) => toast.error("Failed to load rooms"));
  }, []);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setForm({ ...form, [name]: type === "checkbox" ? checked : value });
  };

  const handleSubmit = async (e) => {
    if (!form.roomId || !form.date || !form.timeSlot || !form.attendees) {
      toast.error("Please fill in all fields");
      return;
    }

    const api_url = import.meta.env.VITE_API_URL;
    console.log("submitting");
    e.preventDefault();
    try {
      const res = await axios.post(`${api_url}/bookings`, form);
      console.log(res.data);
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

          <label className="inline-flex items-center mb-4">
            <input
              type="checkbox"
              name="isSpecial"
              checked={form.isSpecial}
              onChange={handleChange}
              className="mr-2"
            />
            <span>Special Booking</span>
          </label>

          <button
            type="submit"
            className="bg-[#003891] block w-full md:w-fit text-white py-2 px-4 rounded hover:bg-[#00247D] duration-500"
          >
            Book Room
          </button>
        </form>
      </div>
    </section>
  );
};

export default BookingForm;
