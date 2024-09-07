import { useContext, useEffect } from "react";
import styles from "./AlertAddToCart.module.scss";
import { CartContext } from "../contexts/CartContext";

function AlertAddToCart() {
  const { state: stateCart, dispatch: dispatchCart } = useContext(CartContext);
  const { showAlert, alertMessage, alertType } = stateCart;

  useEffect(() => {
    if (showAlert) {
      const timer = setTimeout(() => {
        dispatchCart({ type: "HIDE_ALERT" });
      }, 3000);

      return () => clearTimeout(timer);
    }
  }, [showAlert, dispatchCart]);

  if (!showAlert) return null;
  const alertClass = `${styles.alert} ${alertType === true ? styles.red : ""}`;

  return <div className={alertClass}>{alertMessage}</div>;
}

export default AlertAddToCart;
