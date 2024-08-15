import styles from "./PopupOrder.module.scss";
import OrderPizza from "./OrderPizza";
import OrderPatatine from "./OrderPatatine";
import OrderBevande from "./OrderBevande";
import { UsePost } from "../../contexts/Context";
function PopupOrder() {
  const {
    visibleComponent,
    showPizze,
    showPatatine,
    showBevande,
    HandlePopupOrder,
    menuSelected,
    price,
    pizza,
    patate,
    drink,
  } = UsePost();

  return (
    <div className={styles.order}>
      <span className={styles.btn_close} onClick={HandlePopupOrder}></span>
      <h1 className={styles.order_h1}>Modifica il tuo menù</h1>
      <h2 className={styles.order_h2}>Menù scelto : {menuSelected}</h2>
      <div className={styles.container}>
        <div className={styles.resume}>
          <h1 className={styles.resume_title}>Riassunto ordine</h1>
          <div className={styles.resume_products}>
            <div className={styles.resume_products_items}>
              <button
                className={`${styles.btn} ${styles.resume_products_items_select} `}
                onClick={() => showPizze()}
              >
                Scegli pizza
              </button>
              <p>{pizza}</p>
            </div>
            <div className={styles.resume_products_items}>
              <button
                className={`${styles.btn} ${styles.resume_products_items_select} `}
                onClick={() => showPatatine()}
              >
                Scegli patatine
              </button>
              <p>{patate}</p>
            </div>
            <div className={styles.resume_products_items}>
              <button
                className={`${styles.btn} ${styles.resume_products_items_select} `}
                onClick={() => showBevande()}
              >
                Scegli bevanda
              </button>
              <p>{drink}</p>
            </div>
          </div>
        </div>
        <div className={styles.order_list}>
          {visibleComponent === "pizze" && <OrderPizza />}
          {visibleComponent === "patatine" && <OrderPatatine />}
          {visibleComponent === "bevande" && <OrderBevande />}
        </div>
        <div className={styles.addCart}>
          <h3 className={styles.addCart_price}>Prezzo: {price} €</h3>
          <button className={styles.btn}>aggiungi al carrello</button>
        </div>
      </div>
    </div>
  );
}

export default PopupOrder;
