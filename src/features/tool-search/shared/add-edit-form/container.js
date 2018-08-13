import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import { AddUpdateFormComponent } from './index'
import { changeName, changeType, changeLocation } from './index'

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
    }

    handleChangeName = (event) => {
        event.preventDefault()
        const newName = event.target.value
        const { changeName } = this.props
        changeName(newName)
    }

    handleChangeType = (event) => {
        event.preventDefault()
        const newType = event.target.value
        console.log(newType)
        const { changeType } = this.props
        changeType(newType)
    }

    handleChangeLocation = (event) => {
        event.preventDefault()
        const newLocation = event.target.value
        const { changeLocation } = this.props
        changeLocation(newLocation)
    }

    render() {
        const { name, typeTool, location } = this.props
        const { handleSave, handleCancel } = this.props
        return (
            <AddUpdateFormComponent 
                name = { name }
                typeTool = { typeTool }
                location = { location }
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
        location: state.formReducer.location
    }
}

const mapDispatchToState = (dispatch) => ({
    changeName: bindActionCreators(changeName, dispatch),
    changeType: bindActionCreators(changeType, dispatch),
    changeLocation: bindActionCreators(changeLocation, dispatch)
})

export default connect(mapStateToProps, mapDispatchToState)(AddUpdateFormContainer)