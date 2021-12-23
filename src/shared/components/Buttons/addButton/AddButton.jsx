import styles from "./AddButton.module.scss";
import svg from "../../../../assets/btnIcons/sprite.svg";
import PropTypes from "prop-types";

const types = {
  item: styles.item,
  member: styles.member,
};

const AddButton = ({ className, onClick, variant, type }) => {
  const selectedClassName = types[variant];
  const icon = () => {
    if (variant === "item") return "#plus";
    if (variant === "member") return "#addpeople";
  };
  const classType = () => {
    if (variant === "item") return styles.addButton;
    if (variant === "member") return styles.addMember;
  };
  return (
    <button
      type={type}
      onClick={onClick}
      className={`${styles.button} ${classType()} ${className}`}
    >
      <svg className={selectedClassName}>
        <use href={`${svg}${icon()}`}></use>
      </svg>
    </button>
  );
};
export default AddButton;

AddButton.defaultProps = {
  variant: "item",
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
