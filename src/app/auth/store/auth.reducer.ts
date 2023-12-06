import { createReducer, on } from "@ngrx/store"
import { initialState } from "./auth.store"
import { loginSuccess, signupSuccess } from "./auth.actions"

const _authReducer = createReducer(
    initialState,
    on(loginSuccess, (state: any, action: any) => {
        console.log('action: ', action)
        return {
            ...state,
            user: action.user
        }
    }),
    on(signupSuccess, (state:any, action: any) => {
        return {
            ...state,
            user: action.user
        }
    })
)

export function authReducer(state: any, action: any) {
    return _authReducer(state, action)
}