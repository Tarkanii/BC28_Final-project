import { useSelector, useDispatch } from "react-redux";
import { fetchEmail } from "../../redux/auth/auth-selectors";
import icon_2x from "../../assets/navbar/goitIcon_2x.png";
import icon from "../../assets/navbar/goitIcon_1x.png";
import authOperations from "../../redux/auth/auth-operations";
import { LogOutButton } from "../../shared/components/Buttons";
import styles from "./Navbar.module.scss";



const Navbar = () => {
  
  const dispatch = useDispatch();
  const email = useSelector(fetchEmail);
  const userInfo = () => {
    return (
      <div className={styles.userInfo}>
        <p className={styles.userName}>{email}</p>
        <LogOutButton
          onClick={() => {
            dispatch(authOperations.logOut());
          }} 
          className={styles.label}
        />
        {/* <p className={styles.label}>Log out</p> */}
      </div>
    );
  };
  return (
    <div className={styles.navbar}>
      <div className="container">
        <div className={styles.header}>
          <img
            className={styles.icon}
            srcSet={`${icon} 1x, ${icon_2x} 2x`}
            src={`${icon}`}
            alt="goit icon"
          />
          {email && userInfo()}
          {/* {userInfo()} */}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
