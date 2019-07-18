import { Actions } from '../../shared/constants'

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