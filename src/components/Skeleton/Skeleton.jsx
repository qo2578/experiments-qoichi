import React, { useState } from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  NavLink,
} from "react-router-dom";
import Home from "../Home/Home"; // Импортируйте ваши компоненты
import Projects from "../Projects/Projects";
import Info from "../Info/Info";
import Contact from "../Contact/Contact";
import Animation from "./Animation";
import SplashScreen from "./SplashScreen";
import "../../index.css";

const Skeleton = () => {
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    document.body.classList.toggle("dark-mode");
  };

  return (
    <div>
      <SplashScreen />
      <Router>
        <div>
          {" "}
          <button
            className={`btn ${darkMode ? "dark-mode" : ""}`}
            onClick={toggleDarkMode}
          >
            {darkMode ? "Light" : "Dark"}
          </button>
        </div>
        <div>
          <div className={`border ${darkMode ? "dark-mode" : ""}`}>
            <h2 className="title-name">
            Iskenderova Aiperi
            </h2>
            <div className="div-container">
              <nav className="nav-container">
                <NavLink
                  to="/"
                  className={({ isActive }) =>
                    isActive ? "link active-link" : "link"
                  }
                >
                  Home
                </NavLink>
                <NavLink
                  to="/projects"
                  className={({ isActive }) =>
                    isActive ? "link active-link" : "link"
                  }
                >
                  Projects
                </NavLink>
                <NavLink
                  to="/info"
                  className={({ isActive }) =>
                    isActive ? "link active-link" : "link"
                  }
                >
                 Info
                </NavLink>
                <NavLink
                  to="/contact"
                  className={({ isActive }) =>
                    isActive ? "link active-link" : "link"
                  }
                >
                    Contact
                </NavLink>
              </nav>

              <div className="content-container">
                <Routes>
                  <Route exact path="/" element={<Home />} />
                  <Route path="/projects" element={<Projects darkMode={darkMode} />} />
                  <Route path="/info" element={<Info />} />
                  <Route path="/contact" element={<Contact />} />
                </Routes>
              </div>
            </div>
            <Animation darkMode={darkMode} />
          </div>
        </div>
      </Router>
    </div>
  );
};

export default Skeleton;
