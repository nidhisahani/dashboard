import React, { useContext, useState } from 'react'
import { StoreContext } from '../context/StoreContext';
// import { useNavigate } from 'react-router-dom'

function Signup() {
    // const navigate=useNavigate()
const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { signup } = useContext(StoreContext);

  const handleSignup = async (e) => {
    e.preventDefault();
    try {
      await signup(email, password)
    } catch (error) {
      alert(error);
    }
  };

  return (
    <div className="flex bg-color1 h-screen w-[100%]">
      <div className="flex  justify-center w-[100%] bg-amber-200 items-center">
        <form onSubmit={handleSignup}>
          <div className="flex-col  w-[100%] bg-amber-950 p-12 pt-10  rounded-xl">
            <h1 className="flex text-white text-4xl w-[100%]">Create Your Account</h1>
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
              SignUp
            </button>
            <div className='p-5'>
            <a className='text-white' href='/'>Already have an account?</a>
            </div>
          </div>
        </form>
      </div>
    </div>
  )
}

export default Signup