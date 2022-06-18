import { NotifActionTypes } from '../reducers/notif.reducer'

export const sendMessage = (socket, message) => async (dispatch) => {
    try {
        socket.emit('message', message);
    } catch (e) {
        console.log('Error', e)
        dispatch({
            type: NotifActionTypes.ADD_NOTIF_ERROR,
            payload: `Произошла ошибка при отправке сообщения: ${e}`,
        })
    }
}

export const getMessage = (message) => async (dispatch) => {
    try {
        dispatch({ type: NotifActionTypes.ADD_NOTIF, payload: message })
    } catch (e) {
        dispatch({
            type: NotifActionTypes.ADD_NOTIF_ERROR,
            payload: 'Произошла ошибка при получении сообщения',
        })
    }
}
