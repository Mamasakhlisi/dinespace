const initialState = 0;

export const groupSizeReducer = (state = initialState, action) => {
    switch(action.type) {
        case "INCREMENT":
            return state + 1
        case "DECREMENT":
            if(state <= 0) {
                return state
            } else {
                return state - 1
            }
        default:
            return state
    }
}