import { combineReducers } from 'redux';
import { courseReducer } from './courseReuducers';

const rootReducer = combineReducers({
    courses: courseReducer
});

export default rootReducer;

