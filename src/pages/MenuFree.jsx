import { useContext, useState } from "react";
import styles from "./MenuFree.module.scss";
import { OffersContext } from "../contexts/OffersContext";
import { MenuFreeContext } from "../contexts/MenuFreeContext";
import OrderAddToCart from "../components/OrderAddToCart";

function MenuFree() {
  const { state, dispatch } = useContext(OffersContext);
  const { list_pizzas, list_potatoes, list_drinks } = state;

  const { state: stateMenuFree, dispatch: dispatchMenuFree } =
    useContext(MenuFreeContext);

  const { showOrderForm, selectedItem } = stateMenuFree;
  const handleClick = (item) => {
    dispatchMenuFree({ type: "OPEN_POPUP", payload: item });
  };

  return (
    <div className={styles.background}>
      <div className={styles.order}>
        {showOrderForm && selectedItem && <OrderAddToCart />}
        <h1 className={styles.order_title}>
          Ordina e scegli tutto ciò che preferisci
        </h1>

        <button
          className={`${styles.btn} ${styles.show_items} ${styles.pizzas}`}
        >
          pizze
        </button>

        <button
          className={`${styles.btn} ${styles.show_items} ${styles.potatoes}`}
        >
          patatine
        </button>

        <button
          className={`${styles.btn} ${styles.show_items} ${styles.drinks}`}
        >
          bevande
        </button>

        <div className={styles.list_items}>
          <h2 className={styles.items_title}>pizze</h2>

          <ul>
            {list_pizzas
              .sort((a, b) => a.price - b.price)
              .map((pizza) => (
                <li
                  key={pizza.id}
                  className={styles.items}
                  onClick={() => handleClick(pizza)}
                >
                  <div className={styles.items_box}>
                    <h3 className={styles.items_name}>{pizza.name}</h3>
                    <p className={styles.items_ingredients}>
                      (
                      {pizza.ingredients
                        .map((ingredient) => ingredient.name)
                        .join(", ")}
                      )
                    </p>
                    <p className={styles.items_price}>{pizza.price} €</p>
                  </div>
                </li>
              ))}
          </ul>
          <h2 className={styles.items_title}>patatine</h2>
          <ul>
            {list_potatoes
              .sort((a, b) => a.price - b.price)
              .map((potato) => (
                <li
                  key={potato.id}
                  className={styles.items}
                  onClick={() => handleClick(potato)}
                >
                  <div className={styles.items_box}>
                    <h3 className={styles.items_name}>{potato.name}</h3>
                    <p className={styles.items_ingredients}>
                      (
                      {potato.ingredients
                        .map((ingredient) => ingredient)
                        .join(", ")}
                      )
                    </p>
                    <p className={styles.items_price}>{potato.price} €</p>
                  </div>
                </li>
              ))}
          </ul>
          <h2 className={styles.items_title}>bevande</h2>
          <ul>
            {list_drinks
              .sort((a, b) => a.price - b.price)
              .map((drink) => (
                <li
                  key={drink.id}
                  className={styles.items}
                  onClick={() => handleClick(drink)}
                >
                  <div className={styles.items_box}>
                    <h3 className={styles.items_name}>{drink.name}</h3>

                    <p className={styles.items_price}>{drink.price} €</p>
                  </div>
                </li>
              ))}
          </ul>
        </div>

        <button className={styles.addToCartButton}>Aggiungi al Carrello</button>
      </div>
    </div>
  );
}

export default MenuFree;
