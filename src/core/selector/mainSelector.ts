
import {RootState} from '../reducer'


export const isRegistered = (state:RootState) => {console.log(state); return state.mainReduser.registered};