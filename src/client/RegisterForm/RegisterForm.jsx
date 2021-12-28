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
      <h1 className={styles.authTitle}>Registration </h1>
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
        <p className={styles.inputText}>Password</p>
        <input
          type="password"
          className={styles.authInput}
          onChange={handleChange}
          name="password"
          required
          placeholder="Password"
          value={data.password}
        />

        <p className={styles.inputText}>Repeat password</p>
        <input
          type="password"
          className={styles.authInput}
          onChange={handleChange}
          name="passwordCheck"
          required
          placeholder="Repeat password"
          value={data.passwordCheck}
        />

        <div className={styles.buttonContainer}>
          <button
            className={`${styles.buttonContainer} ${styles.SubmitButtonPrimary} `}
            text="Enter"
            type="submit"
            variant="primary"
          >
            Register
          </button>
          {/* <p className={styles.authText}>Маєте акаунт? <a href="" className={styles.authLink}>Увiйти</a></p> */}
          <p className={styles.authText}>Do you have an account? <Link to="/login" className={styles.authText}>Log in</Link></p> 
         </div>

      </form>
    </div>
  );
};

export default RegisterForm;
