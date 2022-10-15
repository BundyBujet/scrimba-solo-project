import React from "react";
import personal from "../assets/Rectangle 90.png";
import email from "../assets/Mail.png";
import linked from "../assets/linkedin.png";

function Info() {
  return (
    <div className="info">
      <img src={personal} alt="personal-photo" />
      <div className="per-info">
        <h3>Laura Smith</h3>
        <p className="title">Frontend Developer</p>
        <p className="website">
          <a href="#">laurasmith.website</a>
        </p>
      </div>
      <div className="contact">
        <button className="mail">
          <img src={email} alt="" />
          Email
        </button>
        <button className="linked">
          <img src={linked} alt="" />
          LinkedIn
        </button>
      </div>
    </div>
  );
}
export default Info;
