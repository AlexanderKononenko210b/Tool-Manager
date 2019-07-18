import { Actions } from '../../../../shared/constants'

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

export const writeError = (typeField, errorMessage) => {
    return {
        type: Actions.WRITE_ERROR,
        payload: { typeField, errorMessage }
    }
}