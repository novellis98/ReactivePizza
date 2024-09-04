import React, { useContext, useEffect } from "react";
import styles from "./AlertAddToCart.module.scss";
import { CartContext } from "../contexts/CartContext";

function AlertAddToCart() {
  const { state: stateCart, dispatch: dispatchCart } = useContext(CartContext);
  const { showAlert, alertMessage } = stateCart;

  useEffect(() => {
    if (showAlert) {
      const timer = setTimeout(() => {
        dispatchCart({ type: "HIDE_ALERT" });
      }, 1000);

      return () => clearTimeout(timer);
    }
  }, [showAlert, dispatchCart]);

  if (!showAlert) return null;

  return <div className={styles.alert}>{alertMessage}</div>;
}

export default AlertAddToCart;
