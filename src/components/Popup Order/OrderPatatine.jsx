import styles from "./PopupOrder.module.scss";

import { useContext } from "react";
import { PostContext } from "../../contexts/Context";

function OrderPatatine() {
  const { state, dispatch } = useContext(PostContext);
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
            {potato.name}
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
