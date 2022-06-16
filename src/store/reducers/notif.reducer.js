const NotifActionTypes = {
    ADD_NOTIF: 'ADD_NOTIF',
}

const initialState = {
    notifications: [],
    loading: false,
    error: null,
}

const notifReducer = (state = initialState, action) => {
    switch (action.type) {
    case NotifActionTypes.ADD_NOTIF:
        return { ...state, notifications: [...state.notifications, action.payload] }
    default:
        return state
    }
}

export default notifReducer
