import { createFeatureSelector, createSelector } from "@ngrx/store";
import { postState } from "./post.store";

const postFeatureSelector = createFeatureSelector<postState>('posts')

export const getPosts = createSelector(postFeatureSelector, (state) => {
    return state.posts
})

export const getPost = createSelector(postFeatureSelector, (state, action) => {
    return state.posts.find(post => post.id === action.id)
})