import { NotifActionTypes } from '../reducers/notif.reducer'

export const fetchPosts1 = () => async (dispatch) => {
    try {
        dispatch({ type: NotifActionTypes.ADD_NOTIF, payload: { message: 'test' } })
    } catch (e) {
        dispatch({
            type: NotifActionTypes.ADD_NOTIF_ERROR,
            payload: 'Произошла ошибка при загрузке постов',
        })
    }
}

export const fetchPosts2 = () => async (dispatch) => {
    try {
        dispatch({ type: NotifActionTypes.ADD_NOTIF, payload: { message: 'test' } })
    } catch (e) {
        dispatch({
            type: NotifActionTypes.ADD_NOTIF_ERROR,
            payload: 'Произошла ошибка при загрузке постов',
        })
    }
}
