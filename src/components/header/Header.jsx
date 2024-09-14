import NavHeader from "./NavHeader";
import styles from "./Header.module.scss";
import Logo from "./Logo";
import CartSvg from "../svg/CartSvg";
import IconMenu from "../IconMenu";
import { useContext, useEffect, useRef } from "react";
import { MenuMobileContext } from "../../contexts/MenuMobileContext";

function Header() {
  const { state: stateMenuMobile, dispatch: dispatchMenuMobile } =
    useContext(MenuMobileContext);
  const { menuOpen } = stateMenuMobile;
  //close menu when touching outside header
  const headerRef = useRef(null);
  useEffect(() => {
    const handleClick = (event) => {
      if (headerRef.current && !headerRef.current.contains(event.target)) {
        if (menuOpen) {
          dispatchMenuMobile({ type: "TOOGLE_MENU" });
        }
      }
    };

    document.addEventListener("mousedown", handleClick);
    return () => {
      document.removeEventListener("mousedown", handleClick);
    };
  }, [menuOpen, dispatchMenuMobile]);

  //recalculate layout for fixing the menu size
  useEffect(() => {
    const handleResize = () => {
      document.body.style.display = "none";
      setTimeout(() => {
        document.body.style.display = "block";
      }, 100);
    };
    window.addEventListener("resize", handleResize);

    // Cleanup event listener
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
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
