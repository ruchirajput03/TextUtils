import React, { useState } from "react";
// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Alert from "./component/Alert";
// import About from "./component/About";
import Navbar from "./component/Navbar";
import TextForm from "./component/TextForm";

function App() {
  const [mode, setMode] = useState("light"); // Whether dark mode enabled or not
  const [alert, setAlert] = useState(null); // For showing alerts to the user

  const showAlert = (message, type) => {
    setAlert({ msg: message, type: type });
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  };

  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "#042743";
      showAlert("Dark Mode Enabled", "success");
    } else {
      setMode("light");
      document.body.style.backgroundColor = "white";
      showAlert("Light Mode Enabled", "success");
    }
  };

  return (
    <>
    
      <Navbar
        title="TextUtils"
        aboutText="About"
        mode={mode}
        toggleMode={toggleMode}
      />
      <Alert alert={alert} />
      <div className="container my-3">
        {/* <Routes>
          <Route path="/about" element={<About />} />
          <Route
            path="/"
            element={
              <TextForm
                showAlert={showAlert}
                heading="Enter Your Text to Analyze below"
                mode={mode}
              />
            }
          />
        </Routes> */}
        <TextForm
          showAlert={showAlert}
          heading="Enter Your Text to Analyze below"
          mode={mode}
        />
      </div>
   </>
  );
}

export default App;
