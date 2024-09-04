import React, { useContext, useState } from "react";
import styles from "./OrderAddToCart.module.scss";
import { MenuFreeContext } from "../contexts/MenuFreeContext";

function OrderAddToCart() {
  const { state: stateOrderCart, dispatch: dispatchOrderCart } =
    useContext(MenuFreeContext);
  const { showOrderForm, selectedItem } = stateOrderCart;

  if (!selectedItem) return null;
  const [quantity, setQuantity] = useState(1);
  const totalPrice = selectedItem.price * quantity;
  const handleQuantityChange = (event) => {
    setQuantity(+event.target.value);
  };

  function onAddToCart(selectedItem, quantity) {
    dispatchOrderCart({
      type: "ADD_TO_CART",
      payload: { selectedItem, quantity },
    });
  }

  return (
    <div className={styles.orderContainer}>
      <div className={styles.header}>
        <h2> {selectedItem.name} </h2>
        <button
          className={styles.closeButton}
          onClick={() => dispatchOrderCart({ type: "CLOSE_POPUP" })}
        >
          &times;
        </button>
      </div>
      <select
        name="quantity"
        id="quantity"
        value={quantity}
        onChange={handleQuantityChange}
      >
        <option value="1">1</option>
        <option value="2">2</option>
        <option value="3">3</option>
        <option value="4">4</option>
      </select>
      <p className={styles.price}>Prezzo totale: {totalPrice.toFixed(2)} €</p>
      <button
        className={styles.addToCartButton}
        onClick={() => onAddToCart(selectedItem, quantity)}
      >
        Aggiungi al Carrello
      </button>
    </div>
  );
}

export default OrderAddToCart;
