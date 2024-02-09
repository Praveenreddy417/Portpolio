import {
    PROFILE_FAIL,
    PROFILE_REQUEST,
    PROFILE_SUCCESS
} from "../actions/userdataAction";

const initialState = {
    userdata: { all: [], error: '', isLoading: false }
};

export default function (state = initialState, action) {
    switch (action.type) {
        case PROFILE_REQUEST:
            return { ...state, userdata: { all: state.userdata.all, error: '', isLoading: true } };
        case PROFILE_SUCCESS:
            return { ...state, userdata: { all: action.payload, error: '', isLoading: false } };
        case PROFILE_FAIL:
            return { ...state, userdata: { all: [], error: action.payload, isLoading: false } };
        default:
            return state;
    }
}