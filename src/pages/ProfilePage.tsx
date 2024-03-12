import { FunctionComponent, useCallback } from "react";
import { useQuery } from "@tanstack/react-query";
import resolveURL from "../api/fetch";
import styles from "../assets/css/ProfilePage.module.css";

type ProfilePageProps = {
  id: number;
};

// TODO: Integrate with React Router
const ProfilePage: FunctionComponent<ProfilePageProps> = ({
  id,
}: ProfilePageProps) => {
  const { isPending, error, data } = useQuery({
    queryKey: ["profile", id],
    queryFn: () =>
      fetch(resolveURL(`/profile/${id}`)).then((res) => res.json()),
  });

  const onBackButtonClick = useCallback(() => {
    // Please sync "All Department members (ADMIN PAGE)" to the project
  }, []);

  if (error) {
    return <div>Error: {error.message}</div>; // TODO: Add a global error component
  }

  if (isPending) {
    return <div>Loading...</div>; // TODO: Add a global spinner component
  }
  return (
    <div className={styles.profilePage}>
      <img
        className={styles.editProfilePic}
        loading="lazy"
        alt=""
        src="/edit-profile-pic.svg"
      />
      <section className={styles.headerFrame}>
        <div className={styles.profileDetailsFrame}>
          <div className={styles.adminText}>
            <div className={styles.profileName}>
              <h1 className={styles.profile}>{`Profile `}</h1>
            </div>
            <div className={styles.homeIconFrame}>
              <div className={styles.departmentText}>
                <h2 className={styles.admin}>Admin</h2>
              </div>
              <div className={styles.roleFrame} />
            </div>
          </div>
          <div className={styles.emailInput}>
            <div className={styles.contactFrame}>
              <div className={styles.profileButton}>
                <img
                  className={styles.profileButton1}
                  alt=""
                  src="/profile-button@2x.png"
                />
              </div>
              <h1 className={styles.name}>{data.name}</h1>
            </div>
            <form className={styles.departmentIconFrame}>
              <div className={styles.membersEventsTasksFrame}>
                <div className={styles.department}>
                  <div className={styles.departmentChild} />
                  <div className={styles.eventsFrame1}>
                    <img
                      className={styles.iconHome}
                      alt=""
                      src="/-icon-home.svg"
                    />
                    <div className={styles.department1}>{data.department}</div>
                  </div>
                  <div className={styles.recruitmentFrame}>
                    <img
                      className={styles.dropdownFilterSelect}
                      alt=""
                      src="/dropdown-filter-select.svg"
                    />
                  </div>
                </div>
              </div>
              <div className={styles.role}>
                <div className={styles.roleChild} />
                <div className={styles.departmentLabel}>
                  <img
                    className={styles.iconUser}
                    alt=""
                    src="/-icon-user.svg"
                  />
                </div>
                <div className={styles.role1}>{data.role}</div>
              </div>
              <div className={styles.emailInputFrame}>
                <div className={styles.email}>
                  <div className={styles.backButtonFrame} />
                  <div className={styles.iconMailWrapper}>
                    <img
                      className={styles.iconMail}
                      loading="lazy"
                      alt=""
                      src="/-icon-mail.svg"
                    />
                  </div>
                  <h2 className={styles.email1}>{data.email}</h2>
                </div>
                <div className={styles.contactFrameContent}>
                  <div className={styles.telegramIconFrame}>
                    <button className={styles.contact}>
                      <div className={styles.componentInstance} />
                      <img
                        className={styles.iconPhone}
                        alt=""
                        src="/-icon-phone.svg"
                      />
                      <div className={styles.telegram}>{data.telegram}</div>
                    </button>
                    <div className={styles.backButtonWrapper}>
                      <div
                        className={styles.backButton}
                        onClick={onBackButtonClick}
                      >
                        <div className={styles.component3}>
                          <div className={styles.componentInstance1} />
                          <div className={styles.button}>Close</div>
                        </div>
                        <img
                          className={styles.backButton1}
                          loading="lazy"
                          alt=""
                          src="/back-button@2x.png"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ProfilePage;
