
import {RootState} from '../reducer'


export const isRegistered = (state:RootState):boolean => state.mainReducer.registered;
            