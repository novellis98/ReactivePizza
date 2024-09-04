import { useContext } from "react";
import styles from "./Cart.module.scss";
import { PostContext } from "../contexts/Context";

function Cart() {
  const { state, dispatch } = useContext(PostContext);
  const { show_cart, cart, total_price } = state;

  return (
    <div className={`${styles.cart} ${show_cart ? styles.open : ""}`}>
      <button
        className={styles.close_button}
        onClick={() => dispatch({ type: "SHOW_CART" })}
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
                  <h3 className={styles.cart_order_item_menu_selected}>
                    {item.menuSelected}
                  </h3>
                  <p className={styles.cart_order_item_detail}>
                    <strong>Pizza:</strong>{" "}
                    {item.pizzas ? item.pizzas : "Nessuna selezionata"}
                  </p>
                  <p className={styles.cart_order_item_detail_1}>
                    <strong>Patatine:</strong>{" "}
                    {item.potatoes ? item.potatoes : "Nessuna selezionata"}
                  </p>
                  <p className={styles.cart_order_item_detail_2}>
                    <strong>Bevande:</strong>{" "}
                    {item.drinks ? item.drinks : "Nessuna selezionata"}
                  </p>
                  <p className={styles.cart_order_item_price}>
                    Prezzo: {item.price} €
                  </p>
                  <button
                    className={styles.cart_order_item_remove}
                    onClick={() =>
                      dispatch({ type: "REMOVE_FROM_CART", payload: index })
                    }
                  >
                    &times;
                  </button>
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
              dispatch({ type: "BUY" });
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
