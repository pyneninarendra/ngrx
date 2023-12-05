import { authReducer } from "../auth/store/auth.reducer";
import { authstate } from "../auth/store/auth.store";
import { counterReducer } from "../counter/store/counter.reducer";
import { counterState } from "../counter/store/counter.store";
import { PostReducer } from "../posts/store/post.reducer";
import { postState } from "../posts/store/post.store";
import { spinnerReducer } from "../spinner/store/spinner.reducer";
import { spinnerState } from "../spinner/store/spinner.state";

export interface appState {
    counter: counterState,
    posts: postState,
    auth: authstate,
    spin: spinnerState
}

export const appReducer = {
    counter: counterReducer,
    posts: PostReducer,
    auth: authReducer,
    spin: spinnerReducer
}