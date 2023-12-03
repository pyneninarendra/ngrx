import { createReducer, on } from "@ngrx/store"
import { customCounterUpdate, decrement, increment, reset, updateCounterName } from "./counter.action"
import { initialState } from "./counter.store"

const _counterReducer = createReducer(initialState,
    on(increment, (state) => {
        return {
            ...state,
            counter: state.counter + 1
        }
    }),
    on(decrement, (state) => {
        return {
            ...state,
            counter: state.counter - 1
        }
    }),
    on(reset, (state) => {
        return {
            ...state,
            counter: 0
        }
    }),
    on(customCounterUpdate, (state: any, action: any) => {
        return {
            ...state,
            counter: state.counter + action.inputNum
        }
    }),
    on(updateCounterName, (state) => {
        return {
            ...state,
            text: 'Leela Web'
        }
    })
)

export function counterReducer(state: any, action: any) {
    return _counterReducer(state, action)
}