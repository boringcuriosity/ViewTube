import { combineReducers } from 'redux';
import sessionErrorsReducer from './session_errors_reducer';
import videoErrorsReducer from './video_errors_reducer';

export default combineReducers({
    login: sessionErrorsReducer,
    video: videoErrorsReducer
});