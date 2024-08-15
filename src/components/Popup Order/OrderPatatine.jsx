import styles from "./PopupOrder.module.scss";
import { UsePost } from "../../contexts/Context";

function OrderPatatine() {
  const { patatine, showPatatine, handleSetPatate } = UsePost();

  return (
    <>
      <ul className={styles.type}>
        {patatine.map((patate) => (
          <li
            className={styles.type_items}
            key={patate.id}
            onClick={() => handleSetPatate(patate.name)}
          >
            {patate.name}
          </li>
        ))}
      </ul>
      <button
        onClick={() => showPatatine()}
        className={`${styles.btn} ${styles.type_btn}`}
      >
        &#8592;
      </button>
    </>
  );
}

export default OrderPatatine;
