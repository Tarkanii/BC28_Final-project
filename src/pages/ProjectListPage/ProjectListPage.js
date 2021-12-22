import ProjectItems from "./ProjectItems";
import s from "./ProjectListPage.module.scss";
import AddButton from "../../shared/components/Buttons/addButton";

export default function ProjectListPage() {
  const onCLick = () => {};

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
      {/* <div className={s.projectContainer}> */}
      <div className={s.createContainer}>
      <h2 className={s.title}>Проекти</h2>
      
      <AddButton className={s.Addbtn}  variant="item" type="item"/>
      <h3 className={s.createTitle}>Створити проект</h3>
      </div>
      <ul className={s.list}>
        {arr.map((el) => (
          <ProjectItems elem={el}/>
        ))}
      </ul>
     

      {/* </div> */}
    </div>
  );
}
