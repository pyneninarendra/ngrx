import { createFeatureSelector, createSelector } from "@ngrx/store";
import { sharedState } from "./shared.state";

const sharedFS = createFeatureSelector<sharedState>('share')

export const getSharedStatus = createSelector(sharedFS, (state)=> {
    return state.status
})

export const getErrorMsg = createSelector(sharedFS, (state) => {
    return state.errorMsg
})