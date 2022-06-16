import { combineReducers } from 'redux';
import NotifReducer from './notif.reducer';

const rootReducer = combineReducers({
    notif: NotifReducer, // Уведомления
})

export default rootReducer
