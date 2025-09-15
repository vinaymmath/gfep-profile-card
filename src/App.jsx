import './App.css'
import ProfileImage from "./assets/profile.png";
import X from "./assets/x.svg";
import GitHub from "./assets/github.svg";
import LinkedIn from "./assets/linkedin.svg";
import Instagram from "./assets/instagram.svg";

function App() {
  return (
    <>
      <div className="container">
        <div className="card">
          <div className="profile-image-cont">
            <img src={ProfileImage} className="profile-image"/>
          </div>
          <div className="profile-intro">
            <h3 className="profile-name">
              Sarah Dole
            </h3>
            <p className="profile-jd">
              Front End Engineer @ Microsoft
            </p>
          </div>
          <p className="profile-desc">
            I turn coffee into bugs which are fixed by someone else. Certified Stack Overflow and ChatGPT developer.
          </p>
          <div className="reachout-container">
            <button className="contact-me-btn">
              Contact me
            </button>
            <div className="reachout-platforms-container">
              <button className="reachout-platform">
                <img src={GitHub}></img>
              </button>
              <button className="reachout-platform">
                <img src={LinkedIn}></img>
              </button>
              <button className="reachout-platform">
                <img src={Instagram}></img>
              </button>
              <button className="reachout-platform">
                <img src={X}></img>
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
