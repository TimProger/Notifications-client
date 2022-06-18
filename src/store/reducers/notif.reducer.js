export const NotifActionTypes = {
    ADD_NOTIF: 'ADD_NOTIF',
    ADD_NOTIF_ERROR: 'ADD_NOTIF_ERROR',
}

const initialState = {
    notifications: [
        {
            nickname: 'Bob',
            message: 'Hello everyone!',
        },
    ],
    loading: false,
    error: null,
}

const notifReducer = (state = initialState, action) => {
    switch (action.type) {
    case NotifActionTypes.ADD_NOTIF:
        return { ...state, notifications: [...state.notifications, action.payload] }
    case NotifActionTypes.ADD_NOTIF_ERROR:
        return { ...state, error: action.payload }
    default:
        return state
    }
}

export default notifReducer
