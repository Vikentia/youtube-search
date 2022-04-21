import { ADD_VALUE } from "./actionTypes";

export const addValue = data => {
    return {
        type: ADD_VALUE,
        payload: [...state, data]
    };
};