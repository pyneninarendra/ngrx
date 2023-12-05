import { User } from "../user"

export interface authstate {
    user: User | null
}
export const initialState:authstate = {
    user: null
}