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

 return (<li className={styles.SprintContainer} >
    <Link
            to={{
              pathname: `/projects/${projectId}/sprints/${el._id}`,
              state: {
                projectId: projectId,
                sprintId: el._id
              },
            }}
            style={{ textDecoration: "none" }}
          >
                 <div className={styles.SprintCard}>
                   <h3 className={styles.SprintName}>{el?.name}</h3>
                   <p className={styles.Text}>Дата начала</p>
                   <p className={styles.Text}>{el?.startDate}</p>
                 <p className={styles.Text}>Дата окончания</p>
                 <p className={styles.Text}>{el?.endDate}</p>
                 <p className={styles.Text}>Длительность</p>
                 <p className={styles.Text}>{el?.duration}</p>
                 </div>
                 </Link>
                <DeleteButton className={styles.DeleteBtn} variant="secondary"  onClick={() => {
              deleteProject(el._id);
            }} />
               </li>)
}
export default SprintElement;
