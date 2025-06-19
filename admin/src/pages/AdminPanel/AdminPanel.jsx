import React, { useEffect, useState } from "react";
import axios from "axios";
import { toast } from "react-hot-toast";
import { FaUser } from "react-icons/fa";
import logo from "../../assets/images/logo.png";
import Sidebar from "../../components/Sidebar";
import { useNavigate } from "react-router-dom";
import Pibg from "../Pibg/Pibg";
import { MdConstruction } from "react-icons/md";
import SchoolShopAdmin from "../../components/Shop/Shop";

const AdminPanel = () => {
  const navigate = useNavigate();
  const [token, setToken] = useState(localStorage.getItem("adminToken"));
  const [activeTab, setActiveTab] = useState("dashboard");
  const [bookings, setBookings] = useState([]);
  console.log(bookings);
  const [rooms, setRooms] = useState([]);
  const [newRoom, setNewRoom] = useState({
    name: "",
    type: "library",
    capacity: 100,
  });
  const [loading, setLoading] = useState(false); // Loader state

  useEffect(() => {
    setToken(localStorage.getItem("adminToken"));

    if (!token) {
      toast.error("Unauthorized! Please log in.");
      navigate("/signin");
      return;
    }

    const validateToken = async () => {
      try {
        setLoading(true); // Show loader
        const api_url = import.meta.env.VITE_API_URL;
        await axios.get(`${api_url}/auth/validate`, {
          headers: { Authorization: `Bearer ${token}` },
        });
        fetchData(token);
      } catch (err) {
        toast.error("Session expired! Please log in again.");
        localStorage.removeItem("adminToken");
        navigate("/signin");
      } finally {
        setLoading(false); // Hide loader
      }
    };

    validateToken();
  }, [navigate]);

  const fetchData = async (token) => {
    try {
      setLoading(true); // Show loader
      const api_url = import.meta.env.VITE_API_URL;
      const [bRes, rRes] = await Promise.all([
        axios.get(`${api_url}/bookings`, {
          headers: { Authorization: `Bearer ${token}` },
        }),
        axios.get(`${api_url}/rooms`, {
          headers: { Authorization: `Bearer ${token}` },
        }),
      ]);
      setBookings(bRes.data);
      setRooms(rRes.data);
    } catch (err) {
      toast.error("Failed to load admin data");
    } finally {
      setLoading(false); // Hide loader
    }
  };

  const handleRoomCreate = async () => {
    const headers = { Authorization: `Bearer ${token}` };
    try {
      setLoading(true); // Show loader
      const api_url = import.meta.env.VITE_API_URL;
      await axios.post(`${api_url}/rooms`, newRoom, {
        headers,
      });
      toast.success("Room added");
      fetchData(token);
    } catch (err) {
      toast.error(err.response?.data?.error || "Room add failed");
    } finally {
      setLoading(false); // Hide loader
    }
  };

  const handleRoomDelete = async (id) => {
    const headers = { Authorization: `Bearer ${token}` };
    try {
      setLoading(true); // Show loader
      const api_url = import.meta.env.VITE_API_URL;
      await axios.delete(`${api_url}/rooms/${id}`, { headers });
      toast.success("Room deleted");
      fetchData(token);
    } catch (err) {
      toast.error("Failed to delete room");
    } finally {
      setLoading(false); // Hide loader
    }
  };

  const handleBookingApproval = async (id) => {
    const headers = { Authorization: `Bearer ${token}` };
    try {
      setLoading(true); // Show loader
      const api_url = import.meta.env.VITE_API_URL;
      await axios.patch(`${api_url}/bookings/${id}/approve`, null, { headers });
      toast.success(`Booking Approved!`);
      fetchData(token);
    } catch (err) {
      toast.error("Failed to update booking status");
    } finally {
      setLoading(false); // Hide loader
    }
  };

  const handleBookingRejection = async (id) => {
    const headers = { Authorization: `Bearer ${token}` };
    try {
      setLoading(true); // Show loader
      const api_url = import.meta.env.VITE_API_URL;
      await axios.patch(`${api_url}/bookings/${id}/reject`, null, { headers });
      toast.success(`Booking Rejected!`);
      fetchData(token);
    } catch (err) {
      toast.error("Failed to update booking status");
    } finally {
      setLoading(false); // Hide loader
    }
  };

  const Header = () => (
    <div className="bg-white shadow p-4 flex justify-between items-center">
      <img src={logo} alt="logo" width={50} />
      <div className="flex items-center gap-6">
        <span className="text-gray-700 text-lg font-medium">
          Welcome, Admin
        </span>
        <div className="relative group">
          <button className="flex items-center gap-2 text-gray-700 hover:text-blue-700">
            <FaUser className="text-xl" />
            <span>Account</span>
          </button>
          <ul className="absolute right-0 mt-2 w-40 bg-white shadow-md rounded-md border hidden group-hover:block">
            <li className="p-2 hover:bg-gray-100 cursor-pointer">Profile</li>
            <li className="p-2 hover:bg-gray-100 cursor-pointer">Settings</li>
            <li
              className="p-2 hover:bg-gray-100 cursor-pointer text-red-600"
              onClick={() => {
                toast.success("Logged out successfully");
              }}
            >
              Logout
            </li>
          </ul>
        </div>
      </div>
    </div>
  );

  return (
    <div className="flex h-screen">
      <Sidebar activeTab={activeTab} setActiveTab={setActiveTab} />
      <div className="flex-1 flex flex-col ">
        <Header />
        <main className="p-6 overflow-y-auto">
          {loading && (
            <div className="flex flex-col gap-4 justify-center items-center">
              <div className="loader border-t-4 border-blue-500 w-12 h-12 rounded-full animate-spin"></div>

              <p className="text-gray-600 mt-6 text-center">Please wait...</p>
            </div>
          )}
          {!loading && activeTab === "dashboard" && (
            <section>
              <h2 className="text-2xl font-semibold mb-4">All Bookings</h2>
              <div className="overflow-x-scroll">
                <table className="w-full text-sm border">
                  <thead className="bg-gray-100">
                    <tr>
                      <th>User</th>
                      <th>Room</th>
                      <th>Date</th>
                      <th>Slot</th>
                      <th>Status</th>
                      <th>Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    {bookings.map((b) => (
                      <tr key={b._id} className="border-t text-center">
                        <td className="p-2">{b.userId?.name}</td>
                        <td>{b.roomId?.name}</td>
                        <td>{new Date(b.date).toLocaleDateString()}</td>
                        <td>{b.timeSlot}</td>
                        <td
                          className={`p-2 font-semibold ${
                            b.status === "approved"
                              ? "bg-green-100 text-green-700"
                              : b.status === "pending"
                              ? "bg-yellow-100 text-yellow-700"
                              : "bg-red-100 text-red-700"
                          }`}
                        >
                          {b.status}
                        </td>
                        <td className="p-2">
                          {b.status === "pending" && (
                            <div className="flex gap-2 justify-center">
                              <button
                                onClick={() => handleBookingApproval(b._id)}
                                className="bg-green-500 text-white px-3 py-1 rounded hover:bg-green-600"
                              >
                                Approve
                              </button>
                              <button
                                onClick={() => handleBookingRejection(b._id)}
                                className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600"
                              >
                                Reject
                              </button>
                            </div>
                          )}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </section>
          )}

          {!loading && activeTab === "rooms" && (
            <section className="overflow-x-scroll">
              <h2 className="text-2xl font-semibold mb-4">Manage Rooms</h2>
              <div className="flex gap-2 mb-4">
                <input
                  placeholder="Name"
                  value={newRoom.name}
                  onChange={(e) =>
                    setNewRoom({ ...newRoom, name: e.target.value })
                  }
                  className="border px-2 py-1 rounded"
                />
                <select
                  value={newRoom.type}
                  onChange={(e) =>
                    setNewRoom({ ...newRoom, type: e.target.value })
                  }
                  className="border px-2 py-1 rounded"
                >
                  <option value="library">Library</option>
                  <option value="meeting">Meeting</option>
                  <option value="special">Special</option>
                </select>
                <input
                  type="number"
                  placeholder="Capacity"
                  value={newRoom.capacity}
                  onChange={(e) =>
                    setNewRoom({ ...newRoom, capacity: e.target.value })
                  }
                  className="border px-2 py-1 rounded"
                />
                <button
                  onClick={handleRoomCreate}
                  className="bg-blue-600 text-white px-4 py-1 rounded"
                >
                  Add
                </button>
              </div>
              <ul className="space-y-2">
                {rooms.map((r) => (
                  <li
                    key={r._id}
                    className="flex justify-between border px-3 py-2 rounded hover:bg-gray-300 duration-500"
                  >
                    <span>
                      {r.name} (type - {r.type}, capacity - {r.capacity})
                    </span>
                    <button
                      onClick={() => handleRoomDelete(r._id)}
                      className="text-red-600 cursor-pointer"
                    >
                      Delete
                    </button>
                  </li>
                ))}
              </ul>
            </section>
          )}

          {!loading && activeTab === "pibg" && <Pibg />}
          {!loading && activeTab === "schoolShop" && (
            <SchoolShopAdmin />
          )}
        </main>
      </div>
    </div>
  );
};

export default AdminPanel;
