import { combineReducers } from "redux";
import pendingInfoReducer from './pending_info';

const uiReducer = combineReducers({
    pendingInfo: pendingInfoReducer
});

export default uiReducer;