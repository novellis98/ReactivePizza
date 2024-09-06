import { createContext, useReducer } from "react";

const BlockPageContext = createContext();
const initialState = {
  blockPage: false,
};
function orderReducer(state, action) {
  switch (action.type) {
    case "BLOCK_PAGE":
      return {
        ...state,
        blockPage: action.payload,
      };

    default:
      return state;
  }
}
function BlockPageProvider({ children }) {
  const [state, dispatch] = useReducer(orderReducer, initialState);
  return (
    <BlockPageContext.Provider value={{ state, dispatch }}>
      {children}
    </BlockPageContext.Provider>
  );
}
export { BlockPageContext, BlockPageProvider };
