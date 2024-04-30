import React from "react";
import "./style.css";
import {
  FaGithub,
  
  FaInstagram,
  FaLinkedin,
  
} from "react-icons/fa";
import { socialprofils } from "../../content_option";

export const Socialicons = (params) => {
  return (
    <div className="stick_follow_icon">
      <ul>
        
        {socialprofils.github && (
          <li>
            <a href={socialprofils.github} target="blank">
              <FaGithub />
            </a>
          </li>
        )}
        {socialprofils.instagram && (
          <li>
            <a href={socialprofils.instagram} target="blank">
            <FaInstagram />
            </a>
          </li>
        )}
        {socialprofils.linkedin && (
          <li>
            <a href={socialprofils.linkedin} target="blank">
              <FaLinkedin />
            </a>
          </li>
        )}
        
      </ul>
      <p>Follow Me</p>
    </div>
  );
};
