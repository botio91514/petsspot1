import React from "react";
import "./PetLoader.css";

const PetLoader: React.FC = () => {
  return (
    <div className="pet-loader-container">
      <img
        src="/logo.jpg"
        alt="Pets Spot Logo"
        className="pet-loader-logo"
      />
      <div className="paw-animation">
        <div className="paw paw1">
          <div className="toe1" />
          <div className="toe2" />
          <div className="toe3" />
        </div>
        <div className="paw paw2">
          <div className="toe1" />
          <div className="toe2" />
          <div className="toe3" />
        </div>
        <div className="paw paw3">
          <div className="toe1" />
          <div className="toe2" />
          <div className="toe3" />
        </div>
        <div className="paw paw4">
          <div className="toe1" />
          <div className="toe2" />
          <div className="toe3" />
        </div>
      </div>
      <div className="pet-loader-text">Paws & Pixels Spot</div>
    </div>
  );
};

export default PetLoader; 