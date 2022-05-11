import { DELETE_VALUE } from '../actions/actionTypes';

const initialValue = [];

function deleteFavoritesReducer(state = initialValue, action) {
    switch (action.type) {
        case DELETE_VALUE:
            // console.log(state);
            // console.log(action.payload);
            return state.filter(obj => obj.id !== action.payload);

        default:
            return state;
    }
}
export default deleteFavoritesReducer;