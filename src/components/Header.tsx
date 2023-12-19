// components/Header.tsx

import React from "react";
import "./style.css";
import myPhoto from "../assets/images/my-photo.jpg";
import linkedinIcon from "../assets/images/linkedin-icon.png";
import githubIcon from "../assets/images/github-icon.png";
import leetcodeIcon from "../assets/images/leetcode-icon.png";
import instagramIcon from "../assets/images/instagram-icon.png";
import mediumIcon from "../assets/images/medium-icon.png";
import youtubeIcon from "../assets/images/youtube-icon.png";

const Header: React.FC = () => {
  return (
    <header>
      <div className="header-content">
        <div className="profile-section">
          <img src={myPhoto} alt="Your Photo" className="profile-photo" />
          <h1>Venkata Palaka</h1>
          <p>Software Engineer</p>
        </div>
        <div className="icons-section">
          <a
            href="https://www.linkedin.com/in/venkatagangadharnaveenpalaka/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={linkedinIcon} alt="LinkedIn" className="icon" />
          </a>
          <a
            href="https://github.com/naveenpvg3"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={githubIcon} alt="GitHub" className="icon" />
          </a>
          <a
            href="https://leetcode.com/venkata_palaka/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={leetcodeIcon} alt="LeetCode" className="icon" />
          </a>
          <a
            href="https://medium.com/@naveenpvg"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={mediumIcon} alt="Medium" className="icon" />
          </a>
          <a
            href="https://www.instagram.com/mrwanderingspirit"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={instagramIcon} alt="Instagram" className="icon" />
          </a>
          <a
            href="https://www.youtube.com/@MrWanderingSpirit"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={youtubeIcon} alt="YouTube" className="icon" />
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header;
