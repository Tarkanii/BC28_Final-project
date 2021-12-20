import styles from "./Navbar.module.scss";
import icon_2x from "../../assets/navbar/goitIcon_2x.png";
import icon from "../../assets/navbar/goitIcon_1x.png";
const Navbar = () => {
  return (
    <div className={styles.navbar}>
      <div className="container">
        <img
          className={styles.icon}
          srcSet={`${icon} 1x, ${icon_2x} 2x`}
          src={`${icon}`}
          alt="goit icon"
        />
      </div>
    </div>
  );
};

export default Navbar;
