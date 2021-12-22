import styles from "./GraphicButton.module.scss";
import PropTypes from "prop-types";
import svg from "../../../../assets/btnIcons/sprite.svg";

const GraphicButton = ({ className, onClick, type }) => {
  return (
    <button
      type={type}
      onClick={onClick}
      className={`${styles.button} ${styles.graphicButton} ${className}`}
    >
      <svg className={styles.graphicIcon}>
        <use href={`${svg}#analytics`}></use>
      </svg>
    </button>
  );
};
export default GraphicButton;

GraphicButton.defaultProps = {
  className: "",
  type: "button",
  onClick: () => {},
};

GraphicButton.propTypes = {
  type: PropTypes.oneOf(["button", "reset", "submit"]),
  onClick: PropTypes.func,
  className: PropTypes.string,
};
