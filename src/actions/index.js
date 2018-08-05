import {Actions} from '../constants'

export const addTool  = ({name, typeTool, location}) => {
    return {
        type: Actions.ADD_TOOL,
        payload: {
            name,
            typeTool,
            location
        }
    }
}

export const updateTool = ({id, name, typeTool, location}) => {
    return {
        type: Actions.UPDATE_TOOL,
        payload: {
            id,
            name,
            typeTool,
            location
        }
    }
}

export const changeCurrentPage = (newPage) => {
    return {
        type: Actions.CHANGE_CURRENT_PAGE,
        payload: newPage
    }
}

export const changeName = (newName) => {
    return {
        type: Actions.CHANGE_NAME,
        payload: newName
    }
}

export const changeType = (newTypeTool) => {
    return {
        type: Actions.CHANGE_TYPE,
        payload: newTypeTool
    }
}

export const changeLocation = (newLocation) => {
    return {
        type: Actions.CHANGE_LOCATION,
        payload: newLocation
    }
}