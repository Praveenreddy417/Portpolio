import axios from 'axios';
import config from './config';

export const PROFILE_REQUEST = "PROFILE_REQUEST";
export const PROFILE_SUCCESS = "PROFILE_SUCCESS";
export const PROFILE_FAIL = "PROFILE_FAIL";

export const getUserDataAction = () => async (dispatch) => {
    try {
        dispatch({
            type: PROFILE_REQUEST
        });
        let { data } = await axios.get(
            `${config.url}posts`,
        );
        if (data) {
            if (data.Is_Data_Exist === '0') {
                dispatch({
                    type: PROFILE_SUCCESS,
                    payload: []
                });
            } else {
                dispatch({
                    type: PROFILE_SUCCESS,
                    payload: data
                });
            }
        }
    } catch (err) {
        dispatch({
            type: PROFILE_FAIL,
            payload: err
        });
    }
};
