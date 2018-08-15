import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import { AddUpdateFormComponent } from './index'
import { changeName, changeType, changeLocation, writeError } from './index'
import { nameValidation, toolTypeValidation, locationValidation } from './index'

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

    handleChangeName = (event) => {
        event.preventDefault()
        const newName = event.target.value
        const fieldType = event.target.name
        const { changeName } = this.props
        changeName( newName )
        this.validateField( fieldType, newName )
    }

    handleChangeType = (event) => {
        event.preventDefault()
        const newType = event.target.value
        const fieldType = event.target.name
        const { changeType } = this.props
        changeType( newType )
        this.validateField( fieldType, newType )
    }

    handleChangeLocation = (event) => {
        event.preventDefault()
        const newLocation = event.target.value
        const fieldType = event.target.name
        const { changeLocation } = this.props
        changeLocation( newLocation )
        this.validateField( fieldType, newLocation )
    }

    validateField(typeField, value) {
        const { writeError } = this.props
        switch(typeField) {
            case 'tool_name': {
                const error = nameValidation(value)
                writeError( 'tool_name', error)
                break;
            }
            case 'tool_type': {
                const error = toolTypeValidation(value)
                writeError( 'tool_type', error)
                break;
            }
            case 'tool_location': {
                const error = locationValidation(value)
                writeError( 'tool_location', error)
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