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
  // showAlert: false,
  // alertMessage: "",
  // cart: [],
  // show_cart: false,
  // articles: 0,
  // total_price: 0,
  // updatedCart: [],
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

    case "ADD_TO_CART":
      return {
        ...state,
        pizzas: null,
        potatoes: null,
        drinks: null,
        visibleComponent: "",
        showPopupOrder: false,
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
