import { combineReducers } from "redux";
import pendingInfoReducer from './pending_info';
import modalReducer from './modal';

const uiReducer = combineReducers({
    pendingInfo: pendingInfoReducer,
    modal: modalReducer
});

export default uiReducer;