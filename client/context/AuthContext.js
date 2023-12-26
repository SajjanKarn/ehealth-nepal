"use client";
import { createContext, useEffect, useState } from "react";

const AuthContext = createContext();

export const AuthContextProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const user = localStorage.getItem("user");
    if (user) {
      setUser(JSON.parse(user));
    }
  }, []);

  const login = (data) => {
    if (data?._id) {
      localStorage.setItem("user", JSON.stringify(data));
      setUser(data);
      setError(null);
    }
  };

  const logout = () => {
    localStorage.removeItem("user");
    setUser(null);
    setError(null);
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        setUser,
        error,
        login,
        logout,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
