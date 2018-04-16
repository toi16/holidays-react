import { WELCOME_FINISHED } from './types';

export const welcomeFinished = (value) => {
    return {
        type: WELCOME_FINISHED,
        payload: value
    };
};
