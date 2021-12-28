import styles from "../SprintPage.module.scss";
import DeleteButton from "../../../shared/components/Buttons/deleteButton/DeleteButton";
import { useDispatch, useSelector } from "react-redux";
import { removeTask } from "../../../redux/sprints/sprints-operations";
import { fetchEmail } from "../../../redux/auth/auth-selectors";
import {Input} from "../../../shared/components/Input"
import useMedia from "../../../shared/hooks/useMedia"
const TaskItem = ({ el }) => {
  const dispatch = useDispatch();
const {DESK} = useMedia();
  const deleteProject = (deleteId) => {
    dispatch(removeTask(deleteId));
  };

  return (
    <li className={styles.SprintContainer}>
      <div className={styles.SprintCard}>
        <h3 className={styles.SprintName}>{el?.name}</h3>

        <div className={styles.planingDiv}>
          <p className={styles.Text}>Scheduled hours</p>
          <p className={styles.TextHours}>{el?.scheduledHours}</p>
        </div>
        {/* <p className={styles.Text}>{el?.endDate}</p> */}
        <div className={styles.spentBox}>
          <p className={styles.Text}>Spent hours</p>
          <input className={styles.input} initial={el?.spentHours}></input>
        </div>
       <div className={styles.owner}> {!DESK&&<p className={styles.executor}>Executor</p>}
          {/* <p className={styles.executor}>{el.owner}</p> */}
          <p className={styles.executor}>User</p></div>
         
        
      </div>
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
export default TaskItem;
