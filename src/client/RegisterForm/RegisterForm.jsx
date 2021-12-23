import { useDispatch } from "react-redux";
import authOperations from "../../redux/auth/auth-operations";
import { Link } from "react-router-dom";
import useForm from "../../shared/hooks/useForm";
import styles from "./RegisterForm.module.scss";
import { Notify } from "notiflix/build/notiflix-notify-aio";

const initialState = {
  email: "",
  password: "",
  passwordCheck: "",
};
const RegisterForm = () => {
  const dispatch = useDispatch();
  const onSubmit = (values) => {
    if (values.password === values.passwordCheck) {
      return dispatch(
        authOperations.register({
          email: values.email,
          password: values.password,
        })
      );
    }
    Notify.failure("Password doesn't match");
  };
  const [data, handleChange, handleSubmit] = useForm(initialState, onSubmit);

  return (
    <div className={`${styles.authContainer} container`}>
      <h1 className={styles.authTitle}>Реєстрація </h1>
      <form
        onSubmit={handleSubmit}
        className={styles.authForm}
        autoComplete="off"
      >
        <p className={styles.inputText}>E-mail</p>
        <input
          pattern="^[a-zA-Z0-9]+@(?:[a-zA-Z0-9]+\.)+[A-Za-z]+$"
          title="username@userEmail.net"
          type="text"
          className={styles.authInput}
          onChange={handleChange}
          name="email"
          required
          placeholder="Email"
          value={data.email}
          
        />
        <p className={styles.inputText}>Пароль</p>
        <input
          type="password"
          className={styles.authInput}
          onChange={handleChange}
          name="password"
          required
          placeholder="Пароль"
          value={data.password}
        />

        <p className={styles.inputText}>Повторiть пароль</p>
        <input
          type="password"
          className={styles.authInput}
          onChange={handleChange}
          name="passwordCheck"
          required
          placeholder="Повторiть пароль"
          value={data.passwordCheck}
        />

        <div className={styles.buttonContainer}>
          <button
            className={`${styles.buttonContainer} ${styles.SubmitButtonPrimary} `}
            text="Вход"
            type="submit"
            variant="primary"
          >
            Зареєструватися
          </button>
          {/* <p className={styles.authText}>Маєте акаунт? <a href="" className={styles.authLink}>Увiйти</a></p> */}
          <p className={styles.authText}>Маєте акаунт? <Link to="/login" className={styles.authText}>Увiйти</Link></p> 
         </div>

      </form>
    </div>
  );
};

export default RegisterForm;
