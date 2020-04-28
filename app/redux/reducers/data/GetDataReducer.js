import {
    GET_DATA,
} from "@actions/ActionTypes";

const INIT_STATE = []

const data = [
    { name: "A", age: 21 },
    { name: "B", age: 22 },
    { name: "C", age: 22 },
    { name: "D", age: 23 },
    { name: "E", age: 24 },
    { name: "F", age: 22 },
    { name: "G", age: 22 },
    { name: "H", age: 21 },
    { name: "Z", age: 21 },
]

export default (state = INIT_STATE, action) => {
    switch (action.type) {
        case GET_DATA:
            return data
        default:
            return state;
    }
};
