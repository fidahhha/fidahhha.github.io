import React, { useState } from "react";
import "../App.css";
export default function FullScreenImage({ src }) {
  const [fullScreen, setFullScreen] = useState(false);

  const toggleFullScreen = () => {
    setFullScreen(!fullScreen);
  };

  return (
    <img
      className={fullScreen ? "full-screen-image" : "default-image"}
      src={src}
      alt="Full Screen"
      onClick={toggleFullScreen}
    />
  );
}
