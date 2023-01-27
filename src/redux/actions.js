import { ADD_NUMBER, SUB_NUMBER } from "./actionTypes"


export function addNumber(value) {
    return {
        type: ADD_NUMBER,
        payload: value
    }
}
export function subNumber(value) {
    return {
        type: SUB_NUMBER,
        payload: value
    }
}