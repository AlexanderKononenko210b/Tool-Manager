import React from 'react';
import PropTypes from 'prop-types'

const  PagingListComponent = (props) => {
    const { currentPage, handleNextPage, handlePrevPage } = props
    return (
        <div>
            <button onClick = {handlePrevPage}>
                prev
            </button>
            <label>{currentPage}</label>
            <button onClick = {handleNextPage}>
                next
            </button>
        </div>
    );
}

PagingListComponent.propTypes = {
    currentPage: PropTypes.number.isRequired,
    handleNextPage: PropTypes.func.isRequired,
    handlePrevPage: PropTypes.func.isRequired
}

export default PagingListComponent;