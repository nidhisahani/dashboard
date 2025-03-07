import React, { useState, useContext } from "react";
import { StoreContext } from "../context/StoreContext";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const { login } = useContext(StoreContext);

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      await login(email, password).then(() => {
        alert("Login successful");
      });
    } catch (error) {
      setError(error.message || "An error occur");
      alert(error);
    }
  };

  return (
    <div className="flex bg-color1 h-screen w-[100%]">
      <div className="flex  justify-center w-[100%] bg-amber-200 items-center">
        <form onSubmit={handleLogin}>
          <div className="flex-col  w-[100%] bg-amber-950 p-12 pt-10  rounded-xl">
            {error && (
              <p className="flex flex-wrap text-xs text-amber-950">
                {error?.message}
              </p>
            )}
            <h1 className="flex text-white text-4xl w-[100%]">Login Your Account</h1>
            <div className="flex-col w-[100%] pt-4">
              <input
                type="email"
                placeholder="Email address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                aria-label="Email"
                className="bg-amber-950 text-white  focus:outline-none focus:border-none p-2 w-[100%]"
              />
            </div>
            <hr className="my-4 border-t-2 border-white" />
            <div className="flex-col w-[100%] pt-5">
              <input
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                aria-label="Password"
                className="bg-amber-950 text-white  focus:outline-none focus:border-none p-2 w-[100%]"
              />
            </div>
            <hr className="my-4 border-t-2 border-white" />
            <button
              type="submit"
              className="flex rounded-lg w-[100%] justify-center bg-color0 bg-amber-50  text-black mt-3 px-20 py-3 text-xs"
            >
              Login
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
