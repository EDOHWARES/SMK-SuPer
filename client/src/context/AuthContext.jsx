import React, { createContext, useState, useEffect } from "react";

// Create the AuthContext
export const AuthContext = createContext();

// AuthProvider component to wrap the app
export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  // Simulate fetching user data (replace with actual API call if needed)
  useEffect(() => {
    const fetchUser = async () => {
      try {
        setLoading(true);
        const token = localStorage.getItem("token");
        if (token) {
          // Simulate fetching user data from an API
          const userData = {
            name: "John Doe",
            email: "john.doe@example.com",
            phone: "1234567890",
          };
          setUser(userData);
        }
      } catch (error) {
        console.error("Error fetching user data:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchUser();
  }, []);

  const login = (userData, token) => {
    localStorage.setItem("token", token);
    setUser(userData);
  };

  const logout = () => {
    localStorage.removeItem("token");
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, login, logout, loading }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;