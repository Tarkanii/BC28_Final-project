import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Sidebar from "../../shared/components/Sidebar/Sidebar";
import styles from "./SprintPage.module.scss";
import ChangeName from '../../shared/components/ChangeName/ChangeName';
import { AddButton, EditButton } from "../../shared/components/Buttons";
import Modal from "../../shared/components/Modal/Modal";
import { getAllSprints, getSprint } from "../../redux/sprints/sprints-operations";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import {  getSprintInfo, getTasks } from "../../redux/sprints/sprints-selectors";
import CreateTask from "./AddTask/CreateTask";
import TaskItem from "./TaskItem/TaskItem";

const SprintPage = () => {

    const [showModal, setShowModal] = useState(false);
  const [showAddPeople, setShowAddPeople] = useState(false);
  const [isOpenInput, setIsOpenInput] = useState(false);


  const history = useHistory();
  const sprintId = history.location.state.sprintId
  const projectId = history.location.state.projectId

  const sprintInfo = useSelector(getSprintInfo);
   const tasks = useSelector(getTasks)

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getAllSprints(projectId));
        dispatch(getSprint(sprintId));
      }, []);

      const toggleModal = () => {
        setShowModal(!showModal);
      };
      const openModal = () => {
        setShowAddPeople(!showAddPeople);
      };
      const openInput = () => {
        setIsOpenInput(!isOpenInput);
      };

      const closeModal = () => {
        setShowModal(false);
      };
    
    
  return ( <div className="container">
      <div className={styles.Wrapper}>
        <Sidebar item="sprint" />
        <div className={styles.Sprint}>
          <div className={styles.Header}>
            {isOpenInput ? (
              <ChangeName onClick={openInput} isSprint="true"/>
            ) : (
              <h2 className={styles.Title}>{sprintInfo.name}</h2>
            )}

            <EditButton className={styles.EditBtn} onClick={openInput} />
            <div className={styles.AddSprint}>
              <AddButton
                variant="item"
                className={styles.AddSprintBtn}
                onClick={toggleModal}
              />
              {showModal && (
                <Modal closeModal={toggleModal}>
                  <CreateTask  onClick={toggleModal}/>
                 </Modal>
                  )}
              <span className={styles.AddSprintText}>Створити задачу</span>
            </div>
          </div>
        </div>

        <ul className={styles.SprintList}>
          {tasks &&
            tasks.map((el) => {
              return (
                <TaskItem el={el} key={el._id}/>
              );
            })}
        </ul>
      </div>
    </div>)
}


export default SprintPage;