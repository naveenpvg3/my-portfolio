// components/WorkExperience.jsx

import React from "react";

const WorkExperience: React.FC = () => {
  return (
    <section id="work-experience">
      <div className="black-text">
        <h2>Work Experience</h2>
      </div>

      <div className="experience">
        <div className="job-title">
          Software Development Engineer, Amazon Web Services (AWS)
        </div>
        <div className="date">Sept 2022 - Dec 2023</div>
      </div>

      <div className="experience">
        <div className="job-title">
          Graduate Student Researcher, The George Washington University,
          Washington, DC
        </div>
        <div className="date">Oct 2021 – June 2022</div>
      </div>

      <div className="experience">
        <div className="job-title">
          Graduate Student Teaching Assistant, The George Washington University,
          Washington, DC
        </div>
        <div className="date">Aug 2021 – Dec 2021</div>
      </div>

      <div className="experience">
        <div className="job-title">
          Applied Data Science Intern, Basil Labs, Washington, DC
        </div>
        <div className="date">Oct 2021 – Dec 2021</div>
      </div>

      <div className="experience">
        <div className="job-title">
          Machine Learning Intern, Tech For Good. Inc, Boston (Remote, NGO)
        </div>
        <div className="date">June 2021 – Aug 2021</div>
      </div>
    </section>
  );
};

export default WorkExperience;
