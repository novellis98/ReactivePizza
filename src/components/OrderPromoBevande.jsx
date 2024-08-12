import styles from "./OrderPromo.module.scss";
import { UsePost } from "../contexts/Context";

function OrderPromoBevande() {
  const { bevande, handleShowListItemsBevande } = UsePost();
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
        onClick={() => handleShowListItemsBevande()}
        className={`${styles.btn} ${styles.type_btn}`}
      >
        &#8592;
      </button>
    </>
  );
}

export default OrderPromoBevande;
