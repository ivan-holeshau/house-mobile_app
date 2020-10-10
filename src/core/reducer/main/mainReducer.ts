import {} from 'redux'
import {AVTORISATION} from '../../constants/actions'
import {Action} from '../index'

export interface MainState{
    registered: boolean,
}
const initalState = {
 registered:false,
}


export function mainReducer (state = initalState, action:Action) {
    switch (action.type) {
        case AVTORISATION:
            return {
                ...state, registered:action.payload,
            }
        default: 
            return state
    }
}