import { createReducer, on } from "@ngrx/store"
import { initialState } from "./spinner.state"
import { updateStatus } from "./spinner.action"

const _spinnerReducer = createReducer(
    initialState,
    on(updateStatus, (state, action) => {
        return {
            ...state,
            status: action.status
        }
    })
)

export function spinnerReducer(state, action) {
    return _spinnerReducer(state, action)
}