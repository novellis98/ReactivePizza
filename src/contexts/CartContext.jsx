import { createContext, useReducer, useEffect } from "react";

const initialState = {
  showAlert: false,
  alertMessage: "",
  selectedItem: null,
  cart: [],
  show_cart: false,
  articles: 0,
  total_price: 0,
  quantity: 0,
  alertType: false,
};

const getInitialState = () => {
  const savedState = localStorage.getItem("cartState");
  return savedState ? JSON.parse(savedState) : initialState;
};

function orderReducer(state, action) {
  switch (action.type) {
    case "SHOW_CART":
      return {
        ...state,
        show_cart: !state.show_cart,
      };

    case "ADD_OFFER_TO_CART":
      const newOfferItem = [...state.cart, action.payload];
      return {
        ...state,
        showOrderForm: false,
        cart: newOfferItem,
        articles: state.articles + 1,
        total_price: state.total_price + Number(action.payload.price),
        showAlert: true,
        alertType: false,
        alertMessage: "Articolo aggiunto al carrello!",
      };

    case "ADD_ITEM_TO_CART":
      const itemIndex = state.cart.findIndex(
        (item) => item.id === action.payload.selectedItem.id
      );
      let newItem;

      if (itemIndex > -1) {
        newItem = [...state.cart];
        newItem[itemIndex] = {
          ...newItem[itemIndex],
          quantity: newItem[itemIndex].quantity + action.payload.quantity,
        };
      } else {
        newItem = [
          ...state.cart,
          { ...action.payload.selectedItem, quantity: action.payload.quantity },
        ];
      }
      return {
        ...state,
        showOrderForm: false,
        cart: newItem,
        articles: state.articles + action.payload.quantity,
        total_price:
          state.total_price +
          Number(action.payload.selectedItem.price) * action.payload.quantity,
        showAlert: true,
        alertType: false,
        alertMessage: "Articolo aggiunto al carrello!",
      };

    case "CHANGE_QUANTITY_INC":
      const incrementedCart = state.cart.map((item, index) => {
        if (index === action.payload) {
          return {
            ...item,
            quantity: item.quantity + 1,
          };
        }
        return item;
      });
      return {
        ...state,
        articles: state.articles + 1,
        cart: incrementedCart,
        total_price: incrementedCart.reduce(
          (acc, item) => acc + item.price * item.quantity,
          0
        ),
      };

    case "CHANGE_QUANTITY_DEC":
      const decrementedCart = state.cart.map((item, index) => {
        if (index === action.payload && item.quantity > 1) {
          return {
            ...item,
            quantity: item.quantity - 1,
          };
        }
        return item;
      });
      const newArticlesCount =
        state.cart[action.payload].quantity > 1
          ? state.articles - 1
          : state.articles;
      return {
        ...state,
        articles: newArticlesCount > 0 ? newArticlesCount : 0,
        cart: decrementedCart,
        total_price: decrementedCart.reduce(
          (acc, item) => acc + item.price * item.quantity,
          0
        ),
      };
    case "ALERT":
      return {
        ...state,
        showAlert: true,
        alertType: true,
        alertMessage:
          "Per favore, seleziona una pizza, patatine e una bevanda prima di aggiungere al carrello.",
      };
    case "HIDE_ALERT":
      return {
        ...state,
        showAlert: false,
        alertMessage: "",
        alertType: false,
      };

    case "REMOVE_FROM_CART":
      const removedItem = state.cart[action.payload];
      const itemQuantity = removedItem.quantity || 1;
      const filteredCart = state.cart.filter(
        (_, index) => index !== action.payload
      );
      const newArticlesCounts = state.articles - itemQuantity;
      const newTotalPrice = filteredCart.reduce(
        (acc, item) => acc + (Number(item.price) * item.quantity || 0),
        0
      );

      return {
        ...state,
        cart: filteredCart,
        articles: newArticlesCounts,
        total_price: newTotalPrice,
      };
    case "BUY":
      return {
        ...state,
        cart: [],
        articles: 0,
        total_price: 0,
        showAlert: true,
        alertMessage: "Ordine inviato, grazie per averci scelto",
      };

    default:
      return state;
  }
}

const CartContext = createContext();

function CartProvider({ children }) {
  const [state, dispatch] = useReducer(orderReducer, getInitialState());

  useEffect(() => {
    localStorage.setItem("cartState", JSON.stringify(state));
  }, [state]);

  return (
    <CartContext.Provider value={{ state, dispatch }}>
      {children}
    </CartContext.Provider>
  );
}

export { CartProvider, CartContext };
