import styles from "./SidebarItem.module.scss";

const ListElement = ({ name = "init name" }) => {
  return (
    <li className={styles.sprint}>
      <div className={styles.sprint__block}></div>
      <span>{name}</span>
    </li>
  );
};

export default ListElement;
