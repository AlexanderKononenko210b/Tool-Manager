import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import { ElementNames } from '../../../../shared/constants'
import AddUpdateFormComponent from './component'
import { changeName, changeType, changeLocation, writeError } from './actions'
import { nameValidation, toolTypeValidation, locationValidation } from './validation'

class AddUpdateFormContainer extends Component {

    static propTypes = {
        handleSave: PropTypes.func.isRequired,
        handleCancel: PropTypes.func.isRequired
    }

    constructor(props) {
        super(props)
        this.handleChangeName = this.handleChangeName.bind(this)
        this.handleChangeType = this.handleChangeType.bind(this)
        this.handleChangeLocation = this.handleChangeLocation.bind(this)
        this.validateField = this.validateField.bind(this)
    }

    handleChangeName = ({ target }) => {
        const { value, name } = target
        this.props.changeName(value)
        this.validateField( name, value )
    }

    handleChangeType = ({ target }) => {
        const { value, name } = target
        this.props.changeType( value )
        this.validateField( name, value )
    }

    handleChangeLocation = ({ target }) => {
        const { value, name } = target
        this.props.changeLocation( value )
        this.validateField( name, value )
    }

    validateField(typeField, value) {
        const { writeError } = this.props
        switch(typeField) {
            case ElementNames.TOOL_NAME: {
                const error = nameValidation(value)
                writeError( ElementNames.TOOL_NAME, error)
                break;
            }
            case ElementNames.TOOL_TYPE: {
                const error = toolTypeValidation(value)
                writeError( ElementNames.TOOL_TYPE, error)
                break;
            }
            case ElementNames.TOOL_LOCATION: {
                const error = locationValidation(value)
                writeError( ElementNames.TOOL_LOCATION, error)
                break;
            }
            default: {
                break;
            }
        }
    }

    render() {
        const { name, typeTool, location } = this.props
        const { handleSave, handleCancel } = this.props
        const { nameError, typeToolError, locationError, formValid } = this.props
        return (
            <AddUpdateFormComponent 
                name = { name }
                typeTool = { typeTool }
                location = { location }
                nameError = { nameError }
                typeToolError = { typeToolError }
                locationError = { locationError }
                formValid = { formValid }
                handleChangeName = { this.handleChangeName }
                handleChangeType = { this.handleChangeType }
                handleChangeLocation = { this.handleChangeLocation }
                handleSave = { handleSave }
                handleCancel = { handleCancel }
            />
        )
    }
}

const mapStateToProps = (state) => {
    return {
        name: state.formReducer.name,
        typeTool: state.formReducer.typeTool,
        location: state.formReducer.location,
        nameError: state.formReducer.nameError,
        typeToolError: state.formReducer.typeToolError,
        locationError: state.formReducer.locationError,
        formValid: state.formReducer.formValid
    }
}

const mapDispatchToState = (dispatch) => ({
    changeName: bindActionCreators(changeName, dispatch),
    changeType: bindActionCreators(changeType, dispatch),
    changeLocation: bindActionCreators(changeLocation, dispatch),
    writeError: bindActionCreators(writeError, dispatch)
})

export default connect(mapStateToProps, mapDispatchToState)(AddUpdateFormContainer)