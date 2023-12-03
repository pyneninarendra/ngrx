import { createReducer, on } from "@ngrx/store"
import { initialState, postState } from "./post.store"
import { createPost, deletePost, updatePost } from "./post.actions"

const _postReducer = createReducer(
    initialState,
    on(deletePost, (state: any, action) => {
        let post = state.posts.filter(post => {
            return post.id !== action.id
        })
        return {
            ...state,
            posts: post
        }
    }),
    on(createPost, (state: any, action: any) => {
        let updatedPost = { ...action.post }
        updatedPost.id = state.posts.length + 1
        return {
            ...state,
            posts: [...state.posts, updatedPost]
        }
    }),
    on(updatePost, (state: any, action: any) => {
        let updatedPost = state.posts.map(item => item.id === action.post.id ? action.post : item)
        return {
            ...state,
            posts: updatedPost
        }
    })
)

export function PostReducer(state, action) {
    return _postReducer(state, action)
}