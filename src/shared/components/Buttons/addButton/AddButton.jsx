import styles from "./AddButton.module.scss";
import PropTypes from "prop-types";

const types = {
  primary: styles.AddButtonPrimary,
  secondary: styles.AddButtonSecondary,
};

const AddButton = ({ className, text, onClick, variant, type }) => {
  const selectedClassName = types[variant];
  return (
    <button
      type={type}
      onClick={onClick}
      className={`${styles.button} ${selectedClassName} ${className}`}
    >
      +
    </button>
  );
};
export default AddButton;

AddButton.defaultProps = {
  variant: "primary",
  className: "",
  type: "button",
  onClick: () => {},
};

AddButton.propTypes = {
  type: PropTypes.oneOf(["button", "reset", "submit"]),
  variant: PropTypes.oneOf(["primary", "secondary"]),
  onClick: PropTypes.func,
  className: PropTypes.string,
  text: PropTypes.string.isRequired,
};
