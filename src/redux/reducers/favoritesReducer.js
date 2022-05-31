import { ADD_VALUE, DELETE_VALUE, CHANGE_VALUE } from '../actions/actionTypes';

const initialValue = [];

function favoritesReducer(state = initialValue, action) {
    switch (action.type) {

        case ADD_VALUE:
            return [...state, action.payload];

        case DELETE_VALUE:
            return state.length > 1
                ? state.filter(obj => obj.id !== action.payload)
                : initialValue;

        case CHANGE_VALUE:
            return [...state.map((obj) => {
                return obj.id === action.payload.id
                    ? action.payload
                    : obj;
            })];

        default:
            return state;
    }
}
export default favoritesReducer;