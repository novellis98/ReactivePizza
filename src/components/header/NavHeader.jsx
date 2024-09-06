import { useContext } from "react";
import { NavLink } from "react-router-dom";
import styles from "./NavHeader.module.scss";
import { MenuMobileContext } from "../../contexts/MenuMobile";

function NavHeader() {
  const { state: stateMenuMobile } = useContext(MenuMobileContext);
  const { menuOpen } = stateMenuMobile;

  return (
    <nav className={`${styles.nav} ${menuOpen ? styles.open : ""}`}>
      <ul className={styles.nav__list}>
        <li className={styles.nav__list_items}>
          <NavLink to="menu">Menu</NavLink>
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
