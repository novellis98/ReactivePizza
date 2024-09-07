import { useContext, useState } from "react";
import styles from "./OrderAddToCart.module.scss";
import { MenuFreeContext } from "../contexts/MenuFreeContext";
import { CartContext } from "../contexts/CartContext";

function OrderAddToCart(props, ref) {
  const { state: stateMenuFree, dispatch: dispatchMenuFree } =
    useContext(MenuFreeContext);
  const { selectedItem } = stateMenuFree;
  const { dispatch: dispatchCart } = useContext(CartContext);

  if (!selectedItem) return null;
  const [quantity, setQuantity] = useState(1);
  const totalPrice = selectedItem.price * quantity;
  const handleQuantityChange = (event) => {
    setQuantity(+event.target.value);
  };

  function onAddToCart() {
    dispatchMenuFree({
      type: "ADD_ITEM_TO_CART",
    });
    dispatchCart({
      type: "ADD_ITEM_TO_CART",
      payload: { selectedItem, quantity },
    });
  }

  return (
    <div className={styles.orderContainer} ref={ref}>
      <div className={styles.header}>
        <h2> {selectedItem.name} </h2>
        <button
          className={styles.closeButton}
          onClick={() => dispatchMenuFree({ type: "CLOSE_POPUP" })}
        >
          &times;
        </button>
      </div>
      <div>
        <label htmlFor="quantity">Quantità</label>
        <select
          name="quantity"
          id="quantity"
          value={quantity}
          onChange={handleQuantityChange}
          className={styles.select}
        >
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
        </select>
      </div>

      <p className={styles.price}>Prezzo totale: {totalPrice.toFixed(2)} €</p>
      <button
        className={styles.addToCartButton}
        onClick={() => {
          onAddToCart();
        }}
      >
        Aggiungi al Carrello
      </button>
    </div>
  );
}

export default OrderAddToCart;
