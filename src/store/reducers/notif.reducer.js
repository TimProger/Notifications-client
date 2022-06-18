export const NotifActionTypes = {
    ADD_NOTIF: 'ADD_NOTIF',
    ADD_NOTIF_ERROR: 'ADD_NOTIF_ERROR',
    FETCH_NOTIF: 'FETCH_NOTIF',
    FETCH_NOTIF_SUCCESS: 'FETCH_NOTIF_SUCCESS',
    FETCH_NOTIF_ERROR: 'FETCH_NOTIF_ERROR',
}

const initialState = {
    notifications: [
        {
            name: 'Bob',
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
    case NotifActionTypes.FETCH_NOTIF:
        return { ...state, notifications: [], loading: true }
    case NotifActionTypes.FETCH_NOTIF_SUCCESS:
        return { ...state, notifications: action.payload, loading: false }
    case NotifActionTypes.FETCH_NOTIF_ERROR:
        return { ...state, error: action.payload, loading: false }
    default:
        return state
    }
}

export default notifReducer
