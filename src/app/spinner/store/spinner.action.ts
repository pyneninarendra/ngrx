import { createAction, props } from "@ngrx/store";

export const updateStatus = createAction('showHideSpinner', props<{status: boolean}>())
