import { ADD_VALUE, DELETE_VALUE, CHANGE_VALUE } from "./actionTypes";


export const favoritesAction = (data) => {
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

export const deleteFavoritesAction = (id) => ({ type: DELETE_VALUE, payload: id })

export const changeFavoritesAction = (data) => {
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