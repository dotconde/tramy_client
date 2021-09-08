import React, { useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import MainView from "./components/MainView";
import Login from "./components/Login";
import { BrowserRouter as Router } from "react-router-dom";

function App() {
  const [token, setToken] = useState();

  if (!token) {
    return <Login setToken={setToken} />;
  }
  return (
    <Router>
      <div className="App">
        <Navbar />
        <MainView />
      </div>
    </Router>
  );
}

export default App;
