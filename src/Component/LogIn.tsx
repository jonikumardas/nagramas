import { NavLink } from "react-router-dom";
import "../Component/style/login.css";
const LogIn = () => {
  return (
    <div className="login-box">
      <div className="avatar placeholder flex justify-center ">
        <div
          style={{ background: "#333" }}
          className="bg-neutral-focus text-neutral-content rounded-full w-24 "
        >
          <span className="text-2xl text-base-100">Log in</span>
        </div>
      </div>
      <form>
        <div className="user-box">
          <input type="text" name="name" required />
          <label>Username</label>
        </div>
        <div className="user-box">
          <input type="password" name="password" required />
          <label>Password</label>
        </div>
        <center>
          <button className="spacial" type="submit">
            log in
            <span></span>
          </button>
        </center>
      </form>
      <div className="my-5" style={{border:"1px solid #ffffff"}}></div>
      <div>
        <p className="text-white">
          Don't have account?
          <button className="button ms-2">
            <span>
              {" "}
              <NavLink
                to="/register"
                style={{ textDecoration: "none", color: "#ffff" }}
              >
                register
              </NavLink>
            </span>
            <i></i>
          </button>
        </p>
      </div>
    </div>
  );
};

export default LogIn;
