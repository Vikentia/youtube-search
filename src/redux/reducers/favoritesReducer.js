import { ADD_VALUE } from '../actions/actionTypes';

const initialValue = [];

function favoritesReducer(state = initialValue, action) {
    switch (action.type) {
        case ADD_VALUE:
            return [...state, action.payload];

        default:
            return state;
    }
}
export default favoritesReducer;