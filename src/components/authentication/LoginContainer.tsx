import styles from '../../assets/css/authentication/LoginContainer.module.css'; // Import web-specific CSS
import LoginFormComponent from "components/authentication/LoginFormComponent.tsx";

const WebLoginContainer = () => {
  return (
    <div className={styles.container}>
        <LoginFormComponent/>
    </div>
  );
}

export default WebLoginContainer;