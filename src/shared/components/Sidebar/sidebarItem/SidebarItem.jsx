import { Link } from "react-router-dom";
import { useHistory,useLocation } from "react-router-dom";
import styles from "./SidebarItem.module.scss";

const SidebarItem = ({ name = "init name", id, way, item }) => {
  const history = useHistory();
  const location = useLocation()
  const path =  `${way}/${id}/${item === "project" ? "sprints" : ""}`;
  console.log(location);
  return (
  <li className={styles.item}>
      <Link to="#" onClick={()=>{history.push({...location,pathname:path})}}className={styles.link}>
        <div className={styles.item__block}></div>
        <span>{name}</span>
      </Link>
    </li>
  );
};

export default SidebarItem;
