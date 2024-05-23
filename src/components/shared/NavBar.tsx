/* background-color: rgba(202, 202, 202, 0.2); */
import { useState } from "react";
import { Link } from "react-router-dom";
import styles from "css/shared/NavBar.module.css"; // Assuming you have CSS modules set up
import personLogo from "/person_logo.png";
import fintechLogo from "/fintech_logo.png";

function Navbar() {
  const [showProfileOptions, setShowProfileOptions] = useState(false);

  const handleProfileHover = () => {
    setShowProfileOptions(true);
  };

  const handleProfileLeave = () => {
    setShowProfileOptions(false);
  };

  return (
    <div>
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
        <div
          onMouseEnter={handleProfileHover}
          onMouseLeave={handleProfileLeave}
          className={styles.personIconContainer}
        >
          <img
            src={personLogo}
            alt="Person Logo"
            className={styles.personLogo}
          />
          {showProfileOptions && (
            <div className={styles.profileOptions}>
              <Link to="/profile" className={styles.profileOption}>
                Profile
              </Link>
              <Link to="/signout" className={styles.signOutOption}>
                Sign Out
              </Link>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Navbar;
