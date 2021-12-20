import styles from "./LogOutButton.module.scss";
import PropTypes from "prop-types";

const types = {
  primary: styles.LogOutButtonPrimary,
  secondary: styles.LogOutButtonSecondary,
};

const LogOutButton = ({ className, onClick, variant, type }) => {
  const selectedClassName = types[variant];
  return (
    <button
      type={type}
      onClick={onClick}
      className={`${styles.button} ${styles.LogOutButton} ${selectedClassName} ${className}`}
    ></button>
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
