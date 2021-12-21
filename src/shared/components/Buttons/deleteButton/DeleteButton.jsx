import styles from "./DeleteButton.module.scss";
import svg from "../../../../assets/btnIcons/sprite.svg";
import PropTypes from "prop-types";

const types = {
  primary: styles.Primary,
  secondary: styles.Secondary,
};

const DeleteButton = ({ className, onClick, variant, type }) => {
  const selectedClassName = types[variant];
  // const selectedType = types[variant];
  return (
    <button
      type={type}
      onClick={onClick}
      className={`${styles.button} ${styles.DeleteButton}${className}`}
    >
      <svg className={selectedClassName}>
        <use
          href={`${svg}${variant === "primary" ? "#delete-white" : "#delete"}`}
        ></use>
      </svg>
    </button>
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
