import { useContext, useEffect, useRef, useState } from "react";
import styles from "./OrderAddToCart.module.scss";
import { MenuFreeContext } from "../contexts/MenuFreeContext";
import { CartContext } from "../contexts/CartContext";

function OrderAddToCart() {
  const { state: stateMenuFree, dispatch: dispatchMenuFree } =
    useContext(MenuFreeContext);
  const { selectedItem } = stateMenuFree;
  const { dispatch: dispatchCart } = useContext(CartContext);

  const [quantity, setQuantity] = useState(1);
  const totalPrice = selectedItem.price * quantity;

  const handleQuantityChange = (event) => {
    setQuantity(+event.target.value);
  };

  const onAddToCart = () => {
    dispatchMenuFree({ type: "ADD_ITEM_TO_CART" });
    dispatchCart({
      type: "ADD_ITEM_TO_CART",
      payload: { selectedItem, quantity },
    });
  };
  //close popup when clicking outside
  const popupRef = useRef(null);
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (popupRef.current && !popupRef.current.contains(event.target)) {
        dispatchMenuFree({ type: "CLOSE_POPUP" });
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [dispatchMenuFree]);

  return (
    <div className={styles.orderContainer} ref={popupRef}>
      <div className={styles.header}>
        <h2>{selectedItem.name}</h2>
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
          {[1, 2, 3, 4].map((num) => (
            <option key={num} value={num}>
              {num}
            </option>
          ))}
        </select>
      </div>

      <p className={styles.price}>Prezzo totale: {totalPrice.toFixed(2)} €</p>
      <button className={styles.addToCartButton} onClick={onAddToCart}>
        Aggiungi al Carrello
      </button>
    </div>
  );
}

export default OrderAddToCart;
