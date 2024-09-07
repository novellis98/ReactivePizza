import NavHeader from "./NavHeader";
import styles from "./Header.module.scss";
import Logo from "./Logo";
import CartSvg from "../svg/CartSvg";
import IconMenu from "../IconMenu";
import { useContext, useEffect, useRef } from "react";
import { MenuMobileContext } from "../../contexts/MenuMobile";

function Header() {
  const { state: stateMenuMobile, dispatch: dispatchMenuMobile } =
    useContext(MenuMobileContext);
  const { menuOpen } = stateMenuMobile;
  //close menu when touching outside header
  const headerRef = useRef(null);
  useEffect(() => {
    const handleClick = (event) => {
      if (headerRef.current && headerRef.current.contains(event.target)) {
        return;
      }
      if (menuOpen) {
        dispatchMenuMobile({ type: "TOOGLE_MENU" });
      }
    };
    document.body.addEventListener("click", handleClick);
    return () => {
      document.body.removeEventListener("click", handleClick);
    };
  }, [menuOpen, dispatchMenuMobile]);
  //
  return (
    <header className={styles.header} ref={headerRef}>
      <IconMenu />
      <Logo variant="logo" />
      <NavHeader />
      <CartSvg />
    </header>
  );
}

export default Header;
