export interface sharedState {
    status: boolean,
    errorMsg: string | null

}
export const initialState: sharedState = {
    status: false,
    errorMsg: null
}