import { useContext } from "react";
import styles from "./PopupOrder.module.scss";
import { PostContext } from "../../contexts/Context";

function OrderBevande() {
  const { state, dispatch } = useContext(PostContext);
  const { list_drinks } = state;

  return (
    <>
      <ul className={styles.type}>
        {list_drinks.map((drink) => (
          <li
            className={styles.type_items}
            key={drink.id}
            onClick={() =>
              dispatch({ type: "SET_DRINKS", payload: drink.name })
            }
          >
            {drink.name}
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

export default OrderBevande;
