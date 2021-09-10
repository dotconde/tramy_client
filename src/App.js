import React from "react";
import "./App.css";
import Sidebar from "./components/Sidebar";
import MainView from "./components/MainView";
import Login from "./components/Login";
import useToken from "./hooks/useToken";
import { BrowserRouter as Router } from "react-router-dom";

function App() {
  const { token, setToken } = useToken();

  if (token) {
    return <Login setToken={setToken} />;
  }
  return (
    <Router>
      <div className="App">
        <Sidebar />
        <MainView />
      </div>
    </Router>
  );
}

export default App;
