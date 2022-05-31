import { ADD_VALUE, DELETE_VALUE, CHANGE_VALUE } from "./actionTypes";


export function favoritesAction(data) {
    return (
        {
            type: ADD_VALUE,
            payload: {
                'id': data.id,
                'login': data.user,
                'request': data.request,
                'title': data.title,
                'sort': data.sort,
                'maxVideos': data.maxVideos,
            },
        }
    )
}

export function deleteFavoritesAction(id) {
    return (
        {
            type: DELETE_VALUE,
            payload: id,
        }
    )
}


export function changeFavoritesAction(data) {
    return (
        {
            type: CHANGE_VALUE,
            payload: {
                'id': data.id,
                'login': data.user,
                'request': data.request,
                'title': data.title,
                'sort': data.sort,
                'maxVideos': data.maxVideos,
            },
        }
    )
}