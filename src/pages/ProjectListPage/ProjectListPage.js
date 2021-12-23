import ProjectItems from "./ProjectItems";
import s from "./ProjectListPage.module.scss";
import AddButton from "../../shared/components/Buttons/addButton";
import CreateProject from "./CreateProject/CreateProject";
import { useEffect, useState } from "react";
import { getAllProjects } from "../../redux/projects/projects-operations";
import { useDispatch } from "react-redux";
import { getProjectArray } from "../../redux/projects/projects-selectors";
import { useSelector } from "react-redux";

export default function ProjectListPage() {
  const [isOpen, setIsOpen] = useState(false);
  const onCLick = () => {
    setIsOpen(!isOpen);
  };
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllProjects);
  }, []);

  // const arr = useSelector(getProjectArray);
  const arr = [];
  return (
    <div className="container">
      <div className={s.createContainer}>
        <h2 className={s.title}>Проекти</h2>
        <AddButton
          className={s.Addbtn}
          variant="item"
          type="button"
          onClick={onCLick}
        />
        <h3 className={s.createTitle}>Створити проект</h3>
      </div>
      <ul className={s.list}>
        {arr?.map((el) => (
          <ProjectItems elem={el} />
        ))}
      </ul>
      {isOpen && <CreateProject onClick={onCLick} />}
    </div>
  );
}
