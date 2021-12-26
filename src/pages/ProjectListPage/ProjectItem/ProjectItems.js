import s from "../ProjectListPage.module.scss";
import DeleteButton from "../../../shared/components/Buttons/deleteButton";
import { Link } from "react-router-dom";
import { getProjectArray } from "../../../redux/projects/projects-selectors";
import { useDispatch, useSelector } from "react-redux";
import { deleteProjects } from "../../../redux/projects/projects-operations";

export default function ProjectItems() {
  const list = useSelector(getProjectArray);

  const dispatch = useDispatch();

  const deleteProject = (deleteId) => {
    dispatch(deleteProjects(deleteId));
  };
 
  return (
    <>
      {list.map(({ _id, name, description }) => (
        <li className={s.item} key={_id}>
          <Link
            to={{
              pathname: `/projects/${_id}/sprints`,
              state: {
                projectId:_id,
            }}}
            style={{ textDecoration: "none" }}
          >
            <h2 className={s.itemTitle}>{name}</h2>
            <div className={s.thumbs}>
              <p className={s.description}>{description}</p>
            </div>
          </Link>
          <DeleteButton
            className={s.btn}
            variant="primary"
            onClick={() => {
              deleteProject(_id);
            }}
          />
        </li>
      ))}
    </>
  );
}
