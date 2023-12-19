// components/Education.jsx

import React from "react";

const Education: React.FC = () => {
  return (
    <section id="education" className="education-section">
      <h2>Education</h2>
      <div className="education-entry">
        <h2>The George Washington University, Washington, DC</h2>
        <p>Master of Science in Data Science</p>
        <p>
          <strong>Coursework:</strong> Data Science, Data Mining, Data
          Warehousing, Data Visualization, Machine Learning, NLP
        </p>
        <p>
          <strong>Duration:</strong> Jan 2021 - Aug 2022
        </p>
        <p>
          <strong>GPA:</strong> 3.9 / 4.0
        </p>
      </div>

      <div className="education-entry">
        <h2>Anil Neerukonda Institute of Technology and Sciences, India</h2>
        <p>Bachelor of Technology in Computer Science and Engineering</p>
        <p>
          <strong>Duration:</strong> July 2015 – April 2019
        </p>
        <p>
          <strong>GPA:</strong> 8.27 / 10
        </p>
      </div>
    </section>
  );
};

export default Education;
