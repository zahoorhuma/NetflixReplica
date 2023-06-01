import logo from "../../../src/image.png";
import "./Header.css";
function Header() {
  return (
    <div className="header">
      <div>
        <img src={logo} alt="netflix logo" height="89px" />
      </div>
      <div className="button-box">
        <button className="SignUp">Sign In</button>
      </div>
    </div>
  );
}

export default Header;
