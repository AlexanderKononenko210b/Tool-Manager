import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { withRouter } from 'react-router-dom'
import { connect } from 'react-redux'

import { Headers } from '../constants'
import { changeCurrentPage } from '../actions'
import { ToolListComponent } from '../components';
import PagingListContainer from './PagingListContainer';


class ToolList extends Component {

    getToolsOnPage = (page, tools, countToolsOnPage) => {
        const startIndex = page * countToolsOnPage
        const maxIndexTools = tools.length
        const endIndex = startIndex + countToolsOnPage
        if(endIndex <= maxIndexTools) {
            return tools.slice(startIndex, endIndex)
        } else {
            return tools.slice(startIndex, maxIndexTools)
        }
    }

    render() {
        const {tools, currentPage, countToolsOnPage} = this.props
        const page = currentPage - 1
        const toolsPaging = this.getToolsOnPage(page, tools, countToolsOnPage)
        console.log(currentPage)
        console.log(tools)
        console.log(toolsPaging)
        return (
            <div>
                <ToolListComponent 
                    tools = {toolsPaging}
                    onClick = {this.handleOnClick} 
                    header = {Headers.TOOL_LIST}
                    handleAddTool = {this.handleAddTool}
                    handleUpdateTool = {this.handleUpdateTool}
                />
                <PagingListContainer />
            </div>
        )
    }

    handleUpdateTool = (event) => {
        event.preventDefault()
        const hasClass = event.target.classList.contains('tool_name')
        if(hasClass) {
            const id = event.target.id
            const { history } = this.props
            history.push(`/${id}`)
        }
    }


    handleAddTool = (event) => {
        event.preventDefault()
        const { history } = this.props
        history.push('/new')
    }
}

const mapStateToProps = (state) => {
	return {
        tools: state.toolsReducer.tools,
        currentPage: state.toolsReducer.currentPage,
        countToolsOnPage: state.toolsReducer.countToolsOnPage
	}
}

export default withRouter(connect(mapStateToProps)(ToolList))