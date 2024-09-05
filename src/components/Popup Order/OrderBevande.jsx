import { useContext } from "react";
import styles from "./PopupOrder.module.scss";
import { OffersContext } from "../../contexts/OffersContext";
import Spinner from "../Spinner";

function OrderBevande() {
  const { state, dispatch } = useContext(OffersContext);
  const { list_drinks, isLoading } = state;

  return (
    <>
      {isLoading ? (
        <Spinner />
      ) : (
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
      )}
    </>
  );
}

export default OrderBevande;
