import '../Component/style/login.css'
const Registation = () => {
  return (
    <div className="login-box">
        <p>Register now </p>
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
          <a href="#">
            Regester now
            <span></span>
          </a>
        </center>
      </form>
    </div>
  );
};

export default Registation;
