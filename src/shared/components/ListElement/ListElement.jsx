import PropTypes from "prop-types";
import { DeleteButton } from "../Buttons";
import styles from "./ListElement.module.scss";

const ListElement = ({
  deleteHandler,
  type = "sprint",
  title = "init title",
  children,
}) => {
  return (
    <div
      className={`${styles.ListElement__wrapper} ${
        type === "sprint" ? styles.row : ""
      }`}
    >
      <h3 className={styles.ListElement__title}>{title}</h3>
      {children}
      <DeleteButton
        className={`${styles.ListElement__btn} ${
          type === "sprint" ? styles.rowBtn : ""
        }`}
        onClick={deleteHandler}
        variant="secondary"
      />
    </div>
  );
};

export default ListElement;
ListElement.defaultProps={
  type: "project",
}
ListElement.propTypes = {
  type: PropTypes.oneOf(["sprint", "project"]),
  title: PropTypes.string.isRequired,
  deleteHandler: PropTypes.func,
  children: PropTypes.object.isRequired,
};
