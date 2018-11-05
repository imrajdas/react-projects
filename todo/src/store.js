import { applyMiddleware,createStore } from 'redux'
import logger from 'redux-logger'

import reducer from './reducers'

const middlewarwe = applyMiddleware(logger)

export default createStore(reducer, middlewarwe)