import { ADD_VALUE } from "./actionTypes";


function favoritesAction(data) {
    return (
        {
            type: ADD_VALUE,
            payload: {
                'request': data,
                'sort': 12,
            },
        }
    )
}

export default favoritesAction;