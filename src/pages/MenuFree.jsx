import { useContext, useEffect } from "react";
import styles from "./MenuFree.module.scss";
import { OffersContext } from "../contexts/OffersContext";
import { MenuFreeContext } from "../contexts/MenuFreeContext";
import OrderAddToCart from "../components/OrderAddToCart";
import AlertAddToCart from "../components/AlertAddToCart";
import Spinner from "../components/Spinner";

function MenuFree() {
  const { state } = useContext(OffersContext);
  const { list_pizzas, list_potatoes, list_drinks, isLoading } = state;

  const { state: stateMenuFree, dispatch: dispatchMenuFree } =
    useContext(MenuFreeContext);

  const { showOrderForm, selectedItem } = stateMenuFree;
  const handleClick = (item) => {
    dispatchMenuFree({ type: "OPEN_POPUP", payload: item });
  };

  useEffect(() => {
    dispatchMenuFree({ type: "CLOSE_POPUP" });
  }, [dispatchMenuFree]);
  useEffect(() => {
    //set body fixed when popup is open
    if (showOrderForm) {
      document.documentElement.style.overflow = "hidden";
      document.body.style.pointerEvents = "none";
    } else {
      document.documentElement.style.overflow = "";
      document.body.style.pointerEvents = "auto";
    }
    return () => {
      document.documentElement.style.overflow = "";
      document.body.style.pointerEvents = "auto";
    };
  }, [showOrderForm]);

  function scrollToPizzas() {
    const element = document.getElementById("pizzas");
    const elementPosition = element.getBoundingClientRect().top;
    window.scrollTo({
      top: elementPosition - 208,
      behavior: "smooth",
    });
  }
  function scrollToPotatoes() {
    const element = document.getElementById("potatoes");
    const elementPosition = element.getBoundingClientRect().top;
    window.scrollTo({
      top: elementPosition - 208,
      behavior: "smooth",
    });
  }
  function scrollToDrinks() {
    const element = document.getElementById("drinks");
    const elementPosition = element.getBoundingClientRect().top;
    window.scrollTo({
      top: elementPosition - 208,
      behavior: "smooth",
    });
  }
  return (
    <div className={styles.background}>
      <AlertAddToCart />
      <div className={styles.order}>
        {showOrderForm && selectedItem && <OrderAddToCart />}
        <h1 className={styles.order_title}>
          Ordina e scegli tutto ciò che preferisci
        </h1>
        <button
          className={`${styles.btn} ${styles.show_items} ${styles.pizzas}`}
          onClick={scrollToPizzas}
        >
          pizze
        </button>
        <button
          className={`${styles.btn} ${styles.show_items} ${styles.potatoes}`}
          onClick={scrollToPotatoes}
        >
          patatine
        </button>
        <button
          className={`${styles.btn} ${styles.show_items} ${styles.drinks}`}
          onClick={scrollToDrinks}
        >
          bevande
        </button>
        <div className={styles.list_container}>
          {isLoading ? (
            <Spinner />
          ) : (
            <>
              <h2 className={styles.items_title} id="pizzas">
                pizze
              </h2>

              <ul className={styles.list_items}>
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
              <h2 className={styles.items_title} id="potatoes">
                patatine
              </h2>
              <ul className={styles.list_items}>
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
              <h2 className={styles.items_title} id="drinks">
                bevande
              </h2>
              <ul className={styles.list_items}>
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
            </>
          )}
        </div>
      </div>
    </div>
  );
}

export default MenuFree;
