import styles from "./PopupOrder.module.scss";

import { PostContext } from "../../contexts/Context";
import { useContext } from "react";

function OrderPizza() {
  const { state, dispatch } = useContext(PostContext);
  const { list_pizzas } = state;

  return (
    <>
      <ul className={styles.type}>
        {list_pizzas.map((pizza) => (
          <li
            className={styles.type_items}
            key={pizza.id}
            onClick={() =>
              dispatch({ type: "SET_PIZZAS", payload: pizza.name })
            }
          >
            {pizza.name}
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

export default OrderPizza;
