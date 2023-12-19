// components/AboutMe.tsx

import React from "react";
import "./style.css"; // Import your stylesheet

const AboutMe: React.FC = () => {
  return (
    <section id="about-me" className="about-me-section">
      {/* Professional Background */}
      <div className="black-text">
        <h3>Professional Background</h3>
        <p className="black-text">
          Hello! I'm Venkata Palaka, a passionate Software Engineer with a keen
          interest in the fascinating world of Data Science. My journey in the
          tech realm has been a dynamic exploration of problem-solving,
          creativity, and continuous learning.
        </p>
      </div>

      {/* Software Engineering */}
      <div className="black-text">
        <h3>Software Engineering</h3>
        <p className="black-text">
          I hold a strong foundation in software engineering, specializing in
          backend development and building robust, scalable systems. My
          expertise extends to crafting efficient algorithms and implementing
          innovative solutions to complex problems.
        </p>
      </div>

      {/* Data Science Enthusiast */}
      <div className="black-text">
        <h3>Data Science Enthusiast</h3>
        <p className="black-text">
          Driven by a curiosity to uncover meaningful insights from data, I am
          deeply immersed in the realm of Data Science. I have hands-on
          experience in leveraging data to derive actionable intelligence,
          employing techniques such as machine learning, statistical analysis,
          and data visualization.
        </p>
      </div>

      {/* Continuous Learner */}
      <div className="black-text">
        <h3>Continuous Learner</h3>
        <p className="black-text">
          In the ever-evolving tech landscape, I embrace a mindset of continuous
          learning. I am committed to staying abreast of the latest industry
          trends, tools, and methodologies.
        </p>
      </div>

      {/* Outside the Code */}
      <div className="black-text">
        <h3>Outside the Code</h3>
        <p className="black-text">
          Beyond the screen and lines of code, you'll find me engaging in
          diverse interests. I am an avid reader, fascinated by the intersection
          of technology and society. I enjoy exploring the outdoors, capturing
          moments through my lens, and finding inspiration in the world around
          me.
        </p>
      </div>

      {/* Let's Connect */}
      <div className="black-text">
        <h3>Let's Connect!</h3>
        <p className="black-text">
          I am always open to collaborations, discussions, and new
          opportunities. Whether it's about a fascinating tech project, a data
          science challenge, or just a friendly chat, feel free to reach out.
          Let's connect, share ideas, and make an impact in the world of
          technology!
        </p>
      </div>
    </section>
  );
};

export default AboutMe;
