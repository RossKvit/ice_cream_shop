import {combineReducers} from 'redux'

import freezer from './freezer'
import order from './order'
import employees from './employees'

export default combineReducers({
    freezer, order, employees
})