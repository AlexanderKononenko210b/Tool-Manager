import { Actions } from '../../shared/constants'

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