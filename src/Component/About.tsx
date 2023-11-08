import Fotter from "./Fotter";
import Navber from "./Navber";
import "./style/about.css";
import hridoy from "../assets/hridoy.png";
import aboutSide from '../assets/side.png'

const About = () => {
  return (
    <div className="bg-base-200">
      <Navber></Navber>
      <div className="flex flex-col lg:flex-row p-5 lg:p-24 about justify-evenly">
        <div>
          <p className="text-3xl"> আমাদের মেস সম্পর্কে বিস্তারিত ...</p>
          <p className="text-xl"> ১. মেসে সিট সংখ্যা সীমিত।</p>
          <p className="text-xl">
            {" "}
            ২. ১০ তারিখের ভিতর মেজ বাবদ সকল খরচ দিয়ে দিতে হবে।{" "}
          </p>
          <p className="text-xl">
            {" "}
            ৩. ২০ মিনিটের বেশিবাথরুমে কাটালে ১০০ টাকা জরিমানা।{" "}
          </p>
          <p className="text-xl">
            {" "}
            ৪. প্রতি মাসে একবার বাথরুম পরিষ্কার না করলে ১০০ টাকা জরিমানা।{" "}
          </p>
          <p className="text-xl">
            {" "}
            ৫. বাসা ভাড়া ১০ তারিখের ভিতরে দিয়ে দিতে হবে।{" "}
          </p>
          <p className="text-xl"> ৬. মেসে মেয়ে বান্ধবী আনা যাবে না। </p>
          <p className="text-xl"> ৭. মেসে অবৈধ কাজ করা যাবে না। </p>
          <p className="text-xl"> ৮. বড়দের অবশ্যই সম্মান করতে হবে। </p>
        </div>
        <div>
          <img src={aboutSide} alt=" about side image " />
        </div>
      </div>

      <hr />
      <p className="text-2xl text-center my-2">এছাড়াও...</p>
      <div className="flex flex-col lg:flex-row-reverse justify-around my-3 ">
        <div className="card w-96 bg-base-100 shadow-xl p-10">
          <p className="font-bold">মেসের সিট সংখ্যা :১৩ </p>
          <p className="font-bold"> সিট খালি আছে :০ </p>
        </div>

        <div className=" flex card w-96 bg-base-100 shadow-xl ">
          <div className="avatar justify-center">
            <div className="w-24 rounded-full my-3">
              <img src={hridoy} alt="ridoy das image" />
            </div>
          </div>
          <div className="card-body ">
            <p>Ridoy das</p>
            <p>
              মেসে সিট সম্পর্কে তথ্য জানতে <br />
              যোগাযোগ করুন <br />
              নাম্বার :01706482948
            </p>
          </div>
        </div>
      </div>
      <Fotter></Fotter>
    </div>
  );
};

export default About;
