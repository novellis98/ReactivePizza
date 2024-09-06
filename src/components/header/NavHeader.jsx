import { useContext, useRef, useEffect } from "react";
import { NavLink } from "react-router-dom";
import styles from "./NavHeader.module.scss";
import { MenuMobileContext } from "../../contexts/MenuMobile";
import { BlockPageContext } from "../../contexts/BlockPageContext";

function NavHeader() {
  const { state: stateMenuMobile, dispatch: dispatchMenuMobile } =
    useContext(MenuMobileContext);
  const { menuOpen } = stateMenuMobile;
  const { dispatch: dispatchBlockPage } = useContext(BlockPageContext);
  const menuRef = useRef(null);

  function handleClick() {
    if (menuOpen) {
      dispatchMenuMobile({ type: "CLOSE_MENU", payload: false });
      dispatchBlockPage({ type: "BLOCK_PAGE", payload: false });
    }
  }
  //close menu when touching outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        if (menuOpen) {
          dispatchMenuMobile({ type: "CLOSE_MENU", payload: false });
          dispatchBlockPage({ type: "BLOCK_PAGE", payload: false });
        }
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [menuOpen, dispatchMenuMobile, dispatchBlockPage]);

  return (
    <nav
      ref={menuRef}
      className={`${styles.nav} ${menuOpen ? styles.open : ""}`}
    >
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
