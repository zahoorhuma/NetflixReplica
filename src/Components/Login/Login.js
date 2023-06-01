import "./Login.css";
import logo from "../../image.png";

function Login() {
  return (
    <>
      <div>
        <img src={logo} alt="netflix logo" height="89px" />
      </div>
      <div className="login-div">
        <div>
          <h1>Sign In</h1>
        </div>
        <div className="details">
          <div>
            <input
              className="details-div"
              placeholder="Email or Phone Number"
            />
          </div>
          <div>
            <input className="details-div" placeholder="Password" />
          </div>
        </div>

        <div>
          <div>
            <button className="button-div">Sign In</button>
          </div>
          <div className="remember-div">
            <div>
              <input type="checkbox" />
              Remember me
            </div>
            <div>Need help?</div>
          </div>
        </div>

        <div className="recaptcha">
          <div className="whole">
            <div className="div1">New to Netflix?</div>
            <div className="div2">Sign up now.</div>
          </div>

          <div className="div3">
            This page is protected by Google reCAPTCHA to ensure you're not a
            bot. Learn more.
          </div>
        </div>
      </div>
    </>
  );
}

export default Login;
