import { DELETE_VALUE } from "./actionTypes";


function deleteFavoritesAction(id) {
    return (
        {
            type: DELETE_VALUE,
            payload: id,
        }
    )
}

export default deleteFavoritesAction;