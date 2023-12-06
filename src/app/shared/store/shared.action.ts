import { createAction, props } from "@ngrx/store";

export const updateStatus = createAction('showHideSpinner', props<{status: boolean}>())
export const setErrorMsg = createAction('setErrorMsg', props<{errorMsg: string}>())