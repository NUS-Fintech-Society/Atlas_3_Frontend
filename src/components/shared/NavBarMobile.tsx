import { Link } from "react-router-dom";
import styles from "css/shared/NavBarMobile.module.css";
import { useToggle } from "@uidotdev/usehooks";
import personLogo from "/person_logo.png";
import fintechLogo from "/fintech_logo.png";
import closeSymbol from "/material-symbols_close.png";

function NavBarMobile() {
  const [showSideBar, toggleSideBar] = useToggle(false);

  return (
    <header>
      <div className={styles.overallHeader}>
        <div>
          <Link to="/">
          <img
            src={fintechLogo}
            alt="fintech Logo"
            className={styles.fintechLogo}
          />
          </Link>
        </div>
        <div>
          {showSideBar ? (
            <img
              src={closeSymbol}
              alt="Close Logo"
              className={styles.closeLogo}
              onClick={() => toggleSideBar(false)}
            />
          ) : (
            <img
              src={personLogo}
              alt="Person Logo"
              className={styles.personLogo}
              onClick={() => toggleSideBar(true)}
            />
          )}
        </div>
      </div>
      {showSideBar && (
        <div className={styles.sidebar}>
          <div>
            <Link to="/" className={styles.Link}>
              Home
            </Link>
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
          <div>
            <Link to="/" className={styles.Link}>
              Profile
            </Link>
          </div>
          <div>
            <Link to="/" className={styles.Link}>
              Sign Out
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}

export default NavBarMobile;
