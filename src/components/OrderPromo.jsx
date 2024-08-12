import { useState } from "react";
import styles from "./OrderPromo.module.scss";
import OrderPromoPizza from "./OrderPromoPizza";
import OrderPromoPatatine from "./OrderPromoPatatine";
import OrderPromoBevande from "./OrderPromoBevande";
import { UsePost } from "../contexts/Context";
function OrderPromo() {
  const {
    showListItemsPizze,
    showListItemsPatatine,
    showListItemsBevande,
    handleShowListItemsPizze,
    handleShowListItemsPatatine,
    handleShowListItemsBevande,
    showOrderPromo,
    HandleShowPromo,
  } = UsePost();
  console.log(showOrderPromo);
  return (
    <div className={styles.order}>
      <button className={styles.btn_close} onClick={HandleShowPromo}>
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
                onClick={() => handleShowListItemsPizze()}
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
                onClick={() => handleShowListItemsPatatine()}
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
                onClick={() => handleShowListItemsBevande()}
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
          {showListItemsPizze && <OrderPromoPizza />}
          {showListItemsPatatine && <OrderPromoPatatine />}
          {showListItemsBevande && <OrderPromoBevande />}
        </div>
        <div className={styles.addCart}>
          <p className={styles.addCart_price}>Prezzo: X</p>
          <button className={styles.btn}>aggiungi al carrello</button>
        </div>
      </div>
    </div>
  );
}

export default OrderPromo;
