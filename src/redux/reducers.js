import { INCREMENT,DECREMENT } from "./action-types"

export function counter(number = 0,action) {
    switch (action.type) {
        case INCREMENT:
            return number + action.number
        case DECREMENT:
            return number - action.number
        default:
            return number
    }
}