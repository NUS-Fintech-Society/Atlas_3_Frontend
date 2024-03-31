import { useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form";

import styles from "css/authentication/LoginFormComponent.module.css";
import loginImage from "/login-image.svg";
import { signIn } from "@/api/authentication.ts";

type Inputs = {
  email: string,
  password: string
}

const LoginFormComponent = () => {
  const [showPassword, setShowPassword] = useState<boolean>(false);

  const {
    register,
    handleSubmit,
  } = useForm<Inputs>();
  const onSubmit: SubmitHandler<Inputs> = (data) => signIn(data.email, data.password);

  const changePasswordVisibility = () => {
    setShowPassword((prev) => !prev);
  };

  return (
    <div className={styles.login}>
      <img src={loginImage} alt="login-image" className={styles["login-image"]} />
      <form className={styles["login-form"]} onSubmit={handleSubmit(onSubmit)}>
        <p>Login</p>
        <input type="text" placeholder="Email" {...register("email", {required: true })} />
        <input
          type={showPassword ? "text" : "password"}
          placeholder="Password"
          {...register("password", {required: true })}
        />
        <button className={styles["password-visibility-button"]} onClick={changePasswordVisibility}>
          {showPassword ? "unshow" : "show"}
        </button>
        <a href="" className={styles["forgot-password"]}>
          Forgot your password?
        </a>

        <input type="submit" className={styles["sign-in-button"]} value="Sign In" />
      </form>
    </div>
  );
};

export default LoginFormComponent;
