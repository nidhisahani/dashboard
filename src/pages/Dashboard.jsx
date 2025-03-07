import React from "react";
import RightComponent from "../components/RightComponent.jsx";

const data=['Dashboard','Products','Wallets','Summary','Accounts','Settings']

function Dashboard({ handleLogout }) {

  const email = localStorage.getItem("email");
  const name = email.replace(/@.*$/, "");

  return (
    <div className="flex flex-row w-[100%] bg-black h-screen">
      <div className="flex flex-col  w-[30%] bg-black text-white font-extrabold h-screen justify-between p-3">
        <div className="flex flex-col m-10 text-white ">
          <div className="flex text-3xl justify-center">{name}</div>
          <div className="flex text-xl justify-center">{email}</div>
        </div>
        <div className="flex-col flex items-center gap-2">
        {
          data.map((item,idx)=>(
            <div key={idx}>
              {item}
            </div> 
          ))
        }
        </div>
        <div className="m-10">
          <button onClick={handleLogout}>Logout</button>
        </div>
      </div>
      <div className="flex flex-row w-[100%] rounded-xl ">
        <RightComponent />
      </div>
    </div>
  );
}

export default Dashboard;
