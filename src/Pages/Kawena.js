import "./Main.css";
import React, { useState, useEffect } from "react";
import idea from "../Images/idea.png";
import research from "../Images/research.png";
import sketch from "../Images/sketch.png";
import digitalDesign from "../Images/digitalDesign.png";
import iteration from "../Images/iteration.png";
import ps from "../Images/photoshop.png";
import nextjs from "../Images/nextjs.png";
import figma from "../Images/figma.png";
import HFKawena from "../Images/Group 7.png";
import HFKawena2 from "../Images/Group 8.png";
import HFKawena3 from "../Images/Group 9.png";
import FullScreenImage from "../components/FullScreenImage";
export default function SmokeMirrors() {
  const [scrolling, setScrolling] = useState(false);

  const changeBackground = () => {
    if (window.scrollY >= 50) {
      setScrolling(true);
    } else {
      setScrolling(false);
    }
  };
  const openFullScreen = (src) => {
    // Open the image in full screen on the same page
    // You can implement your custom logic here
    console.log("Opening full screen:", src);
    // Example logic: Open a modal or expand the image in place
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
              Increasing Online Visibility and Sales for Kawena Designs:
              Enhancing the Digital Presence of a Small Fashion and Jewellery
              Business in Oahu, Hawaii
            </p>

            <h1>Solution</h1>
            <li>
              <ul className="ListHeaders">Website Optimization</ul>
              <ul>
                • Utilize the mood board and wireframes to refine the website's
                design ensuring it reflects Kawena Designs' unique aesthetic and
                values.
                <br></br>• Implementing responsive design, ensuring seamless
                user experience across devices.
                <br></br>• User-friendly navigation
              </ul>

              <ul className="ListHeaders">Content Creation</ul>
              <ul>
                • Display Kawena Designs' visually appealing content, helping to
                display it with product descriptions and reviews.
                <br></br>• Highlight the brands committment, cultural
                celebration to foster brand loyalty.
              </ul>

              <ul className="ListHeaders">Continous improvement</ul>
              <ul>
                • Monitor website analytics once live, user feedback etc.
                Identity areas for improvement and optimization.
                <br></br>• Stay ontop of industry trends, and consumer
                preferences to adapt the digital marketing strategy accordingly.
              </ul>
            </li>

            <h1>Design Process</h1>
            <div class="DesignProcessContainer">
              <div class="ImageContainer">
                <img
                  className="DesignProcess-icon"
                  src={research}
                  alt="research"
                />
                <h2>Research</h2>
              </div>
              <div class="ImageContainer">
                <img className="DesignProcess-icon" src={idea} alt="idea" />
                <h2>Ideation</h2>
              </div>
              <div class="ImageContainer">
                <img className="DesignProcess-icon" src={sketch} alt="sketch" />
                <h2>Prototyping</h2>
              </div>
              <div class="ImageContainer">
                <img
                  className="DesignProcess-icon"
                  src={digitalDesign}
                  alt="digitalDesign"
                />
                <h2>Testing</h2>
              </div>
              <div class="ImageContainer">
                <img
                  className="DesignProcess-icon"
                  src={iteration}
                  alt="iteration"
                />
                <h2>Iteration</h2>
              </div>
            </div>
          </div>
          <div className="ContainerProjectDetails">
            <h1>Tools Used</h1>
            <h3>Next.js ∙ CSS ∙ Photoshop ∙ Figma</h3>
            <img className="ProjectDetails-icon" src={nextjs} alt="nextjs" />
            <img className="ProjectDetails-icon" src={ps} alt="ps" />
            <img className="ProjectDetails-icon" src={figma} alt="figma" />
          </div>
          <div className="ContainerProject2">
            <h1>Wireframes</h1>
            <p>
              Here are the high and low-fidelty wireframes that I worked on in Figma,
              feel free to click on the image to view it in fullscreen!
            </p>
            <div class="button-container">
              <a
                href="https://figma.fun/rsruHY"
                target="_blank"
                rel="noopener noreferrer"
              >
                <button>Low-Fidelity wireframes (Figma)</button>
              </a>
              <a
                href="https://figma.fun/poGdKG"
                target="_blank"
                rel="noopener noreferrer"
              >
                <button>High-Fidelity wireframes (Figma)</button>
              </a>
            </div>
            <FullScreenImage src={HFKawena} />
            <FullScreenImage src={HFKawena2} />
            <FullScreenImage src={HFKawena3} />
          </div>
        </div>
      </div>
    </>
  );
}
