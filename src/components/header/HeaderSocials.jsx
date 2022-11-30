import React from "react";
import { BsYoutube } from "react-icons/bs";
import { FaGithub } from "react-icons/fa";
import { FiDribbble } from "react-icons/fi";

const HeaderSocials = () => {
  return (
    <div className="header__socials">
      <a href="http://www.youtube.com/@istofar560"><BsYoutube /></a>
        
      <a href="https://github.com/Istofar" target="_blank">
        <FaGithub />
      </a>
      <a href="https://dribbble.com/Istofar" target="_blank">
        <FiDribbble />
      </a>
    </div>
  );
};

export default HeaderSocials;
