import styles from "../SprintPage.module.scss";
import DeleteButton from "../../../shared/components/Buttons/deleteButton/DeleteButton";
import { useDispatch } from "react-redux";
import {  removeTask } from "../../../redux/sprints/sprints-operations";


const TaskItem = ({el}) => {
  const dispatch = useDispatch();

  const deleteProject = (deleteId) => {
    dispatch(removeTask(deleteId));
  };

 return (<li className={styles.SprintContainer} >
                 <div className={styles.SprintCard}>
                   <h3 className={styles.SprintName}>{el?.name}</h3>
                   <p className={styles.Text}>Задача</p>
                   <p className={styles.Text}>{el?.scheduledHours}</p>
                 <p className={styles.Text}>Заплановано</p>
                 {/* <p className={styles.Text}>{el?.endDate}</p> */}
                 <p className={styles.Text}>Витрачено год/день</p>
                 {/* <p className={styles.Text}>{el?.duration}</p> */}
                 <p className={styles.Text}>Витрачено годин</p>
                 {/* <p className={styles.Text}>{el?.duration}</p> */}
                 </div>
                <DeleteButton className={styles.DeleteBtn} variant="secondary"  onClick={() => {
              deleteProject(el._id);
            }} />
               </li>)
}
export default TaskItem;


