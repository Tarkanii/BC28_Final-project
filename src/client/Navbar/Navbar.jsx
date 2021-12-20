import { useSelector } from "react-redux";

import { fetchName } from "../../redux/auth/auth-selectors";
import icon_2x from "../../assets/navbar/goitIcon_2x.png";
import icon from "../../assets/navbar/goitIcon_1x.png";

import styles from "./Navbar.module.scss";
const Navbar = () => {
  const userName = useSelector(fetchName);

  const userInfo = () => {
    // return (
    // <div className={styles.userInfo}>
    //   <p className={styles.userName}>{userName}</p>
    // </div>
    // );
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
          {userName && userInfo()}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
