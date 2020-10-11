import {combineReducers} from 'redux'
import {mainReducer,  initalState} from './mainReducer'

export interface Action {
    [key:string]:string,
}
export interface RootState {
    mainReducer: typeof initalState,
}

export interface BigViewNews{
    text:string,
    title:string,
    image:string,
    id:number,
    alt:string,
    readTime:string,
}

export default combineReducers({
    mainReducer,
})