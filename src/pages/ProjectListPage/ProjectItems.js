import s from "./ProjectListPage.module.scss";
import DeleteButton from "../../shared/components/Buttons/deleteButton";

export default function ProjectItems({ elem }) {
  return (
    <>
            <li className={s.item}>
            <h2 className={s.itemTitle}>{elem.title}</h2>
            <p className={s.description}>{elem.description}</p>
            <DeleteButton className={s.btn} variant="primary"/>
          </li>
    </>
  );
}
