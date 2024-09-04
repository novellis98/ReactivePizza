import styles from "./PopupOrder.module.scss";

import { useContext } from "react";
import { OffersContext } from "../../contexts/OffersContext";

function OrderPatatine() {
  const { state, dispatch } = useContext(OffersContext);
  const { list_potatoes } = state;

  return (
    <>
      <ul className={styles.type}>
        {list_potatoes.map((potato) => (
          <li
            className={styles.type_items}
            key={potato.id}
            onClick={() =>
              dispatch({ type: "SET_POTATOES", payload: potato.name })
            }
          >
            {potato.name} <br />
            <p className={styles.type_items_ingredients}>
              ({potato.ingredients.map((ingredient) => ingredient).join(", ")})
            </p>
          </li>
        ))}
      </ul>
      <button
        onClick={() => dispatch({ type: "SHOW_COMPONENT", payload: "" })}
        className={`${styles.btn} ${styles.type_btn}`}
      >
        &#8592;
      </button>
    </>
  );
}

export default OrderPatatine;
