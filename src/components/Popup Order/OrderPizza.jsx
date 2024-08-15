import styles from "./PopupOrder.module.scss";
import { UsePost } from "../../contexts/Context";

function OrderPizza() {
  const { pizze, showPizze, handleSetPizza } = UsePost();
  return (
    <>
      <ul className={styles.type}>
        {pizze.map((pizza) => (
          <li
            className={styles.type_items}
            key={pizza.id}
            onClick={() => handleSetPizza(pizza.name)}
          >
            {pizza.name}
          </li>
        ))}
      </ul>
      <button
        onClick={() => showPizze()}
        className={`${styles.btn} ${styles.type_btn}`}
      >
        &#8592;
      </button>
    </>
  );
}

export default OrderPizza;
