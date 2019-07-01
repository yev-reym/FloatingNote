import { combineReducers } from "redux";
import pendingInfoReducer from './pending_info';
import modalReducer from './modal';
import trackPlayerReducer from './player';

const uiReducer = combineReducers({
    player: trackPlayerReducer,
    pendingInfo: pendingInfoReducer,
    modal: modalReducer
});

export default uiReducer;