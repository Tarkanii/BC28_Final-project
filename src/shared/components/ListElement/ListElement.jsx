import styles from "./ListElement.module.scss";
import { DeleteButton } from "../Buttons";

const ListElement = ({ type = "sprint", title = "init title", children }) => {
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
        onClick={""}
        variant="secondary"
      />
    </div>
  );
};

export default ListElement;
