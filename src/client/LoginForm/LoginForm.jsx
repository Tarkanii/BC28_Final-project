import { useDispatch } from "react-redux";
import authOperations from "../../redux/auth/auth-operations";
import { Link } from "react-router-dom";
import useForm from "../../shared/hooks/useForm";
import styles from "./LoginForm.module.scss";

const initialState = {
  email: "",
  password: "",
};
const LoginForm = () => {
  const dispatch = useDispatch();
  const onSubmit = (values) => {
    dispatch(authOperations.logIn(values));
  };
  const [data, handleChange, handleSubmit] = useForm(initialState, onSubmit);

  return (
    <div className={`${styles.authContainer} container`}>
      <h1 className={styles.authTitle}>Enter</h1>
      <form onSubmit={handleSubmit} className={styles.authForm} autoComplete="off">
      <p className={styles.inputText}>E-mail</p>
      <input type="email"
          className={styles.authInput}
          onChange={handleChange}
          name="email"
          required
          placeholder="Email"
          value={data.email}
        />
      <p className={styles.inputText}>Password</p>  
      <input type="password"
          className={styles.authInput}
          onChange={handleChange}
          name="password"
          required
          placeholder="Password"
          value={data.password}
        />
          
        <div className={styles.buttonContainer}> 
           <button
            className={`${styles.buttonContainer} ${styles.SubmitButtonPrimary} `}
            text="Enter"
            type="submit"
            variant="primary"
          >Enter
          </button>
          {/* <p className={styles.authText}>Немає акаунту? <a href="" className={styles.authLink}>Зареєструватись</a></p> */}
          <p className={styles.authText}>No accaunt? <Link to="/signup" className={styles.authText}>Register</Link></p> 
         </div>
      </form>
    </div>
  );
};

export default LoginForm;
