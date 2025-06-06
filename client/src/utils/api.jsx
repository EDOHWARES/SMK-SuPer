// import axios from "axios";

// const API_URL = process.env.REACT_APP_API_URL || "http://localhost:5003/api";

// const api = axios.create({
//   baseURL: API_URL,
//   headers: {
//     "Content-Type": "application/json",
//   },
// });

// // Add auth token to requests
// api.interceptors.request.use((config) => {
//   const token = localStorage.getItem("token");
//   if (token) {
//     config.headers.Authorization = `Bearer ${token}`;
//   }
//   return config;
// });

// export default api;

import axios from "axios";

const CMS_API_BASE = "http://localhost:1337/api";

export const fetchHomepage = async () => {
  try {
    const res = await axios.get(
      `${CMS_API_BASE}/home?populate[Sections][populate]=*`
    );
    return res.data.data;
  } catch (err) {
    console.error("Error fetching homepage:", err);
    return null;
  }
};
