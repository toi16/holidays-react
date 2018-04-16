import {
    WELCOME_FINISHED
} from '../actions/types';

const INITIAL_STATE = false;

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case WELCOME_FINISHED:
            return action.payload;
        default:
            return state;
    }
};
