import NavHeader from "./NavHeader";
import styles from "./Header.module.scss";
import Logo from "./Logo";
import CartSvg from "../svg/CartSvg";

function Header() {
  return (
    <header className={styles.header}>
      <Logo variant="logo" />
      <NavHeader />
      <CartSvg />
    </header>
  );
}

export default Header;
