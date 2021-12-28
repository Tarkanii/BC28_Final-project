import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Sidebar from "../../shared/components/Sidebar/Sidebar";
import styles from "./SprintPage.module.scss";
import ChangeName from "../../shared/components/ChangeName/ChangeName";
import { AddButton, EditButton } from "../../shared/components/Buttons";
import Modal from "../../shared/components/Modal/Modal";
import {
  getAllSprints,
  getSprint,
} from "../../redux/sprints/sprints-operations";
import { useHistory, useLocation, useParams } from "react-router-dom";
import { getSprintInfo, getTasks } from "../../redux/sprints/sprints-selectors";
import CreateTask from "./AddTask/CreateTask";
import TaskItem from "./TaskItem/TaskItem";
import GraphicButton from "../../shared/components/Buttons/graphicButton/GraphicButton";

const SprintPage = () => {
  const [showModal, setShowModal] = useState(false);
  const [showAddPeople, setShowAddPeople] = useState(false);
  const [isOpenInput, setIsOpenInput] = useState(false);

  const СurrDate = () => {
    return new Date().toLocaleDateString();
  };
  const history = useHistory();
  const location = useLocation();
  const params = useParams();
  const sprintId = params.sprintId;
  const projectId = params.projectId;

  const sprintInfo = useSelector(getSprintInfo);
  const tasks = useSelector(getTasks);

  const dispatch = useDispatch();
  useEffect(() => {
    console.log();
    dispatch(getAllSprints(projectId));
    dispatch(getSprint(sprintId));
  }, [location]);

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

  return (
    <div className="container">
      <div className={styles.Wrapper}>
        <Sidebar item="sprint" />
        <div className={styles.mainDiv}>
          <div className={styles.dateLine}>
            {/* <p className={styles.paginator}> {`<1/1>`} </p> */}
            <p className={styles.date}>{СurrDate()}</p>
          </div>
          <div className={styles.Sprint}>
            <div className={styles.Header}>
              {isOpenInput ? (
                <ChangeName onClick={openInput} isSprint="true" />
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
                <GraphicButton className={styles.graphicBtn} />
                {showModal && (
                  <Modal closeModal={toggleModal}>
                    <CreateTask onClick={toggleModal} />
                  </Modal>
                )}
                <span className={styles.AddSprintText}>Create a task</span>
              </div>
            </div>
            <div className={styles.describeDiv}>
              <p className={styles.describeText}>Task</p>
              <p className={styles.describeText}>Scheduled hours</p>
              <p className={styles.describeText}>Spent hours</p>
              <p className={styles.describeText}>Executor</p>
            </div>
            <ul className={styles.SprintList}>
              {tasks &&
                tasks.map((el) => {
                  return <TaskItem el={el} key={el._id} />;
                })}
            </ul>
          </div>
          </div>
        </div>
      </div>
  );
  
};

export default SprintPage;
