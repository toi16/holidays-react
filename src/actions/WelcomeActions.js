import { WELCOME_FINISHED } from './types';

export const welcomeFinished = (dispatch) => {
    dispatch({
        type: WELCOME_FINISHED,
        payload: true
    });
};
