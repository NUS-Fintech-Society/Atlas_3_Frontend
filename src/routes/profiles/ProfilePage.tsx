import { useQuery, useMutation } from "@tanstack/react-query";
import { useForm } from "@tanstack/react-form";
import { zodValidator } from "@tanstack/zod-form-adapter";
import { z } from "zod";
import resolveURL from "../../api/fetch";
import styles from "css/ProfilePage.module.css";
import { useParams } from "react-router-dom";

// TODO: Integrate with React Router
const ProfilePage = () => {
  console.log(styles);
  const { id } = useParams();

  const profileQuery = useQuery({
    queryKey: ["profile", id],
    queryFn: () =>
      fetch(resolveURL(`/profile/${id}`)).then((res) => res.json()),
  });

  const data = profileQuery.data;

  const profileMutation = useMutation({
    mutationFn: (data: object) => {
      return fetch(resolveURL(`/profile/${id}`), {
        method: "PATCH",
        body: JSON.stringify(data),
      });
    },
  });

  const form = useForm({
    defaultValues: {
      name: "",
      department: "",
      role: "",
      email: "",
      telegram: "",
    },
    validatorAdapter: zodValidator,
    onSubmit: async ({ value }) => {
      profileMutation.mutate(value);
      // TODO: Add a global success toast component, render it here
    },
  });

  // id,
  // name: "Rick Astley",
  // department: "Software",
  // role: "Singer",
  // email: "nevergonnagiveyouup@gmail.com",
  // telegram: "@rickroll",

  const onBackButtonClick = () => {};

  if (profileQuery.error) {
    return <div>Error: {profileQuery.error.message}</div>; // TODO: Add a global error component
  }
  if (profileMutation.isError) {
    return <div>Error: {profileMutation.error.message}</div>;
  }

  if (profileQuery.isPending) {
    return <div>Loading...</div>; // TODO: Add a global spinner component
  }

  if (profileMutation.isPending) {
    return <div>Saving...</div>;
  }

  return (
    <div className={styles.profilePage}>
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
              <img
                className={styles.editProfilePic}
                loading="lazy"
                alt=""
                src="/edit-profile-pic.svg"
              />

              <h1 className={styles.name}>{data.name}</h1>
            </div>
            <form
              className={styles.departmentIconFrame}
              onSubmit={(e) => {
                e.preventDefault();
                e.stopPropagation();
                void form.handleSubmit();
              }}
            >
              <div className={styles.membersEventsTasksFrame}>
                <div className={styles.department}>
                  <div className={styles.departmentChild} />
                  <div className={styles.eventsFrame1}>
                    <img
                      className={styles.iconHome}
                      alt=""
                      src="/-icon-home.svg"
                    />
                    <div className={styles.department1}>
                      <form.Field
                        name="department"
                        validatorAdapter={zodValidator}
                        validators={{
                          onChange: z.string(),
                        }}
                        children={(field) => {
                          return (
                            <input
                              id={field.name}
                              name={field.name}
                              value={field.state.value}
                              onBlur={field.handleBlur}
                              onChange={(e) =>
                                field.handleChange(e.target.value)
                              }
                            />
                          );
                        }}
                      />
                    </div>
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
                  <div className={styles.email1}>
                    <form.Field
                      name="email"
                      validatorAdapter={zodValidator}
                      validators={{
                        onChange: z.string(),
                      }}
                      children={(field) => {
                        return (
                          <input
                            id={field.name}
                            name={field.name}
                            value={field.state.value}
                            onBlur={field.handleBlur}
                            onChange={(e) => field.handleChange(e.target.value)}
                          />
                        );
                      }}
                    />
                  </div>
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
                      <div className={styles.telegram}>
                        <form.Field
                          name="telegram"
                          validatorAdapter={zodValidator}
                          validators={{
                            onChange: z.string(),
                          }}
                          children={(field) => {
                            return (
                              <input
                                id={field.name}
                                name={field.name}
                                value={field.state.value}
                                onBlur={field.handleBlur}
                                onChange={(e) =>
                                  field.handleChange(e.target.value)
                                }
                              />
                            );
                          }}
                        />
                      </div>
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
