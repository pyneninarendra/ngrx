import { authReducer } from "../auth/store/auth.reducer";
import { authstate } from "../auth/store/auth.store";
import { counterReducer } from "../counter/store/counter.reducer";
import { counterState } from "../counter/store/counter.store";
import { PostReducer } from "../posts/store/post.reducer";
import { postState } from "../posts/store/post.store";
import { sharedReducer } from "../shared/store/shared.reducer";
import { sharedState } from "../shared/store/shared.state";

export interface appState {
    counter: counterState,
    posts: postState,
    auth: authstate,
    share: sharedState
}

export const appReducer = {
    counter: counterReducer,
    posts: PostReducer,
    auth: authReducer,
    share: sharedReducer
}