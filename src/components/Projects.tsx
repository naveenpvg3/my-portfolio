// src/components/Projects.tsx

import React from "react";

const Projects: React.FC = () => {
  return (
    <section id="projects">
      <h2>Projects</h2>
      <div className="project">
        <h3>Project 1</h3>
        <p>Description of Project 1.</p>
      </div>
      <div className="project">
        <h3>Project 2</h3>
        <p>Description of Project 2.</p>
      </div>
      {/* Add more projects as needed */}
    </section>
  );
};

export default Projects;
