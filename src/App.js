import React, { useState, useEffect } from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle";
import "bootstrap/dist/css/bootstrap.min.css";
import ClimbingBoxLoader from "react-spinners/ClimbingBoxLoader";
import Home from "./Home";
import Navbar from "./Navbar";
import "./index.css";
import "./App.css";

const App = () => {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 5000);
  }, []);
  return (
    <>
      {loading ? (
        <div className="App">
          <ClimbingBoxLoader color={"#dd7b19"} loading={loading} size={30} />
        </div>
      ) : (
        <>
          <Navbar />
          <Home />
        </>
      )}
    </>
  );
};

export default App;
