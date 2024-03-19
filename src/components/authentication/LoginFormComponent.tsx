import styles from 'css/LoginFormComponent.module.css';
import SignInButton from './SignInButton.tsx';

const LoginFormComponent = () => {

    return (
        <div className={styles.login}>
            <p>Login</p>
            <input type="text" placeholder="Email"/>
            <input type="password" placeholder="Password"/>

            <a href="" className={styles['forgot-password']}>Forgot your password?</a>

            <div className={styles['login-button-container']}>
                <SignInButton />
            </div>
        </div>
    )
}

export default LoginFormComponent