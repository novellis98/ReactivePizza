import styles from "./OrderPromo.module.scss";
import { UsePost } from "../contexts/Context";

function OrderPromoPizza({ handleShowListItems }) {
  const pizze = UsePost();
  return (
    <>
      <ul className={styles.type}>
        {pizze.map((pizza) => (
          <li className={styles.type_items} key={pizza.id}>
            {pizza.name}
          </li>
        ))}
      </ul>
      <button
        onClick={() => handleShowListItems()}
        className={`${styles.btn} ${styles.type_btn}`}
      >
        &#8592;
      </button>
    </>
  );
}

export default OrderPromoPizza;
