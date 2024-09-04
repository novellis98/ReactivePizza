import { NavLink } from "react-router-dom";
import styles from "./NavHeader.module.scss";
function NavHeader() {
  return (
    <nav className={styles.nav}>
      <ul className={styles.nav__list}>
        <li className={styles.nav__list_items}>
          <NavLink to="menu">Menu </NavLink>
        </li>
        <li className={styles.nav__list_items}>
          <NavLink to="ordina">Ordina</NavLink>
        </li>
        <li className={styles.nav__list_items}>
          <NavLink to="about">Dove siamo</NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default NavHeader;
