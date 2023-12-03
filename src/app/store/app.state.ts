import { counterReducer } from "../counter/store/counter.reducer";
import { counterState } from "../counter/store/counter.store";
import { PostReducer } from "../posts/store/post.reducer";
import { postState } from "../posts/store/post.store";

export interface appState {
    counter: counterState,
    posts: postState
}

export const appReducer = {
    counter: counterReducer,
    posts: PostReducer
}