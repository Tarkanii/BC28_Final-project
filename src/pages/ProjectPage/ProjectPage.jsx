import styles from "./SprintListPage.module.scss";
import AddButton from "../../shared/components/Buttons/addButton/AddButton";
import EditButton from "../../shared/components/Buttons/editButton/EditButton";
import SprintElement from "./SprintItem/SprintElement";
import AddNewSprintForm from "./AddSprint/AddNewSprintForm";
import Sidebar from "../../shared/components/Sidebar/Sidebar";
import Modal from "../../shared/components/Modal/Modal";
import { useState } from "react";
import AddPeople from "./AddPeople/AddPeople";
import { useDispatch } from "react-redux";
import {
  getAllProjects,
  getProject,
} from "../../redux/projects/projects-operations";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { useSelector } from "react-redux";
import { getSprintData } from "../../redux/sprints/sprints-selectors";
import { getProjectInfo } from "../../redux/projects/projects-selectors.js";
import DeleteButton from "../../shared/components/Buttons/deleteButton/DeleteButton";
import ChangeName from "../../shared/components/ChangeName/ChangeName";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";

const SprintListPage = () => {
  const [showModal, setShowModal] = useState(false);
  const [showAddPeople, setShowAddPeople] = useState(false);
  const [isOpenInput, setIsOpenInput] = useState(false);
  const { pathname } = useLocation();

  // const history = useHistory();
  // const projectId = history.location.state.projectId

  const projectId = pathname
    .split("/projects/")
    .join("/sprints")
    .split("/sprints")
    .join("");
  //трудные времена трудеют трудных решений ^^^^ ///

  const sprintData = useSelector(getSprintData);
  const projectInfo = useSelector(getProjectInfo);

  const toggleModal = () => {
    setShowModal(!showModal);
  };
  const openModal = () => {
    setShowAddPeople(!showAddPeople);
  };

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllProjects());
    dispatch(getProject(projectId));
  }, []);

  // const menu = <div className={styles.modalItems}>{AddNewSprintForm}</div>;
  const closeModal = () => {
    setShowModal(false);
  };

  const openInput = () => {
    setIsOpenInput(!isOpenInput);
  };

  return (
    <div className="container">
      <div className={styles.Wrapper}>
        <Sidebar item="project" projectId={projectId} />
        <div className={styles.Sprint}>
          <div className={styles.Header}>
            {isOpenInput ? (
              <ChangeName onClick={openInput} />
            ) : (
              <h2 className={styles.Title}>{projectInfo.name}</h2>
            )}

            <p className={styles.text}>{projectInfo.description}</p>
            <EditButton className={styles.EditBtn} onClick={openInput} />

            <div className={styles.AddSprint}>
              <AddButton
                variant="item"
                className={styles.AddSprintBtn}
                onClick={toggleModal}
              />
              {showModal && (
                <Modal closeModal={closeModal}>
                  <AddNewSprintForm />
                </Modal>
              )}
              <span className={styles.AddSprintText}>Create a sprint</span>
            </div>
          </div>
          <div className={styles.AddMembers}>
            <AddButton
              variant="member"
              type="button"
              text="Add people"
              className={styles.AddBtn}
              onClick={openModal}
            />
            {showAddPeople && (
              <Modal closeModal={openModal}>
                <AddPeople projectId={projectId} onClick={openModal} />
              </Modal>
            )}
          </div>
          <ul className={styles.SprintList}>
            {sprintData &&
              sprintData.map((el) => {
                return (
                  <SprintElement el={el} key={el._id} projectId={projectId} />
                );
              })}
          </ul>
        </div>
      </div>
    </div>
  );
};
export default SprintListPage;
