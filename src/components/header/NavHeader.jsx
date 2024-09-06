import { useContext } from "react";
import { NavLink } from "react-router-dom";
import styles from "./NavHeader.module.scss";
import { MenuMobileContext } from "../../contexts/MenuMobile";
import { BlockPageContext } from "../../contexts/BlockPageContext";

function NavHeader() {
  const { state: stateMenuMobile, dispatch: dispatchMenuMobile } =
    useContext(MenuMobileContext);
  const { menuOpen } = stateMenuMobile;
  const { dispatch: dispatchBlockPage } = useContext(BlockPageContext);
  function handleClick() {
    dispatchMenuMobile({ type: "CLOSE_MENU", payload: false });
    if (menuOpen) {
      dispatchBlockPage({ type: "BLOCK_PAGE", payload: false });
    } else {
      dispatchBlockPage({ type: "BLOCK_PAGE", payload: true });
    }
  }
  return (
    <nav className={`${styles.nav} ${menuOpen ? styles.open : ""}`}>
      <ul className={styles.nav__list}>
        <li className={styles.nav__list_items} onClick={handleClick}>
          <NavLink to="menu">Menu</NavLink>
        </li>
        <li className={styles.nav__list_items} onClick={handleClick}>
          <NavLink to="ordina">Ordina</NavLink>
        </li>
        <li className={styles.nav__list_items} onClick={handleClick}>
          <NavLink to="about">Dove siamo</NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default NavHeader;
