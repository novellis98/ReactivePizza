import { createContext, useReducer } from "react";

const MenuMobileContext = createContext();
const initialState = {
  menuOpen: false,
};
function orderReducer(state, action) {
  switch (action.type) {
    case "TOOGLE_MENU":
      return {
        ...state,
        menuOpen: !state.menuOpen,
      };
    // case "":
    //   return;

    // case "":
    //   return;
    default:
      return state;
  }
}
function MenuMobileProvider({ children }) {
  const [state, dispatch] = useReducer(orderReducer, initialState);
  return (
    <MenuMobileContext.Provider value={{ state, dispatch }}>
      {children}
    </MenuMobileContext.Provider>
  );
}
export { MenuMobileProvider, MenuMobileContext };
