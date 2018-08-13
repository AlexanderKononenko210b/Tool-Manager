import { Actions } from '../../shared/constants'

const initState = {
    name: '',
    typeTool: '',
    location: ''
}

const formReducer = (state = initState, action) => {
    switch(action.type) {
        case Actions.CHANGE_NAME: {
            return {...state, name: action.payload}
        }

        case Actions.CHANGE_TYPE: {
            return {...state, typeTool: action.payload}
        }

        case Actions.CHANGE_LOCATION: {
            return {...state, location: action.payload}
        }

        default: {
            return state
        }
    }
}
export default formReducer