import React, {useState, useEffect} from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import "./design-system.css";
import CoverPage from "./pages/CoverPage";
import Screen86Page from "./pages/Screen86Page";
import Screen93Page from "./pages/Screen93Page";

// PUBLIC_INTERFACE
function App() {
  /**
   * Root App component that enables routing and theme management.
   */
  const [theme, setTheme] = useState("light");

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
  }, [theme]);

  // PUBLIC_INTERFACE
  const toggleTheme = () => {
    setTheme((prev) => (prev === "light" ? "dark" : "light"));
  };

  return (
    <Router>
      <div className="App">
        <button
          className="theme-toggle"
          onClick={toggleTheme}
          aria-label={`Switch to ${theme === "light" ? "dark" : "light"} mode`}
        >
          {theme === "light" ? "🌙 Dark" : "☀️ Light"}
        </button>
        <Routes>
          <Route path="/" element={<CoverPage />} />
          <Route path="/86" element={<Screen86Page />} />
          <Route path="/93" element={<Screen93Page />} />
          {/* Add more routes as additional screens are created */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
