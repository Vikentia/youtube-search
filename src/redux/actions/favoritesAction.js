import { ADD_VALUE } from "./actionTypes";


function favoritesAction(data) {
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

export default favoritesAction;