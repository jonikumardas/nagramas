import "../deshboard/style/AddUser.css";
const AddMile = () => {
  return (
    <form className="form border shadow-lg bg-black my-5">
      <p style={{ color: "#570ef6" }} className="title">
        Add Meal
      </p>
      <p className="message"> Make add meal to our app. </p>
      <div className="flex">
      <div className="form-control w-full max-w-xs">
        <label className="label">
          <span className="label-text">Pick todays meal</span>
        </label>
        <select className="select select-bordered">
          <option disabled selected>
          Choose border name :
          </option>
          <option value="joni">Joni</option>
          <option value="binoy">Binoy</option>
          <option value="Partha">Partha</option>
          <option value="kabaya">Kabaya</option>
        </select>
      </div>
      </div>

      <label>
        <input required placeholder="" type="email" className="input" />
        <span>Email</span>
      </label>
      <label>
        <input required placeholder="" type="email" className="input" />
        <span>Date</span>
      </label>

      <div className="form-control w-full max-w-xs">
        <label className="label">
          <span className="label-text">Pick todays meal</span>
        </label>
        <select className="select select-bordered">
          <option disabled selected>
            Pick one meal
          </option>
          <option value="2.5">2.5</option>
          <option value="2">2</option>
          <option value="1">1</option>
          <option value="0.5">0.5</option>
          <option value="3.0">3.0</option>
          <option value="3.5">3.5</option>
          <option value="4.0">4.0</option>
          <option value="4.5">4.5</option>
          <option value="5.0">5</option>
        </select>
      </div>
      <center>
        <button
          className="spacial text-gray-900 relative hover:text-[#fdfbfbd7] py-2 px-6 after:absolute after:hover:h-[200%] transition-all duration-500 hover:transition-all hover:duration-500 after:transition-all after:duration-500 after:hover:transition-all after:hover:duration-500 overflow-hidden z-20 after:z-[-20] after:bg-[#570ef6] after:rounded-t-full after:w-full after:bottom-1 after:left-0"
          type="submit"
        >
          Add Meal
          <span></span>
        </button>
      </center>
    </form>
  );
};

export default AddMile;
