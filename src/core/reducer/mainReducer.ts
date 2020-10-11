import {} from 'redux'
import {AVTORISATION} from '../constants/actions'
import {Action} from './index'
import {BigViewNews} from './index'
 interface MainState{
    registered: boolean,
    bigViewNews:BigViewNews,
}
export const initalState:MainState = {
 registered:false,
 bigViewNews:{
     text:`Когда нужно отдохнуть от беллетристики, но 
     в то же время хочется чего-то легкого - ищи 
     спасение в документальной прозе.
     Помощь`,
     title:`Парам:«Русский дневник» Джон Стей
     нбек ляля`,
     id:1,
    alt:'picture',
     image:'1.png',
     readTime:'#читаем  - 3 мин чит.'

 }
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