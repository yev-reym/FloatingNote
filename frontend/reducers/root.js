import { combineReducers } from "redux";
import sessionReducer from './session';
import errorsReducer from './errors';
import uiReducer from './ui';
import entitiesReducer from './entities';



const RootReducer = combineReducers({
    entities: entitiesReducer,
    ui: uiReducer,
    errors: errorsReducer,
    session: sessionReducer
});

export default RootReducer;