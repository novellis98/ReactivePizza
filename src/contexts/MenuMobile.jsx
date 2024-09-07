import { createContext, useReducer } from "react";

const MenuMobileContext = createContext();
const initialState = {
  menuOpen: false,
  blockPage: false,
  bodyNoTouch: false,
};
function orderReducer(state, action) {
  switch (action.type) {
    case "TOOGLE_MENU":
      return {
        ...state,
        menuOpen: !state.menuOpen,
        blockPage: !state.blockPage,
        bodyNoTouch: !state.bodyNoTouch,
      };

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
