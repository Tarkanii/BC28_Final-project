import styles from "./SidebarItem.module.scss";

const SidebarItem = ({ name = "init name" }) => {
  return (
    <li className={styles.item}>
      <div className={styles.item__block}></div>
      <span>{name}</span>
    </li>
  );
};

export default SidebarItem;
