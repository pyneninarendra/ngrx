import { createAction, props } from "@ngrx/store";
import { post } from "./post";
import { postState } from "./post.store";

export const deletePost = createAction('deletePost',props<{id: number}>())
export const createPost = createAction('createPost', props<{post: post}>())
export const updatePost = createAction('updatePost', props<{post: post}>())