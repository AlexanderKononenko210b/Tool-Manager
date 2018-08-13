import { combineReducers } from 'redux'
import toolsReducer from '../features/tool-search/tool-list/reducer'
import formReducer from '../features/tool-search/shared/form-reducer'

export default combineReducers ({
    toolsReducer,
    formReducer
})