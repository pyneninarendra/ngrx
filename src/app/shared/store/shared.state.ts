export interface sharedState {
    status: boolean,
    errorMsg: string

}
export const initialState: sharedState = {
    status: false,
    errorMsg: ''
}