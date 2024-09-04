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
  isLoading: true,
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
    case "SET_LOADING":
      return { ...state, isLoading: true };
    case "LOADING_COMPLETE":
      return { ...state, isLoading: false };
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
    const fetchData = async () => {
      dispatch({ type: "SET_LOADING" });

      try {
        const pizzaResponse = await fetch("../data/pizze.json");
        const pizzas = await pizzaResponse.json();
        dispatch({ type: "SET_LIST_PIZZAS", payload: pizzas });

        const potatoResponse = await fetch("../data/patatine.json");
        const potatoes = await potatoResponse.json();
        dispatch({ type: "SET_LIST_POTATOES", payload: potatoes });

        const drinkResponse = await fetch("../data/bevande.json");
        const drinks = await drinkResponse.json();
        dispatch({ type: "SET_LIST_DRINKS", payload: drinks });

        dispatch({ type: "LOADING_COMPLETE" });
      } catch (error) {
        console.error("Error loading data:", error);
        // Gestisci l'errore di caricamento
        dispatch({ type: "LOADING_COMPLETE" });
      }
    };

    fetchData();
  }, []);

  return (
    <OffersContext.Provider value={{ state, dispatch }}>
      {children}
    </OffersContext.Provider>
  );
}

export { OffersProvider, OffersContext };
