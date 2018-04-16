import firebase from 'firebase';
import {
    HOLIDAY_UPDATE,
    HOLIDAY_CREATE,
    HOLIDAYS_FETCH_SUCCESS,
    HOLIDAY_SAVE_SUCCESS
} from './types';

export const holidayUpdate = ({ prop, value }) => {
    return {
        type: HOLIDAY_UPDATE,
        payload: { prop, value }
    };
};

export const holidayCreate = ({ start, end, description }) => {
    const { currentUser } = firebase.auth();

    return (dispath) => {
        firebase.database().ref(`/users/${currentUser.uid}/holidays`)
            .push({ start, end, description })
            .then(() => {
                dispath({ type: HOLIDAY_CREATE });
              //  Actions.pop({ type: 'reset' });
            });
    };
};

export const holidaysFetch = () => {
    const { currentUser } = firebase.auth();

    return (dispatch) => {
        firebase.database().ref(`/users/${currentUser.uid}/holidays`)
            .on('value', snapshot => {
                dispatch({ type: HOLIDAYS_FETCH_SUCCESS, payload: snapshot.val() });
            });
    };
};

export const holidaySave = ({ start, end, description, uid }) => {
    const { currentUser } = firebase.auth();

    return (dispatch) => {
        firebase.database().ref(`/users/${currentUser.uid}/holidays/${uid}`)
            .set({ start, end, description })
            .then(() => {
                dispatch({ type: HOLIDAY_SAVE_SUCCESS });
              //  Actions.employeeList({ type: 'reset ' });
            });
    };
};

export const holidayDelete = ({ uid }) => {
    const { currentUser } = firebase.auth();

    return () => {
        firebase.database().ref(`/users/${currentUser.uid}/holidays/${uid}`)
            .remove()
            .then(() => {
               // Actions.employeeList({ type: 'reset ' });
            });
    };
};
