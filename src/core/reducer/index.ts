import {combineReducers} from 'redux'
import {mainReducer,  MainState} from './main/mainReducer'

export interface Action {
    [key:string]:string,
}
export interface RootState {
    mainReduser: MainState,
}

export default combineReducers({
    mainReducer,
})