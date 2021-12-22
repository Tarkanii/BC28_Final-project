import styles from "./CloseButton.module.scss";
import svg from "../../../../assets/btnIcons/sprite.svg";
import PropTypes from "prop-types";

const CloseButton = ({ className, onClick, type }) => {
  return (
    <button
      type={type}
      onClick={onClick}
      className={`${styles.button} ${styles.closeButton} ${className}`}
    >
      <svg className={styles.closeIcon}>
        <use href={`${svg}#closebtn`}></use>
      </svg>
    </button>
  );
};
export default CloseButton;

CloseButton.defaultProps = {
  className: "",
  type: "button",
  onClick: () => {},
};

CloseButton.propTypes = {
  type: PropTypes.oneOf(["button", "reset", "submit"]),
  onClick: PropTypes.func,
  className: PropTypes.string,
};
