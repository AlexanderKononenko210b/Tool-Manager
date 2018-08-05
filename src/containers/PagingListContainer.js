import React, { Component } from 'react';
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import { changeCurrentPage } from '../actions'
import { PagingListComponent } from '../components'

class PagingListContainer extends Component {

    constructor(props) {
        super(props)
        this.handleNextPage = this.handleNextPage.bind(this)
        this.handlePrevPage = this.handlePrevPage.bind(this)
    }

    checkMaxPage = (nextPage, tools, countToolsOnPage) => {
        const maxIndexTools = tools.length - 1
        const minNextIndexPage = (nextPage - 1) * countToolsOnPage
        return minNextIndexPage <= maxIndexTools
    }

    handlePrevPage = (event) => {
        event.preventDefault()
        const { currentPage } = this.props
        if(currentPage > 1) {
            let copyCurrentPage = currentPage
            let prevPage = --copyCurrentPage
            const { changeCurrentPage } = this.props
            changeCurrentPage(prevPage)
        }
    }

    handleNextPage = (event) => {
        event.preventDefault()
        const { currentPage, tools, countToolsOnPage } = this.props
        let copyCurrentPage = currentPage
        let nextPage = ++copyCurrentPage
        const check = this.checkMaxPage(nextPage, tools, countToolsOnPage)
        if(check) {
            const { changeCurrentPage } = this.props
            changeCurrentPage(nextPage)
        }
    }

    render() {
        const { currentPage, handleNextPage, handlePrevPage } = this.props
        console.log( currentPage, handleNextPage, handlePrevPage )
        return (
            <PagingListComponent 
                currentPage = { currentPage }
                handleNextPage = { this.handleNextPage }
                handlePrevPage = { this.handlePrevPage }
            />
        );
    }
}

const mapStateToProps = (state) => {
    return {
        tools: state.toolsReducer.tools,
        currentPage: state.toolsReducer.currentPage,
        countToolsOnPage: state.toolsReducer.countToolsOnPage
    }
}

const mapDispatchToProps = (dispatch) => ({
    changeCurrentPage: bindActionCreators(changeCurrentPage, dispatch)
})

export default connect(mapStateToProps, mapDispatchToProps)(PagingListContainer)