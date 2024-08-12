import Logo from "../header/Logo";
import styles from "./Footer.module.scss";

function Footer() {
  return (
    <>
      <footer className={styles.footer}>
        <Logo variant="footer_logo" />
        <div className={styles.company_logo}>
          <img src="./assets/logo-bianco.png" alt="logo company" />
        </div>

        <div className={styles.copyright}>
          &copy; Reactive Pizza, 2024. Questo sito è solo a scopo dimostrativo.
          I contenuti, i nomi e le immagini presentati non sono reali e sono
          stati creati solo per fini illustrativi.
        </div>
      </footer>
    </>
  );
}

export default Footer;
