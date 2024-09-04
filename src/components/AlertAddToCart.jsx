import React, { useContext, useEffect } from "react";
import { OffersContext } from "../contexts/OffersContext";
import styles from "./AlertAddToCart.module.scss";

function AlertAddToCart() {
  const { state, dispatch } = useContext(OffersContext);
  const { showAlert, alertMessage } = state;

  useEffect(() => {
    if (showAlert) {
      const timer = setTimeout(() => {
        dispatch({ type: "HIDE_ALERT" });
      }, 1000);

      return () => clearTimeout(timer);
    }
  }, [showAlert, dispatch]);

  if (!showAlert) return null;

  return <div className={styles.alert}>{alertMessage}</div>;
}

export default AlertAddToCart;
