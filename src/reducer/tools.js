import {tools as defaultTools} from '../store/fixture'
import {ADD_TOOL, UPDATE_TOOL} from '../constants/actionsName'

export default (toolState = defaultTools, action) => {
    const { type, payload } = action

    switch(type) {
        case ADD_TOOL: return toolState

        case UPDATE_TOOL: return toolState
    }

    return toolState
}
