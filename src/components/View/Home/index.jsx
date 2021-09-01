import React from "react";
import "./styles.css";
import Feed from "../../Feed";
import Onboarding from "../../Onboarding";

function Home() {
  return (
    <div className="home">
      <Feed />
      <Onboarding />
    </div>
  );
}

export default Home;
