import {
    LOADING,
} from "@actions/ActionTypes";

const INIT_STATE = false;

export default (state = INIT_STATE, action) => {
    switch (action.type) {
        case LOADING:
            return action.value
        default:
            return state;
    }
};
