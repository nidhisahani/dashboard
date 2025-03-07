import { createContext } from "react";
import { useNavigate } from "react-router-dom";

export const StoreContext = createContext(null);

const StoreContextProvider = ({ children }) => {
  const token = localStorage.getItem("token");

  const navigate = useNavigate();

  const login = async (email, password) => {
    try {
      const response = await fetch("https://reqres.in/api/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      });

      if (!response.ok) {
        throw new Error("Invalid email or password. Please try again.");
      }

      const data = await response.json();
      const { token } = data;

      localStorage.setItem("token", token);
      localStorage.setItem("email", email);

      navigate("/dashboard");
    } catch (error) {
      if (error.message === "Failed to fetch") {
        throw new Error(
          "No response from the server. Please check your connection."
        );
      } else {
        throw new Error(
          error.message || "An error occurred. Please try again."
        );
      }
    }
  };
  const contextValue = {
    login,
    token,
  };
  return (
    <StoreContext.Provider value={contextValue}>
      {children}
    </StoreContext.Provider>
  );
};

export default StoreContextProvider;
