import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { withRouter } from 'react-router-dom'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import { AddUpdateFormContainer } from '../shared/add-edit-form/add-edit-form'
import { Headers } from '../../shared/constants'
import { updateTool } from './actions'
import { changeName, changeType, changeLocation } from '../shared/add-edit-form/add-edit-form'

class UpdateToolContainer extends Component {
    static propTypes = {
        match: PropTypes.object.isRequired,
    }

    constructor(props) {
        super(props)
        this.handleSave = this.handleSave.bind(this)
        this.handleCancel = this.handleCancel.bind(this)
    }

    getTool(id, tools) {
        return tools.find(item => item.id === id)
    }

    componentWillMount() {
        let { id } = this.props.match.params
        id = +id
        if(id) {
            const { tools } = this.props.tools
            const tool = this.getTool(id, tools)
            const { changeName, changeType, changeLocation } = this.props
            if(tool) {
                changeName(tool.name)
                changeType(tool.typeTool)
                changeLocation(tool.location)
            }
        }
    }

    handleSave(event) {
        event.preventDefault()
        let { id } = this.props.match.params
        const { name, typeTool, location } = this.props
        const tool = {
            id: id,
            name: name,
            typeTool: typeTool,
            location: location
        }
        const { updateTool } = this.props
        updateTool(tool)
        const { history } = this.props
        history.push('/')
    }

    handleCancel() {
        const { history } = this.props
        history.push('/')
    }
    
    render () {
        return (
            <div>
                <h2>{Headers.UPDATE_FORM}</h2>
                <AddUpdateFormContainer 
                    handleSave = { this.handleSave }
                    handleCancel = { this.handleCancel }
                />
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        tools: state.toolsReducer,
        name: state.formReducer.name,
        typeTool: state.formReducer.typeTool,
        location: state.formReducer.location
    }
}

const mapDispatchToProps = (dispatch) => ({
    updateTool: bindActionCreators(updateTool, dispatch),
    changeName: bindActionCreators(changeName, dispatch),
    changeType: bindActionCreators(changeType, dispatch),
    changeLocation: bindActionCreators(changeLocation, dispatch)
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(UpdateToolContainer))