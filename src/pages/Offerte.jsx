import PopupOrder from "../components/Popup Order/PopupOrder";
import styles from "./Offerte.module.scss";
import { UsePost } from "../contexts/Context";
function Ordina() {
  const { showPopupOrder, HandlePopupOrder } = UsePost();
  return (
    <main className={styles.container}>
      <div className={styles.intro}>
        <h1> Le nostre offerte</h1>
      </div>
      <section className={styles.promo}>
        {showPopupOrder && <PopupOrder />}
        <div className={styles.promo_post} onClick={HandlePopupOrder}>
          <h1 className={styles.promo_post_title}>Menù Reactive</h1>
          <div className={styles.promo_post_menu}>
            <h2>Pizza a scelta</h2>
            <h2>Patatine a scelta</h2>
            <h2>Bevanda a scelta</h2>
          </div>
          <div className={styles.promo_post_price}>
            <h3>20€</h3>
          </div>
        </div>
        <div className={styles.promo_post} onClick={HandlePopupOrder}>
          <h1 className={styles.promo_post_title}>Menù completo</h1>
          <div className={styles.promo_post_menu}>
            <h2>Aperitivo</h2>
            <h2>Pizza a scelta</h2>
            <h2>Patatine a scelta</h2>
            <h2>Bevanda a scelta</h2>
            <h2>Caffè</h2>
          </div>
          <div className={styles.promo_post_price}>
            <h3>25€</h3>
          </div>
        </div>
        <div className={styles.promo_post} onClick={HandlePopupOrder}>
          <h1 className={styles.promo_post_title}>Pizza no stop</h1>
          <h1>(non ordinabile dal sito)</h1>
          <div className={styles.promo_post_menu}>
            <h2>Pizza no stop</h2>
            <h2>Patatine</h2>
            <h2>Bevanda a scelta</h2>
          </div>
          <div className={styles.promo_post_price}>
            <h3>29€</h3>
          </div>
        </div>
      </section>
    </main>
  );
}

export default Ordina;
