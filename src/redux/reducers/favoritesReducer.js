import { ADD_VALUE } from '../actions/actionTypes';

initialValue = [];

function favoritesReducer(state = initialValue, action) {
    switch (action.type) {
        case ADD_VALUE:
            return action.payload;

        default:
            return state;
    }
}