import { NavLink } from 'react-router-dom';
import '../Component/style/login.css'
const Registation = () => {
  return (
    <div className="login-box">
        <div className="avatar placeholder flex justify-center ">
        <div
          style={{ background: "#333" }}
          className="bg-neutral-focus text-neutral-content rounded-full w-36 "
        >
          <span className="text-2xl text-base-100 ms-7" >Register <span className='ms-4'>Now</span></span>
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
        <div className="user-box">
          <input type="password" name="re-password" required />
          <label> Confirm password</label>
        </div>
        <center>
        <button className="spacial" type="submit">
            Register Now
            <span></span>
          </button>
        </center>
      </form>
      <div className="my-5" style={{border:"1px solid #ffffff"}}></div>
      <div>
        <p className="text-white">
          Already have accout?
          <button className="button ms-2">
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
        </p>
      </div>
    </div>
  );
};

export default Registation;
