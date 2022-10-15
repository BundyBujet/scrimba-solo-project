import React from "react";
import facebook from "../assets/Facebook Icon.png";
import github from "../assets/GitHub Icon.png";
import insta from "../assets/Instagram Icon.png";
import twitter from "../assets/Twitter Icon.png";

function Footer() {
  return (
    <footer>
      <img src={twitter} alt="" />
      <img src={facebook} alt="" />
      <img src={insta} alt="" />
      <img src={github} alt="" />
    </footer>
  );
}
export default Footer;
