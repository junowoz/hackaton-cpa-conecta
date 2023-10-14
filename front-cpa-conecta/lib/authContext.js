"use client";
import { createContext, useContext, useState } from "react";

const AuthContext = createContext();

export const useAuth = () => {
  return useContext(AuthContext);
};

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null); // Initially, the user is not logged in

  const login = (userData) => {
    setUser(userData);
  };

  const logout = () => {
    setUser(null);
    // Remove the token from local storage or cookies
    localStorage.removeItem("token");
  };

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
