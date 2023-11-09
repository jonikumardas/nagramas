import { NavLink } from "react-router-dom";
import logo from "../assets/logo.png";
import "../Component/style/Navber.css";
const Navber = () => {
  return (
    <div style={{borderBottom:"1px solid gray" ,position:"fixed" ,top:"0", zIndex:99999999}} className="navbar bg-base-100 m-0 p-0 shadow-2xl">
      <div className="flex-1 lg:ms-40">
       <NavLink to= '/'>
       <img
          style={{ width: "200px ", height: "100px" }}
          src={logo}
          alt="logo icon "
        />
       </NavLink>
      </div>
      <div className="flex-end lg:me-40">
        <div className="me-5">
          <button className="coustom-btn">
            <NavLink  className="text-sm font-bold" to="/about">About</NavLink>
          </button>
        </div>
        <div className="me-5">
          <button className="coustom-btn">
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
            <button className="button ms-2 my-2">
            <span>
              <NavLink
                to="/deshbord"
                style={{ textDecoration: "none", color: "#ffff", }}
              >
                Deshboard
              </NavLink>
            </span>
            <i></i>
          </button>
            </li>
            <li>
            <button className="button ms-2  my-2">
            <span>
              {" "}
              <NavLink
                to="/log-in"
                style={{ textDecoration: "none", color: "#ffff" }}
              >
               Log in
              </NavLink>
            </span>
            <i></i>
          </button>
            </li>
            <li>
            <button className="button ms-2  my-2">
            <span>
              {" "}
              <NavLink
                to="/settings"
                style={{ textDecoration: "none", color: "#ffff" }}
              >
               Settings
              </NavLink>
            </span>
            <i></i>
          </button>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navber;
