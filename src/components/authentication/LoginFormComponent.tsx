import { useState } from "react";

import styles from "css/authentication/LoginFormComponent.module.css";
import loginImage from "/login-image.png";
import { signIn } from "@/api/authentication.ts";

const LoginFormComponent = () => {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [showPassword, setShowPassword] = useState<boolean>(false);

  const changePasswordVisibility = () => {
    setShowPassword((prev) => !prev);
  };

  return (
    <div className={styles.login}>
      <img src={loginImage} alt="login-image" className={styles["login-image"]} />
      <div className={styles["login-form"]}>
        <p>Login</p>
        <input type="text" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
        <input
          type={showPassword ? "text" : "password"}
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button className={styles["password-visibility-button"]} onClick={changePasswordVisibility}>
          {showPassword ? "unshow" : "show"}
        </button>
        <a href="" className={styles["forgot-password"]}>
          Forgot your password?
        </a>

        <button className={styles["sign-in-button"]} onClick={() => signIn(email, password)}>
          Sign In
        </button>
      </div>
    </div>
  );
};

export default LoginFormComponent;
