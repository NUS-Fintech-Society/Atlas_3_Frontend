import styles from '../assets/css/SignInButton.module.css';

import { signIn } from '@/api/authentication';

interface Props {
    email: string;
    password: string;
}

const SignInButton = (props: Props) => {

    return (
        <button className={styles['sign-in-button']} onClick={() => signIn(props.email, props.password)}>
            Sign In
        </button>
    )
}

export default SignInButton