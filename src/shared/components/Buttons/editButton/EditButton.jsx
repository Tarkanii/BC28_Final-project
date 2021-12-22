import styles from "./EditButton.module.scss";
import PropTypes from "prop-types";
import svg from "../../../../assets/btnIcons/sprite.svg";

const EditButton = ({ className, onClick, type }) => {
  return (
    <button
      type={type}
      onClick={onClick}
      className={`${styles.button} ${styles.editButton} ${className}`}
    >
      <svg className={styles.editIcon}>
        <use href={`${svg}#editbtn`}></use>
      </svg>
    </button>
  );
};
export default EditButton;

EditButton.defaultProps = {
  className: "",
  type: "button",
  onClick: () => {},
};

EditButton.propTypes = {
  type: PropTypes.oneOf(["button", "reset", "submit"]),
  onClick: PropTypes.func,
  className: PropTypes.string,
};
