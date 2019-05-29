import { combineReducers } from "redux";
import sessionReducer from './sessionReducer';

const RootReducer = combineReducers({
    session: sessionReducer
});