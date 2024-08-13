import styles from "./PopupOrder.module.scss";
import { UsePost } from "../../contexts/Context";

function OrderBevande() {
  const { bevande, showBevande } = UsePost();
  return (
    <>
      <ul className={styles.type}>
        {bevande.map((bevanda) => (
          <li className={styles.type_items} key={bevanda.id}>
            {bevanda.name}
          </li>
        ))}
      </ul>
      <button
        onClick={() => showBevande()}
        className={`${styles.btn} ${styles.type_btn}`}
      >
        &#8592;
      </button>
    </>
  );
}

export default OrderBevande;
