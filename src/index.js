import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import App from './App';
import About from './Pages/About';
import Projects from './Pages/Projects';
import LandingPage from '../src/LandingPage'
import Contact from './Pages/Contact'
import NoPage from './Pages/NoPage';
import SmokeMirror from './Pages/SmokeMirrorProject';
import Kawena from './Pages/Kawena';
import ProjectManagement from './Pages/ProjectManagement';
import UOW from './Pages/UOW';
import FirstWatch from './Pages/FirstWatch';
import './index.css';
import reportWebVitals from './reportWebVitals';

ReactDOM.createRoot(document.getElementById('root')).render(
  <Router>
    <Routes>
      {/* Index implies that it is the default page that will be loaded */}
      <Route index element={<LandingPage />} />
      <Route path="/landing" element={<LandingPage />} />
      <Route path="/about" element={<About />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/projects" element={<Projects />} />
      <Route path="/SmokeMirror" element={<SmokeMirror/>} />
      <Route path="/Kawena" element={<Kawena/>} />
      <Route path="/ProjectManagement" element={<ProjectManagement/>} />
      <Route path="/UOW" element={<UOW/>} />
      <Route path="/FirstWatch" element={<FirstWatch/>} />
      {/* '*' is anything else but the pages defined */}
      <Route path="*" element={<NoPage />} />
    </Routes>
    <App />
  </Router>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
