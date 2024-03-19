import styles from '../../assets/css/authentication/WebLoginContainer.module.css'; // Import web-specific CSS
import LoginFormComponent from "components/authentication/LoginFormComponent.tsx";
import LoginImage from "components/authentication/LoginImage.tsx";

const WebLoginContainer = () => {
  return (
    <div className={styles.container}>
      <div className={styles.loginForm}>
        <LoginFormComponent/>
        <LoginImage/>
      </div>
    </div>
  );
}

export default WebLoginContainer;