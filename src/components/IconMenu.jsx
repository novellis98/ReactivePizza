import { useContext } from "react";
import styles from "./IconMenu.module.scss";
import { MenuMobileContext } from "../contexts/MenuMobile";
function IconMenu() {
  const { state: stateMenuMobile, dispatch: dispatchMenuMobile } =
    useContext(MenuMobileContext);
  const { menuOpen, blockPage, bodyNoTouch } = stateMenuMobile;

  const toggleMenu = () => {
    dispatchMenuMobile({ type: "TOOGLE_MENU" });
    console.log(menuOpen);
    console.log(blockPage);
    console.log(bodyNoTouch);
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
