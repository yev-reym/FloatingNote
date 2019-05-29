import {combineReducers} from 'redux';
import usersReducer from './users';
import tracksReducer from './tracks';
import commentsReducer from './comments';


const entitiesReducer = combineReducers({
    users: usersReducer,
    tracks: tracksReducer,
    comments: commentsReducer
});


export default entitiesReducer;
