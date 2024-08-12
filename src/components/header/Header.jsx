import NavHeader from "./NavHeader";
import styles from "./Header.module.scss";
import Logo from "./Logo";

function Header() {
  return (
    <header className={styles.header}>
      <Logo variant="logo" />
      <NavHeader />
    </header>
  );
}

export default Header;
