import { NavLink } from "react-router-dom";
import logo from "../assets/logo.png";
import "../Component/style/Navber.css";
const Navber = () => {
  return (
    <div className="navbar bg-base-100 m-0 p-0">
      <div className="flex-1 lg:ms-40">
        <img
          style={{ width: "200px ", height: "100px" }}
          src={logo}
          alt="logo icon "
        />
      </div>
      <div className="flex-end lg:me-40">
        <div className="me-5">
          <button>
            <NavLink  className="text-sm font-bold" to="/about">About</NavLink>
          </button>
        </div>
        <div className="me-5">
          <button>
            <NavLink className="text-sm font-bold" to="/contact">Contact</NavLink>
          </button>
        </div>

        <div className="dropdown dropdown-end me-4">
          <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
            <div className="avatar online">
              <div className="w-12 rounded-full">
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSpksu6S3Rc6c62Ce5RmC5DGRK9Bu3Q4Nal0A&usqp=CAU" />
              </div>
            </div>
          </label>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
          >
            <li>
              <NavLink to="/deshbord">Deshboard</NavLink>
            </li>

            <li>
              <NavLink to="/log-in">Log in</NavLink>
            </li>
            <li>
              <NavLink to="/settings">Settings</NavLink>
            </li>
            
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navber;
