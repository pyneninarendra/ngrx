import { createAction, props } from "@ngrx/store";

export const increment = createAction('increment')
export const decrement = createAction('decrement');
export const reset = createAction('reset')

export const customCounterUpdate = createAction('customUpdate', props<{ inputNum: number }>())
export const updateCounterName = createAction('updateName')