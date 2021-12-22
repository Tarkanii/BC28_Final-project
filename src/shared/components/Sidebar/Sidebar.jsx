import ListElement from "../ListElement";
import { AddButton } from "../Buttons";
import styles from "./Sidebar.module.scss";
import svg from "../../../assets/btnIcons/sprite.svg";

function Sidebar({ item = "sprint" }) {
  console.log(typeof ListElement);
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
        <ListElement name="Sprint Burndown Chart 1" />
        <ListElement name="Sprint Burndown Chart 2" />
        <ListElement name="Sprint Burndown Chart 3" />
      </ul>
      <div className="sidebar__footer">
        <AddButton className={styles.sidebar__AddBtn} />
        <p className={styles.sidebar__subscription}>Create a {item}</p>
      </div>
    </div>
  );
}

export default Sidebar;
