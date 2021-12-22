import LoginForm from "../../client/LoginForm";
import styles from "./LoginPage.module.scss"

export default function LoginPage (params) {
    
    return (<>
    <div className={styles.background}>
    <LoginForm />
    </div>
    </>)
};
