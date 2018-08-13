import React, { Component } from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import { bindActionCreators } from 'redux'

import { AddUpdateFormContainer } from '../shared'
import { Headers } from '../../shared/constants'
import { addTool } from './index'
import { changeName, changeType, changeLocation } from '../shared'

class AddToolContainer extends Component {

    constructor(props) {
        super(props)
        console.log('AddToolContainer work')
        this.handleSave = this.handleSave.bind(this)
        this.handleCancel = this.handleCancel.bind(this)
    }

    componentWillMount() {
        const { changeName, changeType, changeLocation} = this.props
        changeName('')
        changeType('')
        changeLocation('')
    }

    handleSave(event) {
        event.preventDefault()
        const { name, typeTool, location } = this.props
        const tool = {
            name: name,
            typeTool: typeTool,
            location: location
        }
        const { addTool } = this.props
        addTool(tool)
        const { history } = this.props
        history.push('/')
    }

    handleCancel() {
        const { history } = this.props
        history.push('/')
    }

    render () {
        console.log(this.handleSave, this.handleCancel)
        return (
            <div>
                <h2>{Headers.ADD_FORM}</h2>
                <div>
                    <AddUpdateFormContainer 
                        handleSave = { this.handleSave }
                        handleCancel = { this.handleCancel }
                    />
                </div>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        name: state.formReducer.name,
        typeTool: state.formReducer.typeTool,
        location: state.formReducer.location
    }
}

const mapDispatchToState = dispatch => ({
    addTool: bindActionCreators(addTool, dispatch),
    changeName: bindActionCreators(changeName, dispatch),
    changeType: bindActionCreators(changeType, dispatch),
    changeLocation: bindActionCreators(changeLocation, dispatch)
})


export default withRouter(connect(mapStateToProps,mapDispatchToState)(AddToolContainer))