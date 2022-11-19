import React, { useState } from "react";
import About from "./components/About";
import Navbar from "./components/Navbar";
import TextFrom from "./components/textFrom";
import Alert from "./components/Alert";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  const [mode, setMode] = useState("light");
  const [alert, setAlert] = useState(null); // null is the initial object for the alert

  // this function sets the msg and type used by the bootstrap in alert
  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type,
    });

    setTimeout(() => {
      setAlert(null);
    }, 2000);
  };

  // const removeClasses = ()=>{
  //   document.body.classList.remove('primary');
  //   document.body.classList.remove('light');
  //   document.body.classList.remove('success');
  //   document.body.classList.remove('danger');
  //   document.body.classList.remove('warning');
  // }

  const toggleMode = (cls) => {
    // removeClasses();
    // // console.log(cls);
    // document.body.classList.add('bg-'+cls)// here we are adding the class tot the body tag which will change the color of the body according to the input provided to the toggle function
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "#081f72";
      showAlert("Dark Mode Is On!", "success");
    } else if (mode === "dark") {
      setMode("light");
      document.body.style.backgroundColor = "white";
      showAlert("Light Mode Is On!", "success");
    }
  };

  return (
    <>
      <Router>
        <Navbar
          title="Portfolio"
          toggleMode={toggleMode}
          mode={mode}
          About="AboutUs"
        />

        <Alert alert={alert} />
        <div className="container my-3">
        <Routes>
            <Route  path="/about" element={<About />} />
            <Route
              
              path="/"
              element={
                <TextFrom
                  heading="Enter Your Heading Here"
                  showalert={showAlert}
                  mode={mode}
                />
              }
            />
          </Routes>
        </div>
      </Router>
    </>
  );
}

export default App;
