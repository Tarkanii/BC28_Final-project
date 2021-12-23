import styles from "./LogOutButton.module.scss";
import PropTypes from "prop-types";
import svg from "../../../../assets/btnIcons/sprite.svg";
import useMedia from "../../../hooks/useMedia";

const LogOutButton = ({ className, onClick, type }) => {
  const { MOB } = useMedia();
  return (
    <button
      type={type}
      onClick={onClick}
      className={`${styles.button} ${styles.LogOutButton} ${className}`}
    >
      <svg className={styles.logoutIcon}>
        <use
          href={`${svg}${!MOB ? "#logoutPrimary" : "#logoutSecondary"}`}
        ></use>
      </svg>
    </button>
  );
};
export default LogOutButton;

LogOutButton.defaultProps = {
  variant: "primary",
  className: "",
  type: "button",
  onClick: () => {},
};

LogOutButton.propTypes = {
  type: PropTypes.oneOf(["button", "reset", "submit"]),
  variant: PropTypes.oneOf(["primary", "secondary"]),
  onClick: PropTypes.func,
  className: PropTypes.string,
};
