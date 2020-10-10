import thunk from 'redux-thunk'
import { createStore, applyMiddleware, compose,  } from 'redux'

import rootReducer from '../reducer'

const enhancer = compose(
    applyMiddleware(thunk, ),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
  )

  const store = createStore(rootReducer, enhancer)
  //store.dispatch('@@INIT')
  export default store;