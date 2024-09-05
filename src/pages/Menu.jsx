import { useContext, useState } from "react";
import styles from "./Menu.module.scss";
import { OffersContext } from "../contexts/OffersContext";
import Spinner from "../components/Spinner";

function Menu() {
  const { state, dispatch } = useContext(OffersContext);
  const { list_pizzas, isLoading } = state;

  const [imageLoading, setImageLoading] = useState({});

  // Funzione per impostare lo stato di caricamento delle immagini
  const handleImageLoad = (id) => {
    setImageLoading((prevState) => ({
      ...prevState,
      [id]: false,
    }));
  };

  return (
    <div className={styles.background}>
      <h1 className={styles.title}>Esplora il nostro menù di pizze...</h1>
      <br />{" "}
      <h2 className={styles.subTitle}>
        un viaggio tra sapori autentici e creazioni originali
      </h2>
      {isLoading ? (
        <Spinner />
      ) : (
        <main className={styles.container}>
          {list_pizzas
            .sort((a, b) => a.price - b.price)
            .map((pizza) => (
              <section className={styles.pizza} key={pizza.id}>
                <h1 className={styles.pizza_name}>{pizza.name}</h1>
                <div className={styles.pizza_photo}>
                  {imageLoading[pizza.id] !== false && <Spinner />}

                  <img
                    src={pizza.photo}
                    alt={pizza.name}
                    onLoad={() => handleImageLoad(pizza.id)}
                    style={{
                      display:
                        imageLoading[pizza.id] === false ? "block" : "none",
                    }}
                  />
                </div>
                <div className={styles.pizza_main}>
                  <h3 className={styles.pizza_main_ingredients}>ingredienti</h3>
                  {pizza.ingredients.map((ingredient) => (
                    <p
                      className={styles.pizza_main_ingredients_items}
                      key={ingredient.id}
                    >
                      {ingredient.name}
                    </p>
                  ))}
                </div>

                <div className={styles.pizza_footer}>
                  {pizza.vegetarian && (
                    <p className={styles.pizza_footer_vegetarian}>
                      {" "}
                      Vegetariana
                    </p>
                  )}
                  <h3
                    className={styles.pizza_footer_price}
                  >{`${pizza.price} €`}</h3>
                </div>
              </section>
            ))}
        </main>
      )}
    </div>
  );
}

export default Menu;
