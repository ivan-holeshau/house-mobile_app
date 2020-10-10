import {AVTORISATION} from '../constants/actions'

export const registered = ()=>{
    return {
        type:AVTORISATION,
        payload:true,
    }
}