import axios from "axios";
import { createContext, useEffect, useState } from "react";

export const AuthContext = createContext();

export const AuthContextProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(
    JSON.parse(localStorage.getItem("user") || null)
  );

  const login = async (inputs) => {
    const res = await axios.post(
      `${import.meta.env.VITE_API}/auth/login`,
      inputs,
      {
        withCredentials: true,
        credentials: "include",
      }
    );
    // console.log(res.data);
    setCurrentUser(res.data);
  };

  const logout = async () => {
    await axios.post(`${import.meta.env.VITE_API}/auth/logout`);
    setCurrentUser(null);
  };

  useEffect(() => {
    localStorage.setItem("user", JSON.stringify(currentUser));
  }, [currentUser]);

  return (
    <AuthContext.Provider value={{ currentUser, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
