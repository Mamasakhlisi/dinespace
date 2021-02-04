import { ACTIVE_DROPDOWN, DEACTIVE_DROPDOWN } from "../actionTypes";

const initialState = {
  active: false,
};

export const activeDropdownReducer = (state = initialState, action) => {
  switch (action.type) {
    case ACTIVE_DROPDOWN:
      return { ...state, active: !state.active };
    case DEACTIVE_DROPDOWN:
      return { ...state, active: false };
    default:
      return state;
  }
};
