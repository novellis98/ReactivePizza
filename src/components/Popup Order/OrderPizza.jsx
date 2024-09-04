import styles from "./PopupOrder.module.scss";
import { OffersContext } from "../../contexts/OffersContext";
import { useContext } from "react";

function OrderPizza() {
  const { state, dispatch } = useContext(OffersContext);
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
            {pizza.name} <br />
            <p className={styles.type_items_ingredients}>
              (
              {pizza.ingredients
                .map((ingredient) => ingredient.name)
                .join(", ")}
              )
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

export default OrderPizza;
