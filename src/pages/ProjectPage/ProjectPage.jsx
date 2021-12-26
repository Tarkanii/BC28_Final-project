import styles from "./SprintListPage.module.scss";
import AddButton from "../../shared/components/Buttons/addButton/AddButton";
import EditButton from "../../shared/components/Buttons/editButton/EditButton";
import SprintElement from "./SprintElement";
import AddNewSprintForm from "./AddNewSprintForm";
import Sidebar from "../../shared/components/Sidebar/Sidebar";
import Modal from "../../shared/components/Modal/Modal";
import { useState } from "react";
import AddPeople from "./AddPeople";
import { useDispatch } from "react-redux";
import {
  getAllProjects,
  getProject,
} from "../../redux/projects/projects-operations";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { useSelector } from "react-redux";
import { getSprintData } from "../../redux/sprints/sprints-selectors";
import DeleteButton from "../../shared/components/Buttons/deleteButton/DeleteButton";

const SprintListPage = () => {
  const [showModal, setShowModal] = useState(false);
  const [showAddPeople, setShowAddPeople] = useState(false);
  const { pathname } = useLocation();

  const projectId = pathname
    .split("/projects/")
    .join("/sprints")
    .split("/sprints")
    .join("");
  //трудные времена трудеют трудных решений ^^^^ ///

  const sprintData = useSelector(getSprintData);

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

  return (
    <div className="container">
      <div className={styles.Wrapper}>
        <Sidebar item="project" />
        <div className={styles.Sprint}>
          <div className={styles.Header}>
            <h2 className={styles.Title}>Project 1</h2>
            <EditButton className={styles.EditBtn} />
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
              <span className={styles.AddSprintText}>Создать спринт</span>
            </div>
          </div>
          <div className={styles.AddMembers}>
            <AddButton
              variant="member"
              type="button"
              text="Добавить людей"
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
