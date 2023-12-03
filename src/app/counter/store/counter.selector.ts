import { createFeatureSelector, createSelector } from "@ngrx/store";
import { counterState } from "./counter.store";

export const counterFeatureSelector = createFeatureSelector<counterState>('counter')
export const getCounter = createSelector(counterFeatureSelector, (state) => {
    return state.counter
})

export const getCounterName = createSelector(counterFeatureSelector, (state) => {
    return state.text
})