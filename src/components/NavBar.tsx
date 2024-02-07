import React from "react";
import { Link } from "react-router-dom";
import "../assets/css/NavBar.css";
import personLogo from "../assets/img/person_logo.png";
import fintechLogo from "../assets/img/fintech_logo.png";

function Navbar(): JSX.Element {
  return (
    <header className="overallHeader">
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
        <img src={personLogo} alt="Person Logo" className="personLogo" />
      </div>
    </header>
  );
}

export default Navbar;
