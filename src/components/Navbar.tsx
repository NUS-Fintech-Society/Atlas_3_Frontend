import styles from "../assets/css/Navbar.module.css";

const Navbar = () => {
  return (
    <header className={styles.desktopNavBarUpdatedAtt}>
      <img
        className={styles.fintechsocLogo6Icon}
        loading="lazy"
        alt=""
        src="/fintechsoclogo-6@2x.png"
      />
      <div className={styles.announcementsFrame}>
        <div className={styles.announcements}>Announcements</div>
      </div>
      <div className={styles.eventsFrame}>
        <div className={styles.tasksFrame}>
          <div className={styles.attendanceFrame}>
            <div className={styles.members}>Members</div>
          </div>
          <div className={styles.attendanceFrame1}>
            <div className={styles.events}>Events</div>
          </div>
          <div className={styles.attendanceFrame2}>
            <div className={styles.tasks}>Tasks</div>
          </div>
          <div className={styles.attendanceFrame3}>
            <div className={styles.attendance}>Attendance</div>
          </div>
          <div className={styles.attendanceFrame4}>
            <div className={styles.recruitment}>Recruitment</div>
          </div>
          <img
            className={styles.image5Icon}
            loading="lazy"
            alt=""
            src="/image-5@2x.png"
          />
        </div>
      </div>
    </header>
  );
};

export default Navbar;
