import { createContext, useReducer } from "react";

const initialState = {
  showAlert: false,
  alertMessage: "",
  selectedItem: null,
  cart: [],
  show_cart: false,
  articles: 0,
  total_price: 0,
  updatedCart: [],
  quantity: 1,
};
function orderReducer(state, action) {
  switch (action.type) {
    case "SHOW_CART":
      return {
        ...state,
        show_cart: !state.show_cart,
      };

    case "ADD_TO_CART":
      const updatedCart = [...state.cart, action.payload];

      return {
        ...state,
        showOrderForm: false,
        cart: updatedCart,
        articles: state.articles + 1,
        total_price: state.total_price + Number(action.payload.price),
        showAlert: true,
        alertMessage: "Articolo aggiunto al carrello!",
      };

    // case "ADD_TO_CART":
    //   // Controlla se l'articolo è già presente nel carrello
    //   const itemIndex = state.cart.findIndex(
    //     (item) => item.id === action.payload.id
    //   );
    //   let updatedCart;

    //   if (itemIndex > -1) {
    //     // L'articolo esiste già, aggiorna la sua quantità
    //     updatedCart = [...state.cart];
    //     updatedCart[itemIndex] = {
    //       ...updatedCart[itemIndex],
    //       quantity: updatedCart[itemIndex].quantity + action.quantity,
    //     };
    //   } else {
    //     // L'articolo non esiste, aggiungi il nuovo articolo
    //     updatedCart = [
    //       ...state.cart,
    //       { ...action.payload, quantity: action.quantity },
    //     ];
    //   }
    //   return {
    //     ...state,
    //     showOrderForm: false,
    //     cart: updatedCart,
    //     articles: state.articles + action.quantity,
    //     total_price:
    //       state.total_price + Number(action.payload.price) * action.quantity,
    //     showAlert: true,
    //     alertMessage: "Articolo aggiunto al carrello!",
    //   };
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
        total_price: 0,
      };

    default:
      return state;
  }
}
const CartContext = createContext();
function CartProvider({ children }) {
  const [state, dispatch] = useReducer(orderReducer, initialState);
  return (
    <CartContext.Provider value={{ state, dispatch }}>
      {children}
    </CartContext.Provider>
  );
}

export { CartProvider, CartContext };
