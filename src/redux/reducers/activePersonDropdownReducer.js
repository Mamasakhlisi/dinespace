import {
  ACTIVE_PERSON_DROPDOWN,
  DEACTIVE_PERSON_DROPDOWN,
} from "../actionTypes";

const initialState = {
  active: false,
};

export const activePersonDropdownReducer = (state = initialState, action) => {
  switch (action.type) {
    case ACTIVE_PERSON_DROPDOWN:
      return { ...state, active: !state.active };
    case DEACTIVE_PERSON_DROPDOWN:
      return { ...state, active: false };
    default:
      return state;
  }
};
