import { useState } from 'react';

import styles from 'css/LoginFormComponent.module.css';
import SignInButton from './SignInButton.tsx';

const LoginFormComponent = () => {
    const [email, setEmail] = useState<string>("");
    const [password, setPassword] = useState<string>("");

    return (
        <div className={styles.login}>
            <p>Login</p>
            <input type="text" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)}/>
            <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)}/>

            <a href="" className={styles['forgot-password']}>Forgot your password?</a>

            <div className={styles['login-button-container']}>
                <SignInButton email={email} password={password}/>
            </div>
        </div>
    )
}

export default LoginFormComponent