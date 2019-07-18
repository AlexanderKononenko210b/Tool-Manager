import { combineReducers } from 'redux'
import { toolsReducer } from '../features/tool-search/tool-list/tool-list'
import { formReducer } from '../features/tool-search/shared/add-edit-form/add-edit-form'

export default combineReducers ({
    toolsReducer,
    formReducer
})