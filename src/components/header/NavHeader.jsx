import { NavLink } from "react-router-dom";
import styles from "./NavHeader.module.scss";
function NavHeader() {
  return (
    <nav className={styles.nav}>
      <ul className={styles.nav__list}>
        <li className={styles.nav__list_items}>
          <NavLink
            to="menu"
            // className={({ isActive }) => (isActive ? styles.active : "")}
          >
            Menu{" "}
          </NavLink>
        </li>
        <li className={styles.nav__list_items}>
          <NavLink
            to="offerte"
            // className={({ isActive }) => (isActive ? styles.active : "")}
          >
            Offerte
          </NavLink>
        </li>
        <li className={styles.nav__list_items}>
          <NavLink
            to="about"
            // className={({ isActive }) => (isActive ? styles.active : "")}
          >
            Chi siamo
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default NavHeader;
