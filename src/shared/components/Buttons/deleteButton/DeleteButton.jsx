import styles from "./DeleteButton.module.scss";
import PropTypes from "prop-types";
// import svg from "../../../../assets/btnIcons/sprite.svg";

const types = {
  primary: styles.DeleteButtonPrimary,
  secondary: styles.DeleteButtonSecondary,
};

const DeleteButton = ({ className, onClick, variant, type }) => {
  const selectedClassName = types[variant];
  return (
    <button
      type={type}
      onClick={onClick}
      className={`${styles.button} ${styles.DeleteButton} ${selectedClassName} ${className}`}
    ></button>
  );
};
export default DeleteButton;

DeleteButton.defaultProps = {
  variant: "primary",
  className: "",
  type: "button",
  onClick: () => {},
};

DeleteButton.propTypes = {
  type: PropTypes.oneOf(["button", "reset", "submit"]),
  variant: PropTypes.oneOf(["primary", "secondary"]),
  onClick: PropTypes.func,
  className: PropTypes.string,
};
