import {combineReducers} from 'redux'
import {mainReducer,  initalState} from './mainReducer'

export interface Action {
    [key:string]:string,
}
export interface RootState {
    mainReducer: typeof initalState,
}

export default combineReducers({
    mainReducer,
})