import { useState } from "react";
import styles from "./OrderPromo.module.scss";
import OrderPromoPizza from "./OrderPromoPizza";
function OrderPromo() {
  const [showListItems, setShowListItems] = useState(false);
  function handleShowListItems() {
    if (showListItems === false) setShowListItems(true);
    else setShowListItems(false);
  }
  return (
    <div className={styles.order}>
      <h1 className={styles.order_h1}>Modifica il tuo menù</h1>
      <h2 className={styles.order_h2}>Menù scelto : X</h2>
      <div className={styles.container}>
        <div className={styles.resume}>
          <h1 className={styles.resume_title}>Riassunto ordine</h1>
          <div className={styles.resume_products}>
            <div className={styles.resume_products_items}>
              <button
                className={`${styles.btn} ${styles.resume_products_items_select} `}
                onClick={() => handleShowListItems()}
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
          {showListItems && (
            <OrderPromoPizza handleShowListItems={handleShowListItems} />
          )}
          <ul className={styles.type}>
            Patatine
            {/* {pizze.map((pizza) => (
            <li className={styles.type_items} key={pizza.id}>{pizza.name}</li>
          ))} */}
          </ul>
          <ul className={styles.type}>
            Bevanda
            {/* {pizze.map((pizza) => (
            <li className={styles.type_items} key={pizza.id}>{pizza.name}</li>
          ))} */}
          </ul>
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
