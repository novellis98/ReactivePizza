import PopupOrder from "../components/Popup Order/PopupOrder";
import styles from "./Offerte.module.scss";
import { useContext, useEffect, useRef } from "react";
import { OffersContext } from "../contexts/OffersContext";
import AlertAddToCart from "../components/AlertAddToCart";
function Offerte() {
  const { state, dispatch } = useContext(OffersContext);
  const { showPopupOrder } = state;
  const popupRef = useRef(null);
  useEffect(() => {
    //set body fixed when popup is open and scroll to popup
    if (showPopupOrder) {
      document.body.style.overflow = "hidden";
      if (popupRef.current) {
        popupRef.current.scrollIntoView({
          behavior: "smooth",
          block: "center",
        });
      }
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [showPopupOrder]);
  const handleClick = (menu, price) => {
    dispatch({ type: "SET_MENU", payload: { menu, price } });
  };
  return (
    <main
      className={`${styles.container} ${
        showPopupOrder ? styles.minHeight : ""
      }`}
    >
      <AlertAddToCart />
      <div className={`${showPopupOrder ? styles.hidden : styles.intro} `}>
        <h1 className={showPopupOrder ? styles.hidden : ""}>
          Le nostre offerte
        </h1>
      </div>
      <section className={styles.promo}>
        {showPopupOrder && (
          <div ref={popupRef}>
            <PopupOrder />
          </div>
        )}
        <div
          className={` ${styles.promo_post} ${
            showPopupOrder ? styles.hidden : ""
          }`}
          onClick={() => handleClick("menu reactive", "20")}
        >
          <h1 className={styles.promo_post_title}>Menù Reactive</h1>
          <div className={styles.promo_post_menu}>
            <p>Pizza a scelta</p>
            <p>Patatine</p>
            <p>Bevanda</p>
          </div>
          <div className={styles.promo_post_price}>
            <h4>{Number(20)} €</h4>
          </div>
        </div>
        <div
          className={` ${styles.promo_post} ${
            showPopupOrder ? styles.hidden : ""
          }`}
          onClick={() => handleClick("menu completo", "25")}
        >
          <h1 className={styles.promo_post_title}>Menù completo</h1>
          <div className={styles.promo_post_menu}>
            <p>Aperitivo (salumi e formaggi)</p>
            <p>Pizza a scelta</p>
            <p>Patatine</p>
            <p>Bevanda</p>
            <p>Pizza alla nutella</p>
          </div>
          <div className={styles.promo_post_price}>
            <h4>{Number(25)} €</h4>
          </div>
        </div>
        <div
          className={` ${styles.promo_post} ${
            showPopupOrder ? styles.hidden : ""
          }`}
        >
          <h1 className={styles.promo_post_title}>Pizza no stop</h1>
          <h3 className={styles.promo_post_subtitle}>
            (non ordinabile dal sito, disponibile solo in pizzeria)
          </h3>
          <div className={styles.promo_post_menu}>
            <p>Pizza no stop</p>
            <p>Patatine</p>
            <p>Bevanda</p>
          </div>
          <div className={styles.promo_post_price}>
            <h4>{Number(29)} €</h4>
          </div>
        </div>
      </section>
    </main>
  );
}

export default Offerte;
