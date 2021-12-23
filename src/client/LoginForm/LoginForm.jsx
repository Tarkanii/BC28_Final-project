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
      <h1 className={styles.authTitle}>Вxiд</h1>
      <form onSubmit={handleSubmit} className={styles.authForm} autoComplete="off">
      <p className={styles.inputText}>E-mail</p>
      <input type="text"
          className={styles.authInput}
          onChange={handleChange}
          name="email"
          required
          placeholder="Email"
          value={data.email}
        />
      <p className={styles.inputText}>Пароль</p>  
      <input type="text"
          className={styles.authInput}
          onChange={handleChange}
          name="password"
          required
          placeholder="Пароль"
          value={data.password}
        />
          
        <div className={styles.buttonContainer}> 
           <button
            className={`${styles.buttonContainer} ${styles.SubmitButtonPrimary} `}
            text="Вход"
            type="submit"
            variant="primary"
          >Увiйти
          </button>
          {/* <p className={styles.authText}>Немає акаунту? <a href="" className={styles.authLink}>Зареєструватись</a></p> */}
          <p className={styles.authText}>Немає акаунту? <Link to="/signup" className={styles.authText}>Зареєструватись</Link></p> 
         </div>
      </form>
    </div>
  );
};

export default LoginForm;
