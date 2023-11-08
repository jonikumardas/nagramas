import { NavLink } from "react-router-dom";
import Navber from "./Navber";
import hero from '../assets/hero.jpg'
import Fotter from "./Fotter";

const Home = () => {
  return (
    <div>
      <Navber></Navber>
      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <img
           src={hero}
            className="max-w-sm rounded-lg shadow-2xl w-full"
          />
          <div>
            <h1 className="text-5xl font-bold">মেস লাইফ সেরা</h1>
            <p className="py-6">
            নেত্রকোনায় এই প্রথম সেরা খাবার এবং সেরা পুষ্টির  নিশ্চয়তা দানকারী মেস নাগড়া নেত্রকোনা। আরো বিস্তারিত জানতে  ক্লিক করুন এই বাটনে .....
            </p>
            <button className="btn btn-primary"> <NavLink to="/about">বিস্তারিত</NavLink> </button>
          </div>
        </div>
      </div>
      <Fotter></Fotter>
    </div>
  );
};

export default Home;
