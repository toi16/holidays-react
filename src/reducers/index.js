import { combineReducers } from 'redux';
import AuthReducer from './AuthReducer';
import HolidayFormReducer from './HolidayFormReducer';
import HolidayReducer from './HolidayReducer';
import WelcomeReducer from './WelcomeReducer';

export default combineReducers({
    auth: AuthReducer,
    holidayForm: HolidayFormReducer,
    holidays: HolidayReducer,
    welcome: WelcomeReducer
});
