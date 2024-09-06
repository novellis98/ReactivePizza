import { useContext } from "react";
import styles from "./IconMenu.module.scss";
import { MenuMobileContext } from "../contexts/MenuMobile";
import { BlockPageContext } from "../contexts/BlockPageContext";
function IconMenu() {
  const { state: stateMenuMobile, dispatch: dispatchMenuMobile } =
    useContext(MenuMobileContext);
  const { menuOpen } = stateMenuMobile;
  const { dispatch: dispatchBlockPage } = useContext(BlockPageContext);
  const toggleMenu = () => {
    dispatchMenuMobile({ type: "TOOGLE_MENU" });
    if (menuOpen) {
      dispatchBlockPage({ type: "BLOCK_PAGE", payload: false });
    } else {
      dispatchBlockPage({ type: "BLOCK_PAGE", payload: true });
    }
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
