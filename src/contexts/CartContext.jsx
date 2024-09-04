import { createContext, useReducer } from "react";

const initialState = {
  selectedItem: null,
  cart: [],
  show_cart: false,
  articles: 0,
  total_price: 0,
  updatedCart: [],
};
function orderReducer(state, action) {
  switch (action.type) {
    case "ADD_TO_CART":
      return { ...state, showOrderForm: false };
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
