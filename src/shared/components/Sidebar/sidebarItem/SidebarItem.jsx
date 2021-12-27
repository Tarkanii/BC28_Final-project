import { Link } from "react-router-dom";
import { useHistory,useLocation } from "react-router-dom";
import styles from "./SidebarItem.module.scss";

const SidebarItem = ({ name = "init name", id, way, item }) => {

  const path = `${way}/${id}/${item === "project" ? "sprints" : ""}`;
  console.log(path);

  return (
  <li className={styles.item}>
      <Link to={{pathname:path}} className={styles.link}>
        <div className={styles.item__block}></div>
        <span>{name}</span>
      </Link>
    </li>
  );
};

export default SidebarItem;
