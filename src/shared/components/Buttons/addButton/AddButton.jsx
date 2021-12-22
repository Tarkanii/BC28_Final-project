import styles from "./AddButton.module.scss";
import svg from "../../../../assets/btnIcons/sprite.svg";
import PropTypes from "prop-types";

const types = {
  item: styles.item,
  member: styles.member,
};

const AddButton = ({ className, onClick, variant, type }) => {
  const selectedClassName = types[variant];
  return (
    <button
      type={type}
      onClick={onClick}
      className={`${styles.button} ${
        variant === "item" ? styles.addButton : styles.addMember
      } ${className}`}
    >
      <svg className={selectedClassName}>
        <use
          href={`${svg}${variant === "item" ? "#plus" : "#addpeople"}`}
        ></use>
      </svg>
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
  variant: PropTypes.oneOf(["item", "member"]),
  onClick: PropTypes.func,
  className: PropTypes.string,
};
