import "./Main.css";
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
      </div>
    </>
  );
}
