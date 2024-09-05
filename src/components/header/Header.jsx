import NavHeader from "./NavHeader";
import styles from "./Header.module.scss";
import Logo from "./Logo";
import CartSvg from "../svg/CartSvg";
import IconMenu from "../IconMenu";

function Header() {
  return (
    <header className={styles.header}>
      <IconMenu />
      <Logo variant="logo" />
      <NavHeader />
      <CartSvg />
    </header>
  );
}

export default Header;
