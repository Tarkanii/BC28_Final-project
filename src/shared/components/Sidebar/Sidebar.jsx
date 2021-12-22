import SidebarItem from "./sidebarItem";
import { AddButton } from "../Buttons";
import styles from "./Sidebar.module.scss";
import svg from "../../../assets/btnIcons/sprite.svg";

function Sidebar({ item = "sprint" }) {
  const title = `Show ${item}s`;
  return (
    <div className={styles.sidebar__wrapper}>
      <a href="" className={styles.sidebar__goBackLink}>
        <svg className={styles.sidebar__goBackArrow}>
          <use href={`${svg}#arrowback`} />
        </svg>
        {title}
      </a>
      <ul className={styles.sidebar__list}>
        <SidebarItem name="Sprint Burndown Chart 1" />
        <SidebarItem name="Sprint Burndown Chart 2" />
        <SidebarItem name="Sprint Burndown Chart 3" />
      </ul>
      <div className="sidebar__footer">
        <AddButton variant="item" />
        <p className={styles.sidebar__subscription}>Create a {item}</p>
      </div>
    </div>
  );
}

export default Sidebar;
