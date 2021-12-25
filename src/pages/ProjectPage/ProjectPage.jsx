import styles from "./SprintListPage.module.scss";
import AddButton from "../../shared/components/Buttons/addButton/AddButton";
import EditButton from "../../shared/components/Buttons/editButton/EditButton";
import SprintElement from "./SprintElement";
import AddNewSprintForm from "./AddNewSprintForm";
import Sidebar from "../../shared/components/Sidebar/Sidebar";
import Modal from "../../shared/components/Modal/Modal";
import { useState } from "react";



const SprintListPage = () => {
  const [showModal, setShowModal] = useState(false);
  const toggleModal = () => {
    setShowModal(!showModal);
  };
  // const menu = <div className={styles.modalItems}>{AddNewSprintForm}</div>;
  const closeModal = () => {
    setShowModal(false);
  };

  return (
      <div className="container">
        <div className={styles.Wrapper}>
          <Sidebar item="project"/>
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
            <AddButton variant="member" />
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
    </div>
  );
};
export default SprintListPage;