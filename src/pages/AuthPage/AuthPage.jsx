import LoginForm from "../../client/LoginForm";
import RegisterForm from "../../client/RegisterForm";
import styles from "./AuthPage.module.scss"

export default function AuthPage(params) {
    
    return (<>
    <div className={styles.background}>
    <RegisterForm />
    </div>
    </>)
};
