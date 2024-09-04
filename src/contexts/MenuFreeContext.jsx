import { act, createContext, useReducer } from "react";

const MenuFreeContext = createContext();

const initialState = {
  showOrderForm: false,
  selectedItem: null,
};
function orderReducer(state, action) {
  switch (action.type) {
    case "OPEN_POPUP":
      return { ...state, showOrderForm: true, selectedItem: action.payload };

    case "CLOSE_POPUP":
      return { ...state, showOrderForm: false, selectedItem: null };

    case "ADD_ITEM_TO_CART":
      return { ...state, showOrderForm: false };
    default:
      return state;
  }
}
function MenuFreeProvider({ children }) {
  const [state, dispatch] = useReducer(orderReducer, initialState);
  return (
    <MenuFreeContext.Provider value={{ state, dispatch }}>
      {children}
    </MenuFreeContext.Provider>
  );
}

export { MenuFreeProvider, MenuFreeContext };
