import React from "react";
import "./HomePage.css";

const HomePage = () => {
  return (
    <div className="homepage">
      <h1>Welcome to Crewmates!</h1>
      <p>Create and customize your crewmates and assemble your dream team.</p>
      <div>
        <button onClick={() => (window.location.href = "/create")}>
          Start Creating Crewmates
        </button>
      </div>
    </div>
  );
};

export default HomePage;
