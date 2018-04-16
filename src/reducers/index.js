import { combineReducers } from 'redux';
import AuthReducer from './AuthReducer';
import HolidayFormReducer from './HolidayFormReducer';
import HolidayReducer from './HolidayReducer';

export default combineReducers({
    auth: AuthReducer,
    holidayForm: HolidayFormReducer,
    holidays: HolidayReducer
});
