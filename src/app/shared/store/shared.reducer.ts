import { createReducer, on } from "@ngrx/store"
import { initialState } from "./shared.state"
import { setErrorMsg, updateStatus } from "./shared.action"

const _sharedReducer = createReducer(
    initialState,
    on(updateStatus, (state, action) => {
        return {
            ...state,
            status: action.status
        }
    }),
    on(setErrorMsg, (state, action)=> {
        return {
            ...state,
            errorMsg: action.errorMsg
        }
    })
)

export function sharedReducer(state, action) {
    return _sharedReducer(state, action)
}