import { useState } from "react";
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
  } = UsePost();

  return (
    <div className={styles.order}>
      <button className={styles.btn_close} onClick={HandlePopupOrder}>
        cazzo
      </button>
      <h1 className={styles.order_h1}>Modifica il tuo menù</h1>
      <h2 className={styles.order_h2}>Menù scelto : X</h2>
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
              <p>X</p>
              <div>
                <div>
                  <label htmlFor="quantity">quantità </label>
                  <select id="quantity">
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                  </select>
                </div>
              </div>
            </div>
            <div className={styles.resume_products_items}>
              <button
                className={`${styles.btn} ${styles.resume_products_items_select} `}
                onClick={() => showPatatine()}
              >
                Scegli patatine
              </button>
              <p>X</p>
              <div>
                <div>
                  <label htmlFor="quantity">quantità </label>
                  <select id="quantity">
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                  </select>
                </div>
              </div>
            </div>
            <div className={styles.resume_products_items}>
              <button
                className={`${styles.btn} ${styles.resume_products_items_select} `}
                onClick={() => showBevande()}
              >
                Scegli bevanda
              </button>
              <p>X</p>
              <div>
                <div>
                  <label htmlFor="quantity">quantità </label>
                  <select id="quantity">
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                  </select>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.order_list}>
          {visibleComponent === "pizze" && <OrderPizza />}
          {visibleComponent === "patatine" && <OrderPatatine />}
          {visibleComponent === "bevande" && <OrderBevande />}
          {/* {!showListItemsPatatine &&
            !showListItemsBevande &&
            showListItemsPizze && <OrderPizza />} */}
          {/* {!showListItemsPizze &&
            !showListItemsBevande &&
            showListItemsPatatine && <OrderPatatine />}
          {!showListItemsPizze &&
            !showListItemsPatatine &&
            showListItemsBevande && <OrderBevande />} */}
        </div>
        <div className={styles.addCart}>
          <p className={styles.addCart_price}>Prezzo: X</p>
          <button className={styles.btn}>aggiungi al carrello</button>
        </div>
      </div>
    </div>
  );
}

export default PopupOrder;
