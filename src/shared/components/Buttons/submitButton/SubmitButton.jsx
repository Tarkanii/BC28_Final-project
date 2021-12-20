import styles from "./SubmitButton.module.scss";
import PropTypes from "prop-types";

const types = {
  primary: styles.SubmitButtonPrimary,
  secondary: styles.SubmitButtonSecondary,
};

const SubmitButton = ({ className, text, onClick, variant, type }) => {
  const selectedClassName = types[variant];
  return (
    <button
      type={type}
      onClick={onClick}
      className={`${styles.button} ${selectedClassName} ${className}`}
    >
      {text}
    </button>
  );
};
export default SubmitButton;

SubmitButton.defaultProps = {
  text: "submit",
  variant: "primary",
  className: "",
  type: "submit",
  onClick: () => {},
};

SubmitButton.propTypes = {
  type: PropTypes.oneOf(["button", "reset", "submit"]),
  variant: PropTypes.oneOf(["primary", "secondary"]),
  onClick: PropTypes.func,
  className: PropTypes.string,
  text: PropTypes.string.isRequired,
};
