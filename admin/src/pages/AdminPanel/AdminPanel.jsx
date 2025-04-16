import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { toast } from 'react-hot-toast';
import { FaUser, FaDoorOpen, FaCalendarAlt, FaSignOutAlt } from 'react-icons/fa';

const AdminPanel = ({ token }) => {
  const [activeTab, setActiveTab] = useState('dashboard');
  const [bookings, setBookings] = useState([]);
  const [rooms, setRooms] = useState([]);
  const [users, setUsers] = useState([]);
  const [newRoom, setNewRoom] = useState({ name: '', type: 'library', capacity: 10 });

  const headers = { Authorization: `Bearer ${token}` };

//   useEffect(() => {
//     fetchData();
//   }, []);

  const fetchData = async () => {
    try {
      const [bRes, rRes, uRes] = await Promise.all([
        axios.get('/api/bookings', { headers }),
        axios.get('/api/rooms', { headers }),
        axios.get('/api/users', { headers }),
      ]);
      setBookings(bRes.data);
      setRooms(rRes.data);
      setUsers(uRes.data);
    } catch (err) {
      toast.error('Failed to load admin data');
    }
  };

  const handleRoomCreate = async () => {
    try {
      await axios.post('/api/rooms', newRoom, { headers });
      toast.success('Room added');
      fetchData();
    } catch (err) {
      toast.error(err.response?.data?.error || 'Room add failed');
    }
  };

  const handleRoomDelete = async (id) => {
    try {
      await axios.delete(`/api/rooms/${id}`, { headers });
      toast.success('Room deleted');
      fetchData();
    } catch (err) {
      toast.error('Failed to delete room');
    }
  };

  const Sidebar = () => (
    <div className="bg-gray-800 text-white w-60 h-screen p-5 space-y-6">
      <h2 className="text-2xl font-bold">Admin</h2>
      <div className="space-y-4">
        <button onClick={() => setActiveTab('dashboard')} className="flex items-center gap-2 hover:bg-blue-600 px-3 py-2 rounded">
          <FaCalendarAlt /> Dashboard
        </button>
        <button onClick={() => setActiveTab('rooms')} className="flex items-center gap-2 hover:bg-blue-600 px-3 py-2 rounded">
          <FaDoorOpen /> Rooms
        </button>
        <button onClick={() => setActiveTab('users')} className="flex items-center gap-2 hover:bg-blue-600 px-3 py-2 rounded">
          <FaUser /> Users
        </button>
        <button className="flex items-center gap-2 hover:bg-blue-600 px-3 py-2 rounded">
          <FaSignOutAlt /> Logout
        </button>
      </div>
    </div>
  );

  const Header = () => (
    <div className="bg-white shadow p-4 flex justify-between items-center">
      <h1 className="text-xl font-bold text-blue-700">Room Booking Admin Panel</h1>
    </div>
  );

  return (
    <div className="flex h-screen">
      <Sidebar />
      <div className="flex-1 flex flex-col">
        <Header />
        <main className="p-6 overflow-y-auto">
          {activeTab === 'dashboard' && (
            <section>
              <h2 className="text-2xl font-semibold mb-4">All Bookings</h2>
              <div className="overflow-auto">
                <table className="w-full text-sm border">
                  <thead className="bg-gray-100">
                    <tr>
                      <th>User</th><th>Room</th><th>Date</th><th>Slot</th><th>Status</th>
                    </tr>
                  </thead>
                  <tbody>
                    {bookings.map(b => (
                      <tr key={b._id} className="border-t">
                        <td>{b.userId?.name}</td>
                        <td>{b.roomId?.name}</td>
                        <td>{new Date(b.date).toLocaleDateString()}</td>
                        <td>{b.timeSlot}</td>
                        <td>{b.status}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </section>
          )}

          {activeTab === 'rooms' && (
            <section>
              <h2 className="text-2xl font-semibold mb-4">Manage Rooms</h2>
              <div className="flex gap-2 mb-4">
                <input placeholder="Name" value={newRoom.name} onChange={e => setNewRoom({ ...newRoom, name: e.target.value })} className="border px-2 py-1 rounded" />
                <select value={newRoom.type} onChange={e => setNewRoom({ ...newRoom, type: e.target.value })} className="border px-2 py-1 rounded">
                  <option value="library">Library</option>
                  <option value="meeting">Meeting</option>
                  <option value="special">Special</option>
                </select>
                <input type="number" placeholder="Capacity" value={newRoom.capacity} onChange={e => setNewRoom({ ...newRoom, capacity: e.target.value })} className="border px-2 py-1 rounded" />
                <button onClick={handleRoomCreate} className="bg-blue-600 text-white px-4 py-1 rounded">Add</button>
              </div>
              <ul className="space-y-2">
                {rooms.map(r => (
                  <li key={r._id} className="flex justify-between border px-3 py-2 rounded">
                    <span>{r.name} ({r.type}, {r.capacity})</span>
                    <button onClick={() => handleRoomDelete(r._id)} className="text-red-600">Delete</button>
                  </li>
                ))}
              </ul>
            </section>
          )}

          {activeTab === 'users' && (
            <section>
              <h2 className="text-2xl font-semibold mb-4">Users</h2>
              <ul className="space-y-2">
                {users.map(u => (
                  <li key={u._id} className="border px-3 py-2 rounded">
                    {u.name} ({u.email}) - <strong>{u.role}</strong>
                  </li>
                ))}
              </ul>
            </section>
          )}
        </main>
      </div>
    </div>
  );
};

export default AdminPanel;