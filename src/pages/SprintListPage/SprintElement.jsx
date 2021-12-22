import { elements } from "./elements";
import styles from "./SprintListPage.module.scss";
import DeleteButton from "../../shared/components/Buttons/deleteButton/DeleteButton";

const SprintElement = () => {
  const addSprint = elements.map((item) => {
    const keys = Object.values(item);
    return keys.map((key) => {
      return (
        <li id={key.id} className={styles.SprintDesc}>
          <p className={styles.Text}>{key.text}</p>
          <p className={styles.Text}>{key.date}</p>
        </li>
      );
    });
  });
  return (
    <>
      <ul className={styles.List}>{addSprint}</ul>
      <DeleteButton className={styles.DeleteBtn} />
      {/* <button type="button" className={styles.DeleteBtn}>
        <img className={styles.Img} src="#" width="20" alt="btn" />
      </button> */}
    </>
  );
};

export default SprintElement;
