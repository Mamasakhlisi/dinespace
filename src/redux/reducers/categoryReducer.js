import { SETCATEGORY, RESETCATEGORY } from "../actionTypes";

const initialState = {
  item: null,
};

export const categoryReducer = (state = initialState, action) => {
  const item = action.item;
  switch (action.type) {
    case SETCATEGORY:
      return { ...state, item: item };
    case RESETCATEGORY:
      return { ...state, item: null };
    default:
      return state;
  }
};
