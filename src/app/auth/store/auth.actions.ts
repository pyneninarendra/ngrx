import { createAction, props } from "@ngrx/store"
import { User } from "../user"

const LOGIN_START = '[Auth Page] Login Start Action'
const LOGIN_SUCCESS = '[Auth Page] Login Success Action'
const LOGIN_FAILURE = '[Auth Page] Login Failure Action'

const SIGNUP_START = '[Auth Page] Signup Start Action'
const SIGNUP_SUCCESS = '[Auth Page] Signup Success Action'
const SIGNUP_FAILURE = '[Auth Page] Signup Failure Action'


export const loginStart = createAction(LOGIN_START, props<{email: string, password: string}>())
export const loginSuccess = createAction(LOGIN_SUCCESS, props<{user: User}>())
export const loginFailure = createAction(LOGIN_FAILURE)


export const signupStart = createAction(SIGNUP_START, props<{email: string, password: string}>())
export const signupSuccess = createAction(SIGNUP_SUCCESS, props<{user: User}>())
export const signupFailure = createAction(SIGNUP_FAILURE)