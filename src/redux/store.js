import { createStore, applyMiddleware } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import thunk from 'redux-thunk'

import {counter} from './reducers'

export const store = createStore(
    counter,
    composeWithDevTools(applyMiddleware(thunk))
)

