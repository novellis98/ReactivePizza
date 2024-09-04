import { useContext, useState } from "react";
import styles from "./Cart.module.scss";
import { CartContext } from "../contexts/CartContext";

function Cart() {
  const { state: stateCart, dispatch: dispatchCart } = useContext(CartContext);
  const { show_cart, cart, total_price } = stateCart;

  return (
    <div className={`${styles.cart} ${show_cart ? styles.open : ""}`}>
      <button
        className={styles.close_button}
        onClick={() => dispatchCart({ type: "SHOW_CART" })}
      >
        &times;
      </button>
      <div className={styles.cart_content}>
        <h1 className={styles.cart_content_title}>Il Tuo Carrello</h1>

        {cart.length > 0 ? (
          <div className={styles.cart_order}>
            <ul className={styles.cart_order_list}>
              {cart.map((item, index) => (
                <li key={index} className={styles.cart_order_item}>
                  {item.menuSelected ? (
                    <>
                      <h3 className={styles.cart_order_item_menu_selected}>
                        {item.menuSelected}
                      </h3>
                      <p className={styles.cart_order_item_detail}>
                        <strong>Pizza:</strong>{" "}
                        {item.pizzas ? item.pizzas : "Nessuna selezionata"}
                      </p>
                      <p className={styles.cart_order_item_detail}>
                        <strong>Patatine:</strong>{" "}
                        {item.potatoes ? item.potatoes : "Nessuna selezionata"}
                      </p>
                      <p className={styles.cart_order_item_detail}>
                        <strong>Bevande:</strong>{" "}
                        {item.drinks ? item.drinks : "Nessuna selezionata"}
                      </p>
                      <p className={styles.cart_order_item_price}>
                        Prezzo: {item.price} €
                      </p>
                      <button
                        className={styles.cart_order_item_remove}
                        onClick={() =>
                          dispatchCart({
                            type: "REMOVE_FROM_CART",
                            payload: index,
                          })
                        }
                      >
                        &times;
                      </button>
                    </>
                  ) : (
                    <>
                      <div>
                        <h3 className={styles.cart_order_item_detail}>
                          {item.name ? item.name : "Nessuna selezionata"}
                        </h3>
                        <label htmlFor="quantity">Quantità</label>
                        <select
                          name="quantity"
                          id="quantity"
                          className={styles.select}
                        >
                          <option value="1">1</option>
                          <option value="2">2</option>
                          <option value="3">3</option>
                          <option value="4">4</option>
                        </select>
                      </div>

                      <p className={styles.cart_order_item_price}>
                        Prezzo: {item.price} €
                      </p>
                      <button
                        className={styles.cart_order_item_remove}
                        onClick={() =>
                          dispatchCart({
                            type: "REMOVE_FROM_CART",
                            payload: index,
                          })
                        }
                      >
                        &times;
                      </button>
                    </>
                  )}
                </li>
              ))}
            </ul>
          </div>
        ) : (
          <p className={styles.cart_content_empty}>Il carrello è vuoto</p>
        )}
        {cart.length > 0 && (
          <h2 className={styles.cart_order_total}>
            Totale carrello : {total_price} €
          </h2>
        )}
        {cart.length > 0 && (
          <button
            className={styles.cart_order_buy}
            onClick={() => {
              alert("Ordine inviato, grazie per averci scelto");
              dispatchCart({ type: "BUY" });
            }}
          >
            Acquista
          </button>
        )}
      </div>
    </div>
  );
}

export default Cart;
