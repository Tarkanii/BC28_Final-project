import styles from "../SprintListPage.module.scss";
import DeleteButton from "../../../shared/components/Buttons/deleteButton/DeleteButton";
import { useDispatch } from "react-redux";
import { removeSprint } from "../../../redux/sprints/sprints-operations";
import { Link } from "react-router-dom";

const SprintElement = ({ el, projectId }) => {
  const dispatch = useDispatch();
  const deleteProject = (deleteId) => {
    dispatch(removeSprint(deleteId));
  };

  return (
    <li className={styles.SprintContainer}>
      <Link
        to={{
          pathname: `/projects/${projectId}/sprints/${el._id}`,
          state: {
            projectId: projectId,
            sprintId: el._id,
          },
        }}
        style={{ textDecoration: "none" }}
      >
        <div className={styles.SprintCard}>
          <h3 className={styles.SprintName}>{el?.name}</h3>
          <div className={styles.SprintDesc}>
            <p className={styles.Text}>Start date</p>
            <p className={styles.Text}>{el?.startDate}</p>
          </div>
          <div className={styles.SprintDesc}>
            <p className={styles.Text}>End date</p>
            <p className={styles.Text}>{el?.endDate}</p>
          </div>
          <div className={styles.SprintDesc}>
            <p className={styles.Text}>Duration</p>
            <p className={styles.Text}>{el?.sprintDuration}</p>
          </div>
        </div>
      </Link>
      <DeleteButton
        className={styles.DeleteBtn}
        variant="secondary"
        onClick={() => {
          deleteProject(el._id);
        }}
      />
    </li>
  );
};
export default SprintElement;
