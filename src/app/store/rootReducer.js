import {combineReducers} from 'redux';
import testReducer from '../sandbox/testReducer';
import eventReducer from '../../features/events/eventReducer';


const rootReducer = combineReducers({
    test: testReducer,
    event: eventReducer
})

export default rootReducer;