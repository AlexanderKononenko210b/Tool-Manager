import { Actions } from '../constants'
import { Types, Locations } from '../constants'

const initState = {
    tools: [
        {id: "1", name: "toolDrill-1", typeTool: Types.DRILL_TYPE, location: Locations.BOX_A },
        {id: "2", name: "toolCut-1", typeTool: Types.CUT_TYPE, location: Locations.BOX_B },
        {id: "3", name: "toolMill-1", typeTool: Types.MILL_TYPE, location: Locations.BOX_B },
        {id: "4", name: "toolDrill-2", typeTool: Types.DRILL_TYPE, location: Locations.BOX_C },
        {id: "5", name: "toolDrill-3", typeTool: Types.DRILL_TYPE, location: Locations.BOX_A },
        {id: "6", name: "toolCut-2", typeTool: Types.CUT_TYPE, location: Locations.BOX_B },
        {id: "7", name: "toolMill-2", typeTool: Types.MILL_TYPE, location: Locations.BOX_B },
        {id: "8", name: "toolDrill-4", typeTool: Types.DRILL_TYPE, location: Locations.BOX_C },
        {id: "9", name: "toolDrill-5", typeTool: Types.DRILL_TYPE, location: Locations.BOX_C }
    ],
    currentPage: 1,
    countToolsOnPage: 4,
}

const getNewId = (tools) => {
    return String(tools.length + 1);
}

const toolsReducer = (state = initState, action) => {
   switch(action.type) {

        case Actions.ADD_TOOL: {
            const { name, typeTool, location } = action.payload
            const tools = state.tools
            const newTool = {
               id: getNewId(tools),
               name: name,
               typeTool: typeTool,
               location: location
            }

            const newTools = tools.concat(newTool)

            return {...state, tools: newTools}
        }

        case Actions.UPDATE_TOOL: {
            return {
                ...state,
                tools: state.tools.map(tool => 
                (tool.id === action.payload.id) ? {...action.payload} : tool)
            }
        }

        case Actions.CHANGE_CURRENT_PAGE: {
            return {
                ...state,
                currentPage: action.payload
            }
        }
            
        default: {
            return state
        }
    }
}

export default toolsReducer