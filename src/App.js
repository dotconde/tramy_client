import "./App.css";
import Navbar from "./components/Navbar";
import MainView from "./components/MainView";
import { BrowserRouter as Router } from "react-router-dom";

function App() {
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
