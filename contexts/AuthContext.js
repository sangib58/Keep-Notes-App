import { createContext, useContext, useState, useEffect } from "react";
import authService from "../services/authService";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    checkUser();
  }, []);

  const checkUser = async () => {
    setLoading(true);
    const response = await authService.getLoggedInUser();
    if (response?.error) {
      setUser(null);
    } else {
      setUser(response);
    }
    setLoading(false);
  };

  const login = async (email, password) => {
    const response = await authService.loginUser(email, password);
    if (response?.error) {
      return response;
    }
    await checkUser();
    return { success: true };
  };

  const register = async (email, password) => {
    const response = await authService.registerUser(email, password);
    if (response?.error) {
      return response;
    }
    return login(email, password);
  };

  const logOut = async () => {
    await authService.logoutUser();
    setUser(null);
    await checkUser();
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        loading,
        login,
        register,
        logOut,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
