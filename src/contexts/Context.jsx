import { createContext, useReducer, useEffect } from "react";
const initialState = {
  visibleComponent: "",
  showPopupOrder: false,
  list_pizzas: [],
  list_potatoes: [],
  list_drinks: [],
  menuSelected: null,
  price: null,
  pizzas: null,
  potatoes: null,
  drinks: null,
  cart: [],
  show_cart: false,
  articles: 0,
  total_price: 0,
};

function orderReducer(state, action) {
  switch (action.type) {
    case "TOGGLE_POPUP":
      return {
        ...state,
        showPopupOrder: !state.showPopupOrder,
        visibleComponent: "",
        pizzas: null,
        potatoes: null,
        drinks: null,
      };
    case "SHOW_COMPONENT":
      return { ...state, visibleComponent: action.payload };
    case "SET_MENU":
      return {
        ...state,
        menuSelected: action.payload.menu,
        price: action.payload.price,
        showPopupOrder: true,
      };
    case "SET_LIST_PIZZAS":
      return { ...state, list_pizzas: action.payload };
    case "SET_LIST_POTATOES":
      return { ...state, list_potatoes: action.payload };
    case "SET_LIST_DRINKS":
      return { ...state, list_drinks: action.payload };
    case "SET_PIZZAS":
      return { ...state, pizzas: action.payload };
    case "SET_POTATOES":
      return { ...state, potatoes: action.payload };
    case "SET_DRINKS":
      return { ...state, drinks: action.payload };
    case "ADD_CART":
      if (state.pizzas && state.potatoes && state.drinks) {
        return {
          ...state,
          cart: [
            ...state.cart,
            {
              menuSelected: state.menuSelected,
              price: state.price,
              pizzas: state.pizzas,
              potatoes: state.potatoes,
              drinks: state.drinks,
            },
          ],
          articles: state.articles++,
          total_price: state.cart.reduce(
            (acc, item) => acc + Number(item.price),
            0
          ),

          pizzas: null,
          potatoes: null,
          drinks: null,
          showPopupOrder: false,
        };
      } else {
        return state;
      }
    case "UPDATE_TOTAL_PRICE":
      return {
        ...state,
        total_price: action.payload,
      };
    case "SHOW_CART":
      return {
        ...state,
        show_cart: !state.show_cart,
      };
    case "REMOVE_FROM_CART":
      return {
        ...state,
        cart: state.cart.filter((_, index) => index !== action.payload),
        articles: state.articles--,
      };

    default:
      throw new Error(`Unknown action: ${action.type}`);
  }
}

const PostContext = createContext();

function PostProvider({ children }) {
  const [state, dispatch] = useReducer(orderReducer, initialState);

  useEffect(() => {
    fetch(`../data/pizze.json`)
      .then((res) => res.json())
      .then((data) => dispatch({ type: "SET_LIST_PIZZAS", payload: data }));
  }, []);

  useEffect(() => {
    fetch(`../data/patatine.json`)
      .then((res) => res.json())
      .then((data) => dispatch({ type: "SET_LIST_POTATOES", payload: data }));
  }, []);

  useEffect(() => {
    fetch(`../data/bevande.json`)
      .then((res) => res.json())
      .then((data) => dispatch({ type: "SET_LIST_DRINKS", payload: data }));
  }, []);

  useEffect(() => {
    const totalPrice = state.cart.reduce(
      (acc, item) => acc + (Number(item.price) || 0),
      0
    );
    dispatch({ type: "UPDATE_TOTAL_PRICE", payload: totalPrice });
  }, [state.cart]);

  return (
    <PostContext.Provider value={{ state, dispatch }}>
      {children}
    </PostContext.Provider>
  );
}

export { PostProvider, PostContext };
