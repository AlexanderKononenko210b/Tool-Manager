import { Actions } from '../../../../shared/constants'

const initState = {
    name: '',
    typeTool: '',
    location: '',
    nameError: '', 
    typeToolError: '', 
    locationError: '',
    formValid: false
}

const isFormValid = (name, toolType, location, isNameValid, isTypeLocationValid, isLocationValid ) => {
    return name !== '' && toolType !== '' && location !== '' && isNameValid === '' && isTypeLocationValid === '' && isLocationValid === '';
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

        case Actions.WRITE_ERROR: {
            switch(action.payload.typeField) {
                case('tool_name'): {
                    if(action.payload.errorMessage !== '') {
                        return {
                            ...state,
                            nameError: action.payload.errorMessage,
                            formValid: false
                         }
                    } else {
                        const formValid = isFormValid(state.name, state.typeTool, state.location, 
                            action.payload.errorMessage, state.typeToolError, state.locationError )
                        return {
                            ...state,
                            nameError: '',
                            formValid: formValid
                        }
                    }
                }
                case('tool_type'): {
                    if(action.payload.errorMessage !== '') {
                        return {
                            ...state,
                            toolTypeError: action.payload.errorMessage,
                            formValid: false
                         }
                    } else {
                        const formValid = isFormValid(state.name, state.typeTool, state.location, 
                            state.nameError, action.payload.errorMessage, state.locationError)
                        return {
                            ...state,
                            toolTypeError: '',
                            formValid: formValid
                        }
                    }
                }
                case('tool_location'): {
                    if(action.payload.errorMessage !== '') {
                        return {
                            ...state,
                            locationError: action.payload.errorMessage,
                            formValid: false
                         }
                    } else {
                        const formValid = isFormValid(state.name, state.typeTool, state.location, 
                            state.nameError, state.typeToolError, action.payload.errorMessage)
                        return {
                            ...state,
                            locationError: '',
                            formValid: formValid
                        }
                    }
                }
                
                default: {
                    return state
                }
            }
        }

        default: {
            return state
        }
    }
}
export default formReducer