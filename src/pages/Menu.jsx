import { useContext } from "react";
import styles from "./Menu.module.scss";
import { PostContext } from "../contexts/Context";

function Menu() {
  const { state, dispatch } = useContext(PostContext);
  const { list_pizzas } = state;

  return (
    <div className={styles.background}>
      <h1 className={styles.title}>Esplora il nostro menù di pizze...</h1>
      <br />{" "}
      <h2 className={styles.subTitle}>
        un viaggio tra sapori autentici e creazioni originali
      </h2>
      <main className={styles.container}>
        {list_pizzas.map((pizza) => (
          <section className={styles.pizza} key={pizza.id}>
            <h1 className={styles.pizza_name}>{pizza.name}</h1>
            <img
              className={styles.pizza_photo}
              // style={{ backgroundImage: `url(${pizza.url_photo})` }}
            ></img>
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
                <p className={styles.pizza_footer_vegetarian}> Vegetariana</p>
              )}
              <h3
                className={styles.pizza_footer_price}
              >{`${pizza.price} €`}</h3>
            </div>
          </section>
        ))}
      </main>
    </div>
  );
}

export default Menu;
