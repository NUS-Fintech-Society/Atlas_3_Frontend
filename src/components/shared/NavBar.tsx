import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import styles from "css/shared/NavBar.module.css";
import personLogo from "../assets/img/person_logo.png";
import fintechLogo from "../assets/img/fintech_logo.png";
import { useWindowSize } from "@uidotdev/usehooks";
import { useClickAway } from "@uidotdev/usehooks";
import NavBarMobile from "./NavBarMobile.tsx";

function Navbar(): JSX.Element {
  const [showProfileOptions, setShowProfileOptions] = useState(false);
  const size = useWindowSize(); // Get window size

  const profileOptionsRef = useClickAway(() => {
    setShowProfileOptions(false);
  });

  const handleProfile = () => {
    if (showProfileOptions === false) {
      setShowProfileOptions(true);
    }
  };

  return (
    <>
      {size.width < 767 ? ( // Check window width
        <NavBarMobile />
      ) : (
        <header>
          <div className={styles.overallHeader}>
            <div>
              <a href="/public">
                <img
                  src={fintechLogo}
                  alt="fintech Logo"
                  className={styles.fintechLogo}
                />
              </a>
            </div>
            <div>
              <Link to="/announcements" className={styles.Link}>
                Announcements
              </Link>
            </div>
            <div>
              <Link to="/members" className={styles.Link}>
                Members
              </Link>
            </div>
            <div>
              <Link to="/events" className={styles.Link}>
                Events
              </Link>
            </div>
            <div>
              <Link to="/tasks" className={styles.Link}>
                Tasks
              </Link>
            </div>
            <div>
              <Link to="/" className={styles.Link}>
                Attendance
              </Link>
            </div>
            <div>
              <Link to="/recruitment" className={styles.Link}>
                Recruitment
              </Link>
            </div>
            <div ref={profileOptionsRef}>
              <img
                src={personLogo}
                alt="Person Logo"
                className={styles.personLogo}
                onClick={handleProfile}
              />
              {showProfileOptions && (
                <div ref={profileOptionsRef} className={styles.profileOptions}>
                  <div className={styles.profileOption}>
                    <p>Profile</p>
                  </div>
                  <div className={styles.signOutOption}>
                    <p>Sign Out</p>
                  </div>
                </div>
              )}
            </div>
          </div>
        </header>
      )}
    </>
  );
}

export default Navbar;
