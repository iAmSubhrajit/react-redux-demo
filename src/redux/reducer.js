import { ADD_NUMBER, SUB_NUMBER } from "./actionTypes";

const initialState = {
    counter: 0
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_NUMBER: return {
            counter: state.counter + +action.payload
        };
        case SUB_NUMBER: return {
            counter: state.counter - action.payload
        };
        default: return state
    }
}
export default reducer;