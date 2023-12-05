import { createAction, props } from "@ngrx/store"
import { User } from "../user"

const LOGIN_START = '[Auth Page] Login Start Action'
const LOGIN_SUCCESS = '[Auth Page] Login Success Action'
const LOGIN_FAILURE = '[Auth Page] Login Failure Action'

export const loginStart = createAction(LOGIN_START, props<{email: string, password: string}>())
export const loginSuccess = createAction(LOGIN_SUCCESS, props<{user: User}>())
export const loginFailure = createAction(LOGIN_FAILURE)