import styles from "./GraphicButton.module.scss";
import PropTypes from "prop-types";

const types = {
  primary: styles.GraphicButtonPrimary,
  secondary: styles.GraphicButtonSecondary,
};

const GraphicButton = ({ className, onClick, variant, type }) => {
  const selectedClassName = types[variant];
  return (
    <button
      type={type}
      onClick={onClick}
      className={`${styles.button} ${selectedClassName} ${className}`}
    ></button>
  );
};
export default GraphicButton;

GraphicButton.defaultProps = {
  variant: "primary",
  className: "",
  type: "button",
  onClick: () => {},
};

GraphicButton.propTypes = {
  type: PropTypes.oneOf(["button", "reset", "submit"]),
  variant: PropTypes.oneOf(["primary", "secondary"]),
  onClick: PropTypes.func,
  className: PropTypes.string,
};
