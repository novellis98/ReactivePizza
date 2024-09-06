import { useContext } from "react";
import styles from "./IconMenu.module.scss";
import { MenuMobileContext } from "../contexts/MenuMobile";
function IconMenu() {
  const { state: stateMenuMobile, dispatch: dispatchMobile } =
    useContext(MenuMobileContext);
  const { menuOpen } = stateMenuMobile;

  const toggleMenu = () => {
    dispatchMobile({ type: "TOOGLE_MENU" });
  };

  return (
    <div
      className={`${styles.hamburger} ${menuOpen ? styles.open : ""}`}
      onClick={toggleMenu}
    >
      <span className={styles.line}></span>
      <span className={styles.line}></span>
      <span className={styles.line}></span>
    </div>
  );
}
export default IconMenu;
