import { useNavigate } from "react-router-dom";

import "./App.css";

export default function App() {
  const navigate = useNavigate();
  const handleClick = () => {
    // 👇️ navigate programmatically
    navigate("/about");
  };
  return (
    <div>
      <div className="App"></div>
    </div>
  );
}
