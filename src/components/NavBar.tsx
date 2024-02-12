import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../assets/css/NavBar.css";
import personLogo from "../assets/img/person_logo.png";
import fintechLogo from "../assets/img/fintech_logo.png";

function Navbar(): JSX.Element {
  const [showProfileOptions, setShowProfileOptions] = useState(false);

  const toggleProfileOptions = () => {
    setShowProfileOptions(!showProfileOptions);
  };

  return (
    <header>
      <div className="overallHeader">
        <div>
          <img src={fintechLogo} alt="fintech Logo" className="fintechLogo" />
        </div>
        <div>
          <Link to="/announcements" className="Link">
            Announcements
          </Link>
        </div>
        <div>
          <Link to="/members" className="Link">
            Members
          </Link>
        </div>
        <div>
          <Link to="/events" className="Link">
            Events
          </Link>
        </div>
        <div>
          <Link to="/tasks" className="Link">
            Tasks
          </Link>
        </div>
        <div>
          <Link to="/recruitment" className="Link">
            Recruitment
          </Link>
        </div>
        <div>
          <img
            src={personLogo}
            alt="Person Logo"
            className="personLogo"
            onClick={toggleProfileOptions}
          />
        </div>
      </div>
      {showProfileOptions && (
        <div className="profileOptions">
          <div className="profileOption">
            <p>Profile</p>
          </div>
          <div className="signOutOption">
            <p>Sign Out</p>
          </div>
        </div>
      )}
    </header>
  );
}

export default Navbar;
