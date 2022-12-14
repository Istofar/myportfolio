import React from "react";
import { BsYoutube } from "react-icons/bs";
import "./footer.css";
import {IoLogoTwitter} from "react-icons/io"
import { BsWhatsapp } from "react-icons/bs";


const Footer = () => {
  return (
    <footer>
      <a href="#" className="footer__logo">
        ISTOFAR
      </a>
      <ul className="permalinks">
        <li>
          <a href="#">Home</a>
        </li>
        <li>
          <a href="#about">About</a>
        </li>
        <li>
          <a href="#experience">Experience</a>
        </li>
        <li>
          <a href="#portfolio">Portfolio</a>
        </li>
        <li>
          <a href="#contact">Contact</a>
        </li>
      </ul>

      <div className="footer__socials">
        <a href="https://twitter.com/istofarsenpai?s=09"><IoLogoTwitter /></a>
        <a href="http://www.youtube.com/@istofar560"><BsYoutube /></a>
        <a href="https://api.whatsapp.com/send?phone=09023463644"><BsWhatsapp /></a>
      </div>

      <div className="footer__copyright">
        <small>&copy; ISTOFAR</small>
      </div>
    </footer>
  );
};

export default Footer;
