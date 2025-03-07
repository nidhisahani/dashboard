import { createContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { auth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "../AuthService/firebaseConfig";

export const StoreContext = createContext(null);

const StoreContextProvider = ({ children }) => {
  const [data, setData] = useState([]);
  const [apiloading, setApiLoading] = useState(true);
  const [error, setError] = useState(null);
  const token = localStorage.getItem("token");
  const navigate = useNavigate();

  // Signup function
  const signup = async (email, password) => {
    try {
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;
      localStorage.setItem("token", user.accessToken);
      localStorage.setItem("email", user.email);
      navigate("/dashboard");
    } catch (error) {
      throw new Error(error.message || "Signup failed. Please try again.");
    }
  };


  // Login function
  const login = async (email, password) => {
    try {
      const userCredential = await signInWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;
      localStorage.setItem("token", user.accessToken);
      localStorage.setItem("email", user.email);
      navigate("/dashboard");
    } catch (error) {
      throw new Error(error.message || "Login failed. Please try again.");
    }
  };

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        setTimeout(async () => {
          const response = await fetch('https://fakestoreapi.com/products');
          const result = await response.json();
          setData(result);
          setApiLoading(false);
        }, 3000);
      } catch (error) {
        setError(error);
        setApiLoading(false);
      }
    };
    fetchProducts();
  }, []);

  const contextValue = {
    token,
    signup,
    login,
    error,
    data,
    apiloading
  };

  return (
    <StoreContext.Provider value={contextValue}>
      {children}
    </StoreContext.Provider>
  );
};

export default StoreContextProvider;
