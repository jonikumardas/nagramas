import '../Component/style/login.css'
const LogIn = () => {
  return (
    <div className="login-box">
        <p>Log in</p>
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
          <a href="#">
            log in
            <span></span>
          </a>
        </center>
      </form>
    </div>
  );
};

export default LogIn;
