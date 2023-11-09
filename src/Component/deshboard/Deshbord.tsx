import { NavLink, Outlet } from "react-router-dom";
import Navber from "../Navber";

import "../style/button.css";
const Deshbord = () => {
  return (
    <div className="bg-base-200">
      <Navber></Navber>
      <div className="flex flex-col lg:flex-row justify-evenly lg:mt-24 ">
        <div className="my-3 bg-slate-100 justify-center  rounded-md shadow-lg border-gray-2">
          <div className="bg-transparent bg-gray-400 w-96 rounded-md coverimage">
            <div
              style={{ position: "relative", bottom: "-80px" }}
              className="avatar p-5 flex justify-center "
            >
              <div className="w-24 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                <img src="https://wac-cdn.atlassian.com/dam/jcr:ba03a215-2f45-40f5-8540-b2015223c918/Max-R_Headshot%20(1).jpg?cdnVersion=1305" />
              </div>
            </div>
          </div>
          <p className="font-bold text-center text-sm p-1 relative top-14 text-gray-600">
            joni kumar das{" "}
          </p>
          <hr />

          <div className="flex flex-col justify-center items-center my-14">
            <ul>
              <li>
                <button className=" font-semibold smky-btn3 relative hover:text-[#fdfdfd] py-2 px-6 after:absolute after:h-1 after:hover:h-[200%] transition-all duration-500 hover:transition-all hover:duration-500 after:transition-all after:duration-500 after:hover:transition-all after:hover:duration-500 overflow-hidden z-20 after:z-[-20] after:bg-[#570ef6] after:rounded-t-full after:w-full after:bottom-0 after:left-0 text-gray-700">
                  <NavLink to="profile">Update profile</NavLink>
                </button>
              </li>
              <li className="my-2">
                <button className="smky-btn3 relative hover:text-[#fcfefd] py-2 px-6 after:absolute after:h-1 after:hover:h-[200%] transition-all duration-500 hover:transition-all hover:duration-500 after:transition-all after:duration-500 after:hover:transition-all after:hover:duration-500 overflow-hidden z-20 after:z-[-20] after:bg-[#570ef6] after:rounded-t-full after:w-full after:bottom-0 after:left-0 text-gray-700">
                  <NavLink to="add-User">Add User</NavLink>
                </button>
              </li>
              <li className="my-2">
                <button className="smky-btn3 relative hover:text-[#fcfefd] py-2 px-6 after:absolute after:h-1 after:hover:h-[200%] transition-all duration-500 hover:transition-all hover:duration-500 after:transition-all after:duration-500 after:hover:transition-all after:hover:duration-500 overflow-hidden z-20 after:z-[-20] after:bg-[#570ef6] after:rounded-t-full after:w-full after:bottom-0 after:left-0 text-gray-700">
                  <NavLink to="add-mile">Add Mile</NavLink>
                </button>
              </li>

              <li className="my-2">
                <button className="smky-btn3 relative hover:text-[#f8faf6] py-2 px-6 after:absolute after:h-1 after:hover:h-[200%] transition-all duration-500 hover:transition-all hover:duration-500 after:transition-all after:duration-500 after:hover:transition-all after:hover:duration-500 overflow-hidden z-20 after:z-[-20] after:bg-[#570ef6] after:rounded-t-full after:w-full after:bottom-0 after:left-0 text-gray-700">
                  <NavLink to="add-cost">Add Cost</NavLink>
                </button>
              </li>
              <li className="my-2">
                <button className="smky-btn3 relative hover:text-[#fffffe] py-2 px-6 after:absolute after:h-1 after:hover:h-[200%] transition-all duration-500 hover:transition-all hover:duration-500 after:transition-all after:duration-500 after:hover:transition-all after:hover:duration-500 overflow-hidden z-20 after:z-[-20] after:bg-[#570ef6] after:rounded-t-full after:w-full after:bottom-0 after:left-0 text-gray-700">
                  <NavLink to="payment">Add Payment</NavLink>
                </button>
              </li>
              <li className="my-2">
                <button className="smky-btn3 relative hover:text-[#fdfdfd] py-2 px-6 after:absolute after:h-1 after:hover:h-[200%] transition-all duration-500 hover:transition-all hover:duration-500 after:transition-all after:duration-500 after:hover:transition-all after:hover:duration-500 overflow-hidden z-20 after:z-[-20] after:bg-[#570ef6] after:rounded-t-full after:w-full after:bottom-0 after:left-0 text-gray-700">
                  <NavLink to="settings">Settings</NavLink>
                </button>
              </li>
            </ul>
          </div>
        </div>

        {/* desh bord work here  */}
        <div>
          <div className="flex flex-col lg:flex-row gap-4 my-10 h-40">
            <div className="card w-96 lg:w-80 bg-lime-200 shadow-xl mx-1">
              <div className="card-body">
                <h2 className="card-title">Mile rate</h2>
                <p> taka 25</p>
                <div className="card-actions justify-end">
                  <button className="font-semibold smky-btn3 relative hover:text-[#fdfdfd] py-2 px-6 after:absolute after:h-1 after:hover:h-[200%] transition-all duration-500 hover:transition-all hover:duration-500 after:transition-all after:duration-500 after:hover:transition-all after:hover:duration-500 overflow-hidden z-20 after:z-[-20] after:bg-[#570ef6] after:rounded-t-full after:w-full after:bottom-0 after:left-0 text-gray-700">
                    show cost
                  </button>
                </div>
              </div>
            </div>
            <div className="card  w-96 lg:w-80 mx-1 bg-red-400 shadow-xl">
              <div className="card-body">
                <h2 className="card-title">Payment</h2>
                <p> taka 1500</p>
              </div>
            </div>
            <div className="card w-96 lg:w-80 mx-1 bg-blue-400 shadow-xl">
              <div className="card-body">
                <h2 className="card-title">Total Mile</h2>
                <p> 52.5</p>
                <div className="card-actions justify-end">
                  <button className="font-semibold smky-btn3 relative hover:text-[#fdfdfd] py-2 px-6 after:absolute after:h-1 after:hover:h-[200%] transition-all duration-500 hover:transition-all hover:duration-500 after:transition-all after:duration-500 after:hover:transition-all after:hover:duration-500 overflow-hidden z-20 after:z-[-20] after:bg-[#570ef6] after:rounded-t-full after:w-full after:bottom-0 after:left-0 text-gray-700">
                    Show all
                  </button>
                </div>
              </div>
            </div>
          </div>
          <hr className="bg-base-800" />
          <div>
        <Outlet></Outlet>
      </div>
        </div>
      </div>
      
    </div>
  );
};

export default Deshbord;
