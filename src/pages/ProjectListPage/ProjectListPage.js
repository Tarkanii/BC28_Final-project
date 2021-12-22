import ProjectItems from "./ProjectItems";
import s from "./ProjectListPage.module.scss";
import AddButton from "../../shared/components/Buttons/addButton";
import CreateProject from "./CreateProject/CreateProject";
import { useState } from "react";

export default function ProjectListPage() {
  const [isOpen, setIsOpen] = useState(false)
  const onCLick = () => {
    setIsOpen(!isOpen)
  };

  const arr = [
    { title: "Project 1", description: "Lorem ipsum dolor sit" },
    { title: "Project 2", description: "Lorem ipsum dolor sit" },
    { title: "Project 3", description: "Lorem ipsum dolor sit" },
    { title: "Project 4", description: "Lorem ipsum dolor sit" },
    { title: "Project 2", description: "Lorem ipsum dolor sit" },
    { title: "Project 3", description: "Lorem ipsum dolor sit" },
    { title: "Project 4", description: "Lorem ipsum dolor sit" },
  ];
  return (
    <div className="container">
      <div className={s.createContainer}>
      <h2 className={s.title}>Проекти</h2>
      <AddButton className={s.Addbtn}  variant="item" type="button" onClick={onCLick}/>
      <h3 className={s.createTitle}>Створити проект</h3>
      </div>
      <ul className={s.list}>
        {arr.map((el) => (
          <ProjectItems elem={el}/>
        ))}
      </ul>
     { isOpen && <CreateProject onClick={onCLick}/>}
    </div>
  );
}
