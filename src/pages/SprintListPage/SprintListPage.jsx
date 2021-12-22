import styles from "./SprintListPage.module.scss";
import AddButton from "../../shared/components/Buttons/addButton/AddButton";
import EditButton from "../../shared/components/Buttons/editButton/EditButton";
import SprintElement from "./SprintElement";

const SprintListPage = () => {
  return (
    <div className={styles.Sprint}>
      <div className="container">
        <div className={styles.Header}>
          <h2 className={styles.Title}>Project 1</h2>
          <EditButton className={styles.EditBtn} />
          <div className={styles.AddSprint}>
            <AddButton text="+" className={styles.AddSprintBtn} />
            <span className={styles.AddSprintText}>Создать спринт</span>
          </div>
        </div>
        <div className={styles.AddMembers}>
          <img
            className={`${styles.Img} ${styles.MembersImg}`}
            src="#"
            width="20"
            alt="btn"
          />
          <button type="button" className={styles.AddBtn}>
            Добавить людей
          </button>
        </div>
        <div className={styles.SprintList}>
          <div className={styles.SprintContainer}>
            <div className={styles.SprintCard}>
              <h3 className={styles.SprintName}>Sprint Burndown Chart 1</h3>
              <SprintElement />
            </div>
          </div>
          <div className={styles.SprintContainer}>
            <div className={styles.SprintCard}>
              <h3 className={styles.SprintName}>Sprint Burndown Chart 2</h3>
              <SprintElement />
            </div>
          </div>
          <div className={styles.SprintContainer}>
            <div className={styles.SprintCard}>
              <h3 className={styles.SprintName}>Sprint Burndown Chart 3</h3>
              <SprintElement />
            </div>
          </div>
          <div className={styles.SprintContainer}>
            <div className={styles.SprintCard}>
              <h3 className={styles.SprintName}>Sprint Burndown Chart 4</h3>
              <SprintElement />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SprintListPage;
