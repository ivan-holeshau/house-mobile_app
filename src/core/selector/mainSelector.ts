
import {RootState} from '../reducer'


export const isRegistered = (state:RootState):boolean => state.mainReducer.registered;

export const bigNews = (state:RootState) => state.mainReducer.bigViewNews;
            