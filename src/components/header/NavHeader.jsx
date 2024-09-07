import { useContext } from "react";
import { NavLink } from "react-router-dom";
import styles from "./NavHeader.module.scss";
import { MenuMobileContext } from "../../contexts/MenuMobile";

function NavHeader() {
  const { state: stateMenuMobile, dispatch: dispatchMenuMobile } =
    useContext(MenuMobileContext);
  const { menuOpen } = stateMenuMobile;

  //close menu when touching outside
  function handleClick() {
    if (menuOpen) {
      dispatchMenuMobile({ type: "TOOGLE_MENU" });
    }
  }

  return (
    <nav className={`${styles.nav} ${menuOpen ? styles.open : ""}`}>
      <ul className={styles.nav__list}>
        <li className={styles.nav__list_items}>
          <NavLink to="menu" onClick={handleClick}>
            Menu
          </NavLink>
        </li>
        <li className={styles.nav__list_items}>
          <NavLink to="ordina" onClick={handleClick}>
            Ordina
          </NavLink>
        </li>
        <li className={styles.nav__list_items}>
          <NavLink to="about" onClick={handleClick}>
            Dove siamo
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default NavHeader;
