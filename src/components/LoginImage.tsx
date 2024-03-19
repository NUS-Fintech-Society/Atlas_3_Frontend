import styles from '../assets/css/LoginImage.module.css';
import loginImage from '/login-image.png'
const LoginImage = () => {

    return (
        <img src={loginImage} alt="login-image" className={styles["login-image"]}/>
    )
}

export default LoginImage