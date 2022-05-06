import { DELETE_VALUE } from '../actions/actionTypes';

const initialValue = [];

function favoritesReducer(state = initialValue, action) {
    switch (action.type) {
        case DELETE_VALUE:
            return [...state.filter(item => item.id !== ), action.payload];


        default:
            return state;
    }
}
export default favoritesReducer;