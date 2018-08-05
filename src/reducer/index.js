import { combineReducers } from 'redux'
import toolsReducer from './toolsReducer'
import formReducer from './formReducer'

export default combineReducers ({
    toolsReducer,
    formReducer
})