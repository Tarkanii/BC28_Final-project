import RegisterForm from "../../client/RegisterForm";
import styles from "../LoginPage/LoginPage.module.scss"

export default function RegisterPage(params) {
    
    return (<>
    <div className={styles.background}>
    <RegisterForm />
    </div>
    </>)
};
