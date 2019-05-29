import {combineReducers} from 'redux';
import sessionErrorsReducer from './session_errors';
import pendingInfoErrorsReducer from './pending_info_errors';


const errorsReducer = combineReducers({
    session: sessionErrorsReducer,
    pendingInfo: pendingInfoErrorsReducer
});

export default errorsReducer;