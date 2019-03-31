import {createStore, applyMiddleware} from 'redux'
import thunk from 'redux-thunk'
import {createLogger} from 'redux-logger'
import { composeWithDevTools } from 'redux-devtools-extension';
import reducer from '../reducer'

import randomid from '../middlewares/randomid'


const logger = createLogger({
    collapsed: true
})

const enhancer = composeWithDevTools(applyMiddleware(randomid, thunk, logger))

const store = createStore(reducer, {}, enhancer)
window.store = store;

export default store;