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
  showAlert: false,
  alertMessage: "",
  cart: [],
  show_cart: false,
  articles: 0,
  total_price: 0,
  updatedCart: [],
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

    case "SHOW_CART":
      return {
        ...state,
        show_cart: !state.show_cart,
      };

    case "ADD_TO_CART":
      const updatedCart = [...state.cart, action.payload];
      return {
        ...state,
        cart: updatedCart,
        articles: state.articles + 1,
        total_price: state.total_price + Number(action.payload.price),
        pizzas: null,
        potatoes: null,
        drinks: null,
        visibleComponent: "",
        showPopupOrder: false,
        showAlert: true,
        alertMessage: "Articolo aggiunto al carrello!",
      };
    case "HIDE_ALERT":
      return {
        ...state,
        showAlert: false,
        alertMessage: "",
      };

    case "REMOVE_FROM_CART":
      const filteredCart = state.cart.filter(
        (_, index) => index !== action.payload
      );
      return {
        ...state,
        cart: filteredCart,
        articles: state.articles - 1,
        total_price: filteredCart.reduce(
          (acc, item) => acc + (Number(item.price) || 0),
          0
        ),
      };
    case "BUY":
      return {
        ...state,
        cart: [],
        articles: 0,
      };

    default:
      throw new Error(`Unknown action: ${action.type}`);
  }
}

const OffersContext = createContext();

function OffersProvider({ children }) {
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

  return (
    <OffersContext.Provider value={{ state, dispatch }}>
      {children}
    </OffersContext.Provider>
  );
}

export { OffersProvider, OffersContext };
