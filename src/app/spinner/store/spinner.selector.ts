import { createFeatureSelector, createSelector } from "@ngrx/store";
import { spinnerState } from "./spinner.state";

const spinnerFS = createFeatureSelector<spinnerState>('spin')

export const getSpinnerStatus = createSelector(spinnerFS, (state)=> {
    return state.status
})