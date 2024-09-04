import React, { useContext, useEffect } from "react";
import { PostContext } from "../contexts/Context";
import styles from "./AlertAddToCart.module.scss";

function AlertAddToCart() {
  const { state, dispatch } = useContext(PostContext);
  const { showAlert, alertMessage } = state;

  useEffect(() => {
    if (showAlert) {
      const timer = setTimeout(() => {
        dispatch({ type: "HIDE_ALERT" });
      }, 1000);

      return () => clearTimeout(timer); // Pulizia del timer se il componente viene smontato
    }
  }, [showAlert, dispatch]);

  if (!showAlert) return null; // Non rendere nulla se showAlert è false

  return <div className={styles.alert}>{alertMessage}</div>;
}

export default AlertAddToCart;
