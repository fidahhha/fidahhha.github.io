import "./Main.css";
import figma from "../Images/figma.png";
import android from "../Images/android.png";
import nextjs from "../Images/nextjs.png";
import ps from "../Images/photoshop.png";
import PowerPoint from "../Images/powerpoint.png";
import react from "../Images/react.png";
import indesign from "../Images/indesign.png";
import github from "../Images/github.png";
import gitlab from "../Images/gitlab.png";
import illustrator from "../Images/illustrator.png"
import React, { useState, useEffect, useRef } from "react";

export default function Home() {
  const [popupIndex, setPopupIndex] = useState(null); // Track which popup to show
  const togglePopup = (index) => {
    setPopupIndex(index === popupIndex ? null : index); // Toggle the popup for the corresponding index
  };



  const [scrolling, setScrolling] = useState(false);

  const changeBackground = () => {
    if (window.scrollY >= 50) {
      setScrolling(true);
    } else {
      setScrolling(false);
    }
  };

  useEffect(() => {
    changeBackground();

    window.addEventListener("scroll", changeBackground);

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
                <a href="/landing">Home</a>
              </li>
              <li>
                <a href="/projects">Projects</a>
              </li>
              <li>
                <a href="/about">About</a>
              </li>
              <li>
                <a href="/contact">Contact</a>
              </li>
            </ul>
          </div>
        </nav>

        <div className="gallery">
          <div className="row">
            <div className="column">
              <img className="column-icon" src={illustrator} alt="illustrator" />
              <img className="column-icon" src={indesign} alt="figma" />

              <h2 className="project-title">Smoke & Mirrors</h2>
              <h3 className="project-subtitle">University Project</h3>
              <a
                href="/SmokeMirror"
                className="column-link-1"
              >
                View Full Project
              </a>
              <a className="column-link-2" onClick={() => togglePopup(0)}>
                Quick View
              </a>
              {popupIndex === 0 && (
                <div className="popup-container">
                  <div className="popup">
                    <div className="popup-content">
                      <p className="Description">Description:</p>
                      <p className="DescriptionDetails">
                        During my first year at University, our assignment was
                        to create a poster and process book using Illustrator
                        and InDesign respectively. The project, titled 'Smoke
                        and Mirrors,' showcased the work of COMPX241-21A
                        students. It explored innovative intersections of
                        technology and creativity within the University of
                        Waikato's Software Engineering program.
                      </p>
                      <button className="close" onClick={() => togglePopup(0)}>
                        Close
                      </button>
                    </div>
                  </div>
                </div>
              )}
            </div>

            <div className="column">
              <img className="column-icon" src={nextjs} alt="nextjs" />
              <img className="column-icon" src={ps} alt="ps" />
              <img className="column-icon" src={figma} alt="figma" />
              <h2 className="project-title">Small Business Website</h2>
              <h3 className="project-subtitle">Kawena Designs</h3>
              <a
                href="/Kawena"
                className="column-link-1"

              >
                View Full Project
              </a>
              <a className="column-link-2" onClick={() => togglePopup(1)}>
                Quick View
              </a>
              {popupIndex === 1 && (
                <div className="popup-container">
                  <div className="popup">
                    <div className="popup-content">
                      <p className="Description">Description:</p>
                      <p className="DescriptionDetails">
                        I have had the absolute honor of creating a website for
                        my friends small fashion/jewellery business Kawena
                        Designs! Kawena designs is at the heart of Oahu, Hawaii.
                        It is much more than a brand it is a celebration of
                        unique designs, exquisite jewellery, and captivating
                        clothing. Bringing 70s inspired fashion and a
                        manifestation of artistry and cultural celebration.
                      </p>
                      <button className="close" onClick={() => togglePopup(1)}>
                        Close
                      </button>
                    </div>
                  </div>
                </div>
              )}
            </div>

            <div className="column">
              <img className="column-icon" src={react} alt="react" />
              <h2 className="project-title">Project Management Application</h2>
              <h3 className="project-subtitle">University Project</h3>
              <a
                href="/ProjectManagement"
                className="column-link-1"
      
              >
                View Full Project
              </a>
              <a className="column-link-2" onClick={() => togglePopup(2)}>
                Quick View
              </a>
              {popupIndex === 2 && (
                <div className="popup-container">
                  <div className="popup">
                    <div className="popup-content">
                      <p className="Description">Description:</p>
                      <p className="DescriptionDetails">
                        The purpose of this project was to create a simple
                        application for managing projects. Users can see all
                        available projects, add, delete and sort projects. We
                        had the flexibility of styling the UI of the application
                        ourselves, usually I will aim for a more minimalist
                        style but for this project I wanted to try something fun
                        since it was the last one.
                      </p>
                      <button className="close" onClick={() => togglePopup(2)}>
                        Close
                      </button>
                    </div>
                  </div>
                </div>
              )}
            </div>

            <div className="column">
              <img className="column-icon" src={android} alt="android" />
              <img className="column-icon" src={PowerPoint} alt="PowerPoint" />
              <img className="column-icon" src={figma} alt="figma" />
              <img className="column-icon" src={github} alt="github" />
              <h2 className="project-title">Cyber-security Alarms App</h2>
              <h3 className="project-subtitle">First Watch</h3>
              <a
                href="/FirstWatch"
                className="column-link-1"

              >
                View Full Project
              </a>
              <a className="column-link-2" onClick={() => togglePopup(3)}>
                Quick View
              </a>
              {popupIndex === 3 && (
                <div className="popup-container">
                  <div className="popup">
                    <div className="popup-content">
                      <p className="Description">Description:</p>
                      <p className="DescriptionDetails">
                        In an academic paper, my team and I developed a mobile
                        application for First Watch, a leading cybersecurity
                        company. My primary responsibility was designing the
                        user interface to optimize user experience. Despite
                        juggling various academic commitments, we strived to
                        adhere to wireframes and implement core UI functionality
                        amidst our busy schedules
                      </p>
                      <button className="close" onClick={() => togglePopup(3)}>
                        Close
                      </button>
                    </div>
                  </div>
                </div>
              )}
            </div>

            <div className="column">
              <img className="column-icon" src={android} alt="android" />
              <img className="column-icon" src={gitlab} alt="gitlab" />

              <h2 className="project-title">UoW CMS</h2>
              <h3 className="project-subtitle">University Project</h3>
              <a
                href="/UOW"
                className="column-link-1"

              >
                View Full Project
              </a>
              <a className="column-link-2" onClick={() => togglePopup(4)}>
                Quick View
              </a>
              {popupIndex === 4 && (
                <div className="popup-container">
                  <div className="popup">
                    <div className="popup-content">
                      <p className="Description">Description:</p>
                      <p className="DescriptionDetails">
                        The content management system (CMS) app for a range of
                        different University subjects is an Android-based
                        application developed as part of a university project.
                        The goal was to implement a robust CMS that adheres to
                        specified requirements, the design of the application
                        was already specified which is what we also had to
                        achieve using best practices.
                      </p>
                      <button className="close" onClick={() => togglePopup(4)}>
                        Close
                      </button>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      
      </div>
    </>
  );
}
