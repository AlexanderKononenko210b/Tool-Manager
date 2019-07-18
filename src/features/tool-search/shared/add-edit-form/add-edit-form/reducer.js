import { Actions, ElementNames } from '../../../../shared/constants'

const initState = {
    name: '',
    typeTool: '',
    location: '',
    nameError: '', 
    typeToolError: '', 
    locationError: '',
    formValid: false
}

const isFormValid = ( state ) => {
    return (state.name && state.typeTool && state.location && !state.nameError && !state.typeToolError && !state.locationError)
}

const formReducer = (state = initState, action) => {
    switch(action.type) {
        case Actions.CHANGE_NAME: {
            const formValid = isFormValid({ ...state, name: action.payload })
            return {
                ...state, 
                name: action.payload,
                formValid: formValid
            }
        }

        case Actions.CHANGE_TYPE: {
            const formValid = isFormValid({ ...state, typeTool: action.payload })
            return {
                ...state, 
                typeTool: action.payload,
                formValid: formValid
            }
        }

        case Actions.CHANGE_LOCATION: {
            const formValid = isFormValid({ ...state, location: action.payload })
            return {
                ...state, 
                location: action.payload,
                formValid: formValid
            }
        }

        case Actions.WRITE_ERROR: {
            switch(action.payload.typeField) {
                case(ElementNames.TOOL_NAME): {
                    if(action.payload.errorMessage) {
                        return {
                            ...state,
                            nameError: action.payload.errorMessage,
                            formValid: false
                         }
                    } else {
                        const formValid = isFormValid({ ...state, nameError: action.payload.errorMessage })
                        return {
                            ...state,
                            nameError: '',
                            formValid: formValid
                        }
                    }
                }
                case(ElementNames.TOOL_TYPE): {
                    if(action.payload.errorMessage) {
                        return {
                            ...state,
                            toolTypeError: action.payload.errorMessage,
                            formValid: false
                         }
                    } else {
                        const formValid = isFormValid({ ...state, typeToolError: action.payload.errorMessage })
                        return {
                            ...state,
                            toolTypeError: '',
                            formValid: formValid
                        }
                    }
                }
                case(ElementNames.TOOL_LOCATION): {
                    if(action.payload.errorMessage) {
                        return {
                            ...state,
                            locationError: action.payload.errorMessage,
                            formValid: false
                         }
                    } else {
                        const formValid = isFormValid({ ...state, locationError: action.payload.errorMessage })
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