import styles from "./CloseButton.module.scss";
import PropTypes from "prop-types";

const types = {
  primary: styles.CloseButtonPrimary,
  secondary: styles.CloseButtonSecondary,
};

const CloseButton = ({ className, onClick, variant, type }) => {
  const selectedClassName = types[variant];
  return (
    <button
      type={type}
      onClick={onClick}
      className={`${styles.button} ${styles.CloseButton} ${selectedClassName} ${className}`}
    ></button>
  );
};
export default CloseButton;

CloseButton.defaultProps = {
  variant: "primary",
  className: "",
  type: "button",
  onClick: () => {},
};

CloseButton.propTypes = {
  type: PropTypes.oneOf(["button", "reset", "submit"]),
  variant: PropTypes.oneOf(["primary", "secondary"]),
  onClick: PropTypes.func,
  className: PropTypes.string,
};
