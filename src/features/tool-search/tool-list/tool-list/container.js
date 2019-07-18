import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'
import { connect } from 'react-redux'

import { Headers } from '../../../shared/constants'
import ToolListComponent from './component'
import PagingListContainer from '../paging-list'


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

    handleUpdateTool = ({ target }) => {
        const { classList, id } = target
        const hasClass = classList.contains('tool_name')
        if(hasClass) {
            const { history } = this.props
            history.push(`/${id}`)
        }
    }


    handleAddTool = () => {
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