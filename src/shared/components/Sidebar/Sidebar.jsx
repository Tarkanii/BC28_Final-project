import SidebarItem from "./sidebarItem";
import { AddButton } from "../Buttons";
import styles from "./Sidebar.module.scss";
import svg from "../../../assets/btnIcons/sprite.svg";
import CreateProject from "../../../pages/ProjectListPage/CreateProject/CreateProject";
import Modal from "../Modal/Modal";
import useMedia from "../../hooks/useMedia";
import { useState } from "react";
import { useSelector } from "react-redux";
import { getProjectArray } from "../../../redux/projects/projects-selectors";
import { getSprintData } from "../../../redux/sprints/sprints-selectors";
import AddNewSprintForm from "../../../pages/ProjectPage/AddSprint/AddNewSprintForm";
import { Link } from "react-router-dom";

function Sidebar({ item = "init item" , projectId}) {
  const {MOB} = useMedia();
  const title = `Show ${item}s`;

  const [isOpen, setIsOpen] = useState(false);

  const onCLick = () => {
    setIsOpen(!isOpen);
  };  
  
  const wayCheck = (item === "project") ? "/projects" : `/projects/${projectId}/sprints`
 

  const projects = useSelector(getProjectArray);
  const sprints =  useSelector(getSprintData)
  return (
    <div className={styles.sidebar__wrapper}>
      <Link className={styles.sidebar__goBackLink}  to={{pathname:wayCheck}}>
        <svg className={styles.sidebar__goBackArrow}>
          <use href={`${svg}#arrowback`} />
        </svg>
        {title}
      </Link>
      <ul
        className={`${styles.sidebar__list}  ${
          item === "project" ? styles.colorizing : ""
        }`}
      >
        {item === "project" && projects?.map((el) => (
          <SidebarItem name={el.name} key={el._id} id={el._id} way={wayCheck} item={item}/>
        ))}
        {item === "sprint" && sprints?.map((el) => (
          <SidebarItem name={el.name} key={el._id} />
        ))}
      </ul>
      {!MOB&&(<div className={styles.sidebar__footer}>
        <AddButton
          className={styles.sidebar__AddBtn}
          variant="item"
          onClick={onCLick}
        />
        <p className={styles.sidebar__subscription}>Create a {item}</p>
      </div>)}
      {(isOpen && item === "project") && <Modal closeModal={onCLick}>
          <CreateProject onClick={onCLick} />
        </Modal> }
        {(isOpen && item === "sprint") && <Modal closeModal={onCLick}>
        <AddNewSprintForm  onClick={onCLick}/>
        </Modal>}
    </div>
  );
}

export default Sidebar;
