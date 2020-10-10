import {} from 'redux'
import {AVTORISATION} from '../constants/actions'
import {Action} from './index'

 interface MainState{
    registered: boolean,
}
export const initalState:MainState = {
 registered:false,
}


export function mainReducer (state: MainState = initalState, action:Action) {
    switch (action.type) {
        case AVTORISATION:
            return {
                ...state, registered:action.payload,
            }
        default: 
            return {...state}
    }
}