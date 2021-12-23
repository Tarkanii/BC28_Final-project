import s from "./ProjectListPage.module.scss";
import DeleteButton from "../../shared/components/Buttons/deleteButton";
import { Link } from "react-router-dom";

export default function ProjectItems({ elem }) {
  let id = 0;
  return (
    <>
      <li className={s.item}>
        <Link
          to={{
            pathname: `/projects/${id}/sprints`,
          }}
          style={{ textDecoration: "none" }}
        >
          <h2 className={s.itemTitle}>{elem.name}</h2>
          <p className={s.description}>{elem.description}</p>
          <DeleteButton className={s.btn} variant="primary" />
        </Link>
      </li>
    </>
  );
}
