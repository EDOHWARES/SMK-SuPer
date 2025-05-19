import React, { useState } from "react";
import axios from "axios";
import toast from "react-hot-toast";

export default function SignUp() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    role: "",
  });

  const [loading, setLoading] = useState(false);

  const [errors, setErrors] = useState({});

  const userTypes = [
    { value: "", label: "Select User Type" },
    { value: "class_teacher", label: "Class_Teacher" },
    { value: "regular_teacher", label: "Regular_Teacher" },
    { value: "jpn_ppd_individual", label: "JPN_PPD_Individual" },
  ];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const validateForm = () => {
    const newErrors = {};

    // Name validation
    if (!formData.name.trim()) {
      newErrors.name = "Name is required";
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!emailRegex.test(formData.email)) {
      newErrors.email = "Invalid email format";
    }

    // Password validation
    if (!formData.password) {
      newErrors.password = "Password is required";
    } else if (formData.password.length < 8) {
      newErrors.password = "Password must be at least 8 characters long";
    }

    // User type validation
    if (!formData.role) {
      newErrors.userType = "Please select a user type";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    if (validateForm()) {
      try {
        const api_url = import.meta.env.VITE_API_URL;
        console.log(api_url)
        console.log(formData)


        // Send the form data to the signup API
        const response = await axios.post(`${api_url}/auth/signup`, formData);
        console.log(response);

        // Handle successful signup
        console.log("Signup successful:", response.data);
        toast.success("Signup successful! Please log in.");
        setLoading(false);
        // Redirect to the login page
        window.location.href = "/signin";
      } catch (error) {
        // Handle errors
        if (
          error.response &&
          error.response.data &&
          error.response.data.error
        ) {
          toast.error(`Signup failed: ${error.response.data.error}`);
          setLoading(false);
        } else {
          toast.error("Signup failed. Please try again later.");
          setLoading(false);
        }
      } finally {
        setLoading(false);
      }
    }
  };

  return (
    <div className="min-h-screen flex justify-center bg-gray-100 px-4 py-8">
      <div className="bg-white p-8 rounded-xl h-fit shadow-md w-full max-w-md">
        <h2 className="text-2xl font-bold mb-6 text-center text-gray-800">
          Sign Up
        </h2>
        <div>
          <div className="mb-4">
            <label
              htmlFor="name"
              className="block text-gray-700 font-semibold mb-2"
            >
              Full Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className={`w-full px-3 py-2 border rounded-md focus:outline-none 
                ${errors.name ? "border-red-500" : "border-gray-300"}`}
              placeholder="Enter your full name"
            />
            {errors.name && (
              <p className="text-red-500 text-sm mt-1">{errors.name}</p>
            )}
          </div>

          <div className="mb-4">
            <label
              htmlFor="email"
              className="block text-gray-700 font-semibold mb-2"
            >
              Email Address
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className={`w-full px-3 py-2 border rounded-md focus:outline-none 
                ${errors.email ? "border-red-500" : "border-gray-300"}`}
              placeholder="Enter your email"
            />
            {errors.email && (
              <p className="text-red-500 text-sm mt-1">{errors.email}</p>
            )}
          </div>

          <div className="mb-4">
            <label
              htmlFor="password"
              className="block text-gray-700 font-semibold mb-2"
            >
              Password
            </label>
            <input
              type="password"
              id="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              className={`w-full px-3 py-2 border rounded-md focus:outline-none 
                ${errors.password ? "border-red-500" : "border-gray-300"}`}
              placeholder="Create a password"
            />
            {errors.password && (
              <p className="text-red-500 text-sm mt-1">{errors.password}</p>
            )}
          </div>

          <div className="mb-6">
            <label
              htmlFor="userType"
              className="block text-gray-700 font-semibold mb-2"
            >
              User Type
            </label>
            <select
              id="userType"
              name="role"
              value={formData.userType}
              onChange={handleChange}
              className={`w-full px-3 py-2 border rounded-md focus:outline-none 
                ${errors.userType ? "border-red-500" : "border-gray-300"}`}
            >
              {userTypes.map((type) => (
                <option key={type.value} name="role" value={type.value}>
                  {type.label}
                </option>
              ))}
            </select>
            {errors.userType && (
              <p className="text-red-500 text-sm mt-1">{errors.userType}</p>
            )}
          </div>

          <button
            onClick={handleSubmit}
            className="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600 transition duration-300"
          >
            {loading ? "Loading..." : "Sign Up"}
          </button>
        </div>

        <div className="text-center mt-4">
          <p className="text-gray-600">
            Already have an account?{" "}
            <a href="/signin" className="text-blue-500 hover:underline">
              Sign In
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}
