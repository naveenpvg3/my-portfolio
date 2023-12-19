import React from "react";
import Header from "./components/Header";
import Home from "./components/Home";
import AboutMe from "./components/AboutMe";
import Education from "./components/Education";
import WorkExperience from "./components/WorkExperience";
import Skillset from "./components/Skillset";
import Footer from "./components/Footer";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Header />
      <Home />
      <AboutMe />
      <Education />
      <WorkExperience />
      <Skillset />
      <Footer />
    </div>
  );
}

export default App;
