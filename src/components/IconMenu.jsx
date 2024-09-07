import { useContext } from "react";
import styles from "./IconMenu.module.scss";
import { MenuMobileContext } from "../contexts/MenuMobile";
import { CartContext } from "../contexts/CartContext";
import { OffersContext } from "../contexts/OffersContext";
import { MenuFreeContext } from "../contexts/MenuFreeContext";
function IconMenu() {
  const { state: stateMenuMobile, dispatch: dispatchMenuMobile } =
    useContext(MenuMobileContext);
  const { menuOpen, blockPage, bodyNoTouch } = stateMenuMobile;
  const { state: stateCart, dispatch: dispatchCart } = useContext(CartContext);
  const { show_cart } = stateCart;
  const { state: stateOffers, dispatch: dispatchOffers } =
    useContext(OffersContext);
  const { showPopupOrder } = stateOffers;
  const { state: stateMenuFree, dispatch: dispatchMenuFree } =
    useContext(MenuFreeContext);
  const { showOrderForm } = stateMenuFree;

  const toggleMenu = () => {
    dispatchMenuMobile({ type: "TOOGLE_MENU" });
    //close cart  and menufree and offers popup if the menu get opened
    if (show_cart) {
      dispatchCart({ type: "SHOW_CART" });
    }
    if (showPopupOrder) {
      dispatchOffers({ type: "TOOGLE_POPUP" });
    }
    if (showOrderForm) {
      dispatchMenuFree({ type: "CLOSE_POPUP" });
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
