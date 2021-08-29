import React from "react";
import "./home.css";
import DetailedProduct from "../DetailedProduct";
import OnboardingInfo from "../Onboarding";

function Home() {
  return (
    <div className="home_container">
      <DetailedProduct></DetailedProduct>
      <OnboardingInfo></OnboardingInfo>
    </div>
  );
}

export default Home;
