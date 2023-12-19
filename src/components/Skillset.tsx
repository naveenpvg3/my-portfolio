// components/Skillset.jsx

import React from "react";

const Skillset: React.FC = () => {
  return (
    <section id="skillset">
      <h2>My Skills</h2>
      <div className="skill-category">
        <h2>Web Technologies</h2>
        <ul>
          <li>HTML</li>
          <li>CSS</li>
          <li>JavaScript</li>
          <li>TypeScript</li>
          <li>ReactJS</li>
          {/* Add more skills as needed */}
        </ul>
      </div>

      <div className="skill-category">
        <h2>Programming</h2>
        <ul>
          <li>Python</li>
          <li>Java</li>
          <li>C#</li>
          <li>Node.js</li>
          {/* Add more skills as needed */}
        </ul>
      </div>

      <div className="skill-category">
        <h2>Database</h2>
        <ul>
          <li>SQL (e.g., MySQL, PostgreSQL)</li>
          <li>NoSQL (e.g., MongoDB)</li>
          <li>Database Design</li>
          {/* Add more skills as needed */}
        </ul>
      </div>

      <div className="skill-category">
        <h2>Backend Development</h2>
        <ul>
          <li>RESTful APIs</li>
          <li>GraphQL</li>
          <li>Express.js</li>
          <li>Spring Boot</li>
          {/* Add more skills as needed */}
        </ul>
      </div>

      <div className="skill-category">
        <h2>Data Science</h2>
        <ul>
          <li>Machine Learning</li>
          <li>Statistical Analysis</li>
          <li>Data Visualization (e.g., Matplotlib, Seaborn)</li>
          <li>Jupyter Notebooks</li>
          {/* Add more skills as needed */}
        </ul>
      </div>

      <div className="skill-category">
        <h2>Big Data</h2>
        <ul>
          <li>Apache Hadoop</li>
          <li>Apache Spark</li>
          <li>Apache Kafka</li>
          {/* Add more skills as needed */}
        </ul>
      </div>

      <div className="skill-category">
        <h2>Cloud Platforms</h2>
        <ul>
          <li>Amazon Web Services (AWS)</li>
          <li>Microsoft Azure</li>
          <li>Google Cloud Platform (GCP)</li>
          {/* Add more skills as needed */}
        </ul>
      </div>

      {/* Add more skill categories as needed */}
    </section>
  );
};

export default Skillset;
