const Profile = () => {
  return (
    <div>
      <form className="form border shadow-lg bg-black my-5">
        <p style={{ color: "#570ef6" }} className="title">
          Add user
        </p>
        <p className="message"> Update user information to our app. </p>

        <label>
          <input required placeholder="" type="text" className="input input-primary" />
          <span> Update firstname</span>
        </label>

        <label>
          <input required placeholder="" type="text" className="input input-primary" />
          <span>Update Lastname</span>
        </label>
        <label>
          <input
            required
            placeholder="Upload Photo"
            type="file"
            className="input"
          />
        </label>

        <label>
          <input required placeholder="" type="email" className="input input-accent" />
          <span>Update your Email</span>
        </label>
        <textarea
          className="textarea textarea-primary"
          placeholder="Bio"
        ></textarea>

        <center>
          <button
            className="spacial text-gray-900 relative hover:text-[#fdfbfbd7] py-2 px-6 after:absolute after:hover:h-[200%] transition-all duration-500 hover:transition-all hover:duration-500 after:transition-all after:duration-500 after:hover:transition-all after:hover:duration-500 overflow-hidden z-20 after:z-[-20] after:bg-[#570ef6] after:rounded-t-full after:w-full after:bottom-1 after:left-0"
            type="submit"
          >
            update
            <span></span>
          </button>
        </center>
      </form>
    </div>
  );
};

export default Profile;
