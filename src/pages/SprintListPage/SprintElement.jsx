// import { elements } from "./elements";
import styles from "./SprintListPage.module.scss";
import DeleteButton from "../../shared/components/Buttons/deleteButton/DeleteButton";

const SprintElement = ({ _id, duration, startDate, endDate }) => {
  // const addSprint = elements.map((item) => {
  //   const keys = Object.values(item);
  //   return keys.map((key) => {
  return (
    <>
      <ul className={styles.List}>
        <li id={_id} className={styles.SprintDesc}>
          <p className={styles.Text}>Дата начала</p>
          <p className={styles.Text}>{startDate}</p>
        </li>
      </ul>
      <DeleteButton className={styles.DeleteBtn} variant="secondary" />
    </>
  );
  <>
    {/* <button type="button" className={styles.DeleteBtn}>
        <img className={styles.Img} src="#" width="20" alt="btn" />
      </button> */}
  </>;
};

export default SprintElement;
