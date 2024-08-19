export const initialState = {
  visibleComponent: "",
  showPopupOrder: false,
  pizze: [],
  patatine: [],
  bevande: [],
  menuSelected: null,
  price: null,
  pizza: null,
  patate: null,
  drink: null,
};

export function orderReducer(state, action) {
  switch (action.type) {
    case "TOGGLE_POPUP":
      return {
        ...state,
        showPopupOrder: !state.showPopupOrder,
        visibleComponent: "",
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
    case "SET_PIZZE":
      return { ...state, pizze: action.payload };
    case "SET_PATATINE":
      return { ...state, patatine: action.payload };
    case "SET_BEVANDE":
      return { ...state, bevande: action.payload };
    case "SET_PIZZA":
      return { ...state, pizza: action.payload };
    case "SET_PATATE":
      return { ...state, patate: action.payload };
    case "SET_DRINK":
      return { ...state, drink: action.payload };
    default:
      throw new Error(`Unknown action: ${action.type}`);
  }
}
