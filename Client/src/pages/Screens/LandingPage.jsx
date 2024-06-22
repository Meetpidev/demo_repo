import { useState, useEffect } from 'react';
import { NavLink } from "react-router-dom";
import Feature_1 from "./qualityvideo.png";
import Feature_2 from "./secure_connection.png";
import "./LandingPage.css";

function LandingPage() {

  const [isAllowedTime, setIsAllowedTime] = useState(false);

  useEffect(() => {
    const checkTime = () => {
      const currentHour = new Date().getHours();
      if (currentHour >= 18 || currentHour < 24) {
        setIsAllowedTime(true);
      } else {
        setIsAllowedTime(false);
      }
    };
    checkTime();
    const intervalId = setInterval(checkTime, 60000); // Check every minute
    return () => clearInterval(intervalId);
  }, []);


  return (
    <div className="landing-container">
      <main className="main">
        <section className="hero">
          <h1>Welcome to YouTube Meet</h1>
          <p>Experience seamless video conferencing with our powerful tool.</p>
          {isAllowedTime ? (
            <NavLink to={"/meeting2"}>
              <button className="cta-btn">Get Started</button>
            </NavLink>
          ) : (
            <button className="cta-btn" disabled>
              Available from 6 PM to 12 AM
            </button>
          )}
        </section>
        <section id="features" className="features">
          <h2>Features</h2>
          <div className="feature-list">
            <div className="feature-item">
              <img src={Feature_1} alt="Feature 1" />
              <h3>High Quality Video</h3>
              <p>Enjoy crystal clear video calls with no interruptions.</p>
            </div>
            <div className="feature-item">
              <img src="https://m.media-amazon.com/images/I/71fvNMb2fTL._AC_SL1500_.jpg" alt="Feature 2" />
              <h3>Easy Screen Sharing</h3>
              <p>Share your screen effortlessly with a single click.</p>
            </div>
            <div className="feature-item">
              <img src={Feature_2} alt="Feature 3" />
              <h3>Secure Connections</h3>
              <p>Your privacy is our priority. All connections are encrypted.</p>
            </div>
          </div>
        </section>

        <section id="about" className="about">
        <div className="about-p">
          <h2>About Us</h2>
          <p> 
            At YouTube Meet, we're passionate about revolutionizing video conferencing. We believe that communication should be effortless, secure, and foster genuine connection, no matter the distance. Our team of dedicated engineers and visionaries is constantly pushing the boundaries of what's possible, crafting a platform that empowers seamless collaboration and fosters meaningful interactions. Whether you're a growing startup, a global enterprise, or simply staying connected with loved ones, Google Meet Clone is here to bridge the gap and bring you closer together.
          </p>
        </div>
        <div className="about-content">
          <img src="https://images.unsplash.com/photo-1588196749597-9ff075ee6b5b?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="About Us Image" className="about-img" />
         </div>

      </section>

        <section id="contact" className="contact">
          <h2>Contact Us</h2>
          <p>Have questions? <a href="mailto:meetkshah3112@gmail.com">Email us</a> and we'll get back to you shortly.</p>
        </section>
      </main>
      <footer className="footer">
        <p>&copy; 2024 YouTube Meet. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default LandingPage;
