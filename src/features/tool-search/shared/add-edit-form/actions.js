import { Actions } from '../../../shared'

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