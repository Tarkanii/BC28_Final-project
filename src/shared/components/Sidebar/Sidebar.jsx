import SidebarItem from "./sidebarItem";
import { AddButton } from "../Buttons";
import styles from "./Sidebar.module.scss";
import svg from "../../../assets/btnIcons/sprite.svg";
import CreateProject from "../../../pages/ProjectListPage/CreateProject/CreateProject";
import Modal from "../Modal/Modal";
import { useState } from "react";
import { useSelector } from "react-redux";
import { getProjectArray } from "../../../redux/projects/projects-selectors";

function Sidebar({ item = "init item", children = `No ${item}s added` }) {
  const title = `Show ${item}s`;

  const [isOpen, setIsOpen] = useState(false);
  const onCLick = () => {
    setIsOpen(!isOpen);
  };
  const projects = useSelector(getProjectArray);

  return (
    <div className={styles.sidebar__wrapper}>
      <a href="" className={styles.sidebar__goBackLink}>
        <svg className={styles.sidebar__goBackArrow}>
          <use href={`${svg}#arrowback`} />
        </svg>
        {title}
      </a>
      <ul
        className={`${styles.sidebar__list}  ${
          item === "project" ? styles.colorizing : ""
        }`}
      >
        {projects?.map((el) => (
          <SidebarItem name={el.name} />
        ))}
        {/* {children} */}
      </ul>
      <div className={styles.sidebar__footer}>
        <AddButton
          className={styles.sidebar__AddBtn}
          variant="item"
          onClick={onCLick}
        />
        <p className={styles.sidebar__subscription}>Create a {item}</p>
      </div>
      {isOpen && item === "project" && (
        <Modal closeModal={onCLick}>
          <CreateProject onClick={onCLick} />
        </Modal>
      )}
    </div>
  );
}

export default Sidebar;
