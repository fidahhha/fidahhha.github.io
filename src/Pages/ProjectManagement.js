import "./Main.css";
import React, { useState, useEffect } from "react";
import react from "../Images/react.png";
import demo from '../Media/ProjectManagementDemo.mp4';

export default function SmokeMirrors() {
  const [scrolling, setScrolling] = useState(false);

  const changeBackground = () => {
    if (window.scrollY >= 50) {
      setScrolling(true);
    } else {
      setScrolling(false);
    }
  };

  useEffect(() => {
    changeBackground(); // Corrected: Added parentheses to call the function

    window.addEventListener("scroll", changeBackground); // Corrected: Changed the function name

    return () => {
      window.removeEventListener("scroll", changeBackground);
    };
  }, []);

  return (
    <>
      <div className="HomeContainer">
        <nav className={scrolling ? "navbar active" : "navbar"}>
          <div className="navbar-container">
          <ul>
              <li>
                <a href="/contact">Contact</a>
              </li>
              <li>
                <a href="/about">About</a>
              </li>
              <li>
                <a href="/projects">Projects</a>
              </li>
              <li>
                <a href="/landing">Home</a>
              </li>
            </ul>
          </div>
        </nav>
        <div className="ContainerWrapper">
          <div className="ContainerProject">
            <h1>Problem Statement</h1>
            <p className="problemStatement">
              Improving Project Management Efficiency: Developing an Application
              to Enable Users to View, Add, Delete, and Sort Projects Easily
            </p>

            <h1>Solution</h1>
            <li>
              <ul className="ListHeaders">Project Overview</ul>
              <ul>
                • Provide users with a clear overview of all available projects
                upon running the application.
                <br></br>• Display essential project details such as name,
                description, status, deadline, and assigned team members in a
                structured format.
              </ul>

              <ul className="ListHeaders">Project Management</ul>
              <ul>
                • Enable users to add new projects to the system
                <br></br>• Implement functionality for users to delete projects
                they no longer require, ensuring the application remains
                clutter-free and organized.
              </ul>

              <ul className="ListHeaders">Sorting Functionality</ul>
              <ul>
                • Incorporate sorting options to allow users to arrange projects
                based on different criteria.
              </ul>

              <ul className="ListHeaders">User Interface Design</ul>
              <ul>
                • Design a user-friendly interface with clear navigation and
                intuitive controls to streamline user interactions.
              </ul>
            </li>
          </div>
          <div className="ContainerProjectDetails">
            <h1>Tools Used</h1>
            <h3>React.js</h3>
            <img className="ProjectDetails-icon" src={react} alt="react" />
          </div>

          <div className="ContainerProject2">
            <video controls width="1000">
              <source src={demo} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
        </div>
      </div>
    </>
  );
}
