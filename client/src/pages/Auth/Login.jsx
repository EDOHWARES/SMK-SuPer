import React, { useState } from "react";
import axios from "axios";
import { toast } from "react-hot-toast";

const Login = ({ setToken, setUser }) => {
  const [form, setForm] = useState({ email: "", password: "" });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("/api/auth/login", form);
      setToken(res.data.token);
      setUser(res.data.user);
      toast.success("Login successful");
    } catch (err) {
      toast.error(err.response?.data?.error || "Login failed");
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="px-6 md:px-12 lg:px-20 max-w-[1440px] py-10 shadow-md rounded mt-[8rem] bg-white mx-auto"
    >
      <h2 className="text-xl font-bold mb-4">Teacher Login</h2>

      <label className="block mb-2">Email</label>
      <input
        type="email"
        name="email"
        value={form.email}
        onChange={handleChange}
        className="w-full mb-4 p-2 border rounded"
      />

      <label className="block mb-2">Password</label>
      <input
        type="password"
        name="password"
        value={form.password}
        onChange={handleChange}
        className="w-full mb-4 p-2 border rounded"
      />

      <button
        type="submit"
        className="bg-[#003891] text-white py-2 px-4 rounded hover:bg-[#00247D] duration-500"
z      >
        Login
      </button>
    </form>
  );
};

export default Login;
