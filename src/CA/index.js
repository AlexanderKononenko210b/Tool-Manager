import {ADD_TOOL, UPDATE_TOOL} from '../constants/actionsName'

export function addTool () {
    return {
        type: ADD_TOOL
    }
}

export function updateTool () {
    return {
        type: UPDATE_TOOL
    }
}