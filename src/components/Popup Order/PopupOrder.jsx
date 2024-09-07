import styles from "./PopupOrder.module.scss";
import OrderPizza from "./OrderPizza";
import OrderPatatine from "./OrderPatatine";
import OrderBevande from "./OrderBevande";
import { useContext, useEffect } from "react";
import { OffersContext } from "../../contexts/OffersContext";
import { CartContext } from "../../contexts/CartContext";

function PopupOrder() {
  const { state, dispatch } = useContext(OffersContext);
  const { visibleComponent, menuSelected, price, pizzas, potatoes, drinks } =
    state;
  const { dispatch: dispatchCart } = useContext(CartContext);

  //reset popup data when changing page
  useEffect(() => {
    dispatch({ type: "RESET" });
  }, [dispatch]);
  //
  return (
    <div className={styles.order}>
      <span
        className={styles.btn_close}
        onClick={() => dispatch({ type: "TOOGLE_POPUP" })}
      ></span>
      <h1 className={styles.order_h1}>Modifica il tuo menù</h1>
      <h2 className={styles.order_h2}>Menù scelto : {menuSelected}</h2>
      <div
        className={`${styles.container} 
          visibleComponent !== "" ? styles.expanded : ""
        }`}
      >
        <div className={styles.resume}>
          <h1 className={styles.resume_title}>Riassunto ordine</h1>
          <div className={styles.resume_products}>
            <div className={styles.resume_products_items}>
              <button
                className={`${styles.btn} ${styles.resume_products_items_select} `}
                onClick={() =>
                  dispatch({ type: "SHOW_COMPONENT", payload: "list_pizzas" })
                }
              >
                Scegli pizza
              </button>
              <p>{pizzas}</p>
            </div>
            <div className={styles.resume_products_items}>
              <button
                className={`${styles.btn} ${styles.resume_products_items_select} `}
                onClick={() =>
                  dispatch({ type: "SHOW_COMPONENT", payload: "list_potatoes" })
                }
              >
                Scegli patatine
              </button>
              <p>{potatoes}</p>
            </div>
            <div className={styles.resume_products_items}>
              <button
                className={`${styles.btn} ${styles.resume_products_items_select} `}
                onClick={() =>
                  dispatch({ type: "SHOW_COMPONENT", payload: "list_drinks" })
                }
              >
                Scegli bevanda
              </button>
              <p>{drinks}</p>
            </div>
          </div>
        </div>
        <div className={styles.order_list}>
          {visibleComponent === "list_pizzas" && <OrderPizza />}
          {visibleComponent === "list_potatoes" && <OrderPatatine />}
          {visibleComponent === "list_drinks" && <OrderBevande />}
        </div>
        <div className={styles.addCart}>
          <h3 className={styles.addCart_price}>Prezzo: {price} €</h3>
          <button
            className={styles.btn}
            onClick={() => {
              if (state.pizzas && state.potatoes && state.drinks) {
                const newItem = {
                  menuSelected,
                  price,
                  pizzas,
                  potatoes,
                  drinks,
                };
                dispatchCart({
                  type: "ADD_OFFER_TO_CART",
                  payload: newItem,
                });
                dispatch({ type: "ADD_TO_CART" });
              } else {
                dispatchCart({ type: "ALERT" });
              }
            }}
          >
            aggiungi al carrello
          </button>
        </div>
      </div>
    </div>
  );
}

export default PopupOrder;
