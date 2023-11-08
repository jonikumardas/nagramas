import { NavLink } from "react-router-dom";
import "../Component/style/contact.css";
import Navber from "./Navber";
import sonjoy from '../assets/sonjoy.jpg'
import Fotter from "./Fotter";
const Contact = () => {
  return (
    <div>
      <Navber></Navber>

      <div className="card card-side bg-base-100 shadow-xl lg:mx-40 mt-5">
        <figure>
          <img
            src={sonjoy}
            alt="Movie"
            style={{width:"250px", padding:"25px"}}
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title">Sonjoy das</h2>
          <div>
            <p>Founder of nagra mas </p>
            <p>Contact:01830245626 </p>
            <p>Went to Dotto High School </p>
            <p>Lives in Netrakona, Dhaka, Bangladesh </p>
          </div>
          <div className="card-actions justify-end">
            <button className="coustom-btn text-black">
                <NavLink className="font-bold"
                  to="https://www.facebook.com/profile.php?id=100015421995435"
                  style={{ textDecoration: "none" }}
                >
                  facebook
                </NavLink>
            </button>
          </div>
        </div>
      </div>
      <div>
        <p className="text-2xl text-center text-base-100 font-bold p-2"> mas border</p>
      </div>
      <Fotter></Fotter>
    </div>
  );
};

export default Contact;
