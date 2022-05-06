import { DELETE_VALUE } from "./actionTypes";


function deleteFavoritesAction(data) {
    return (
        {
            type: DELETE_VALUE,
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

export default deleteFavoritesAction;