import styles from "./OrderPromo.module.scss";
import { UsePost } from "../contexts/Context";

function OrderPromoPatatine() {
  const { patatine, handleShowListItemsPatatine } = UsePost();
  return (
    <>
      <ul className={styles.type}>
        {patatine.map((patate) => (
          <li className={styles.type_items} key={patate.id}>
            {patate.name}
          </li>
        ))}
      </ul>
      <button
        onClick={() => handleShowListItemsPatatine()}
        className={`${styles.btn} ${styles.type_btn}`}
      >
        &#8592;
      </button>
    </>
  );
}

export default OrderPromoPatatine;
