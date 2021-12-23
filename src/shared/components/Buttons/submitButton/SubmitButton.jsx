import styles from "./SubmitButton.module.scss";
import PropTypes from "prop-types";

const SubmitButton = ({ className, text, onClick, type }) => {
  return (
    <button
      type={type}
      onClick={onClick}
      className={`${styles.button} ${styles.submitButton} ${className}`}
    >
      {text}
    </button>
  );
};
export default SubmitButton;

SubmitButton.defaultProps = {
  text: "submit",
  className: "",
  type: "submit",
  onClick: () => {},
};

SubmitButton.propTypes = {
  type: PropTypes.oneOf(["button", "reset", "submit"]),
  onClick: PropTypes.func,
  className: PropTypes.string,
  text: PropTypes.string.isRequired,
};
