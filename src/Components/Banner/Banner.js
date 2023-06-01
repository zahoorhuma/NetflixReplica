import "./Banner.css";
function Banner() {
  return (
    <div className="main">
      <div>Unlimited movies, TV shows, and more</div>
      <div className="main-text">
        <div>Watch anywhere. Cancel anytime.</div>

        <div>
          Ready to watch? Enter your email to create or restart your membership.
        </div>
      </div>
      <div className="input-button">
        <div className="input-field">
          <input className="input-box" placeholder="Email address"></input>
        </div>
        <div className="button-field">
          <button className="started-button">Get Started </button>
        </div>
      </div>
    </div>
  );
}

export default Banner;
