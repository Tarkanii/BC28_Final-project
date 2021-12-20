import styles from "./EditButton.module.scss";
import PropTypes from "prop-types";

const types = {
  primary: styles.EditButtonPrimary,
  secondary: styles.EditButtonSecondary,
};

const EditButton = ({ className, onClick, variant, type }) => {
  const selectedClassName = types[variant];
  return (
    <button
      type={type}
      onClick={onClick}
      className={`${styles.button} ${styles.EditButton} ${selectedClassName} ${className}`}
    ></button>
  );
};
export default EditButton;

EditButton.defaultProps = {
  variant: "primary",
  className: "",
  type: "button",
  onClick: () => {},
};

EditButton.propTypes = {
  type: PropTypes.oneOf(["button", "reset", "submit"]),
  variant: PropTypes.oneOf(["primary", "secondary"]),
  onClick: PropTypes.func,
  className: PropTypes.string,
};
