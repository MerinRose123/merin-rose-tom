import React from "react";
import "./style.css";
import {
  FaGithub,
  FaTwitter,
  FaFacebookF,
  FaLinkedin,
  FaMedium,
} from "react-icons/fa";
import { SiLeetcode } from "react-icons/si"; // Import LeetCode icon from react-icons
import { socialprofils } from "../../content_option";

export const Socialicons = (params) => {
  return (
    <div className="stick_follow_icon">
      <ul>
        {socialprofils.twitter && (
          <li>
            <a href={socialprofils.twitter} target="_blank" rel="noopener noreferrer">
              <FaTwitter />
            </a>
          </li>
        )}
        {socialprofils.github && (
          <li>
            <a href={socialprofils.github} target="_blank" rel="noopener noreferrer">
              <FaGithub />
            </a>
          </li>
        )}
        {socialprofils.facebook && (
          <li>
            <a href={socialprofils.facebook} target="_blank" rel="noopener noreferrer">
              <FaFacebookF />
            </a>
          </li>
        )}
        {socialprofils.linkedin && (
          <li>
            <a href={socialprofils.linkedin} target="_blank" rel="noopener noreferrer">
              <FaLinkedin />
            </a>
          </li>
        )}
        {socialprofils.medium && (
          <li>
            <a href={socialprofils.medium} target="_blank" rel="noopener noreferrer">
              <FaMedium />
            </a>
          </li>
        )}
        {socialprofils.leetcode && (
          <li>
            <a href={socialprofils.leetcode} target="_blank" rel="noopener noreferrer">
              <SiLeetcode />
            </a>
          </li>
        )}
      </ul>
      <p>Follow Me</p>
    </div>
  );
};