import logo from "./logo.svg";
import "./App.css";
import Navbar from "./components/Navbar";
import Form from "./components/Form";
import About from "./components/About";
import { useState } from "react";
import Alert from "./components/Alert";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

// let name="harry";
function App() {
  const [mode, setmode] = useState("light");
  const [btntext, setbtntext] = useState("dark");
  const [alert, setAlert] = useState(null);
  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type,
    });
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  };
  const togglemode = () => {
    if (mode === "light") {
      setbtntext("light");
      setmode("dark");
      document.body.style.backgroundColor = "#1c4873";
      showAlert("Dark mode has been enabled", "success");
      document.title = "Textutils - Dark Mode";
    } else {
      setbtntext("dark");
      setmode("light");
      document.body.style.backgroundColor = "white";
      showAlert("Light mode has been enabled", "success");
      document.title = "Textutils - Light Mode";
    }
  };
  return (
    <>
      <Router>
        <Navbar
          title="TextUtils"
          aboutext="About Us"
          mode={mode}
          btntext={btntext}
          togglemode={togglemode}
        />
        <Alert alert={alert} />
        <div className="container my-3">
          <Routes>
            <Route exact path="/" element={<Form
                showAlert={showAlert}
                heading="Try Textutils - Word Counter  , Character Counter , Remove Extra spaces"
                mode={mode}
              />} />
              
            
            <Route exact path="/about" element={<About />} />
              
          
          </Routes>
        </div>
      </Router>
    </>
  );
}

export default App;
