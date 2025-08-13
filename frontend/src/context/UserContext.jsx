import React, { createContext, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

// 1. Create the context
export const UserContext = createContext();

// 2. Create the provider
export const UserProvider = ({ children }) => {
  const [user, setUser] = useState(() => {
    // Initialize user state from sessionStorage
    const storedUser = sessionStorage.getItem("user");
    return storedUser ? JSON.parse(storedUser) : null;
  });

  // Update sessionStorage whenever user changes
  useEffect(() => {
    if (user) {
      sessionStorage.setItem("user", JSON.stringify(user));
    } 
  }, [user]);

  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
};
