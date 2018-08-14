import React from 'react';
import PropTypes from 'prop-types'
import Button from 'react-bootstrap/lib/Button'
import Badge from 'react-bootstrap/lib/Badge'

const  PagingListComponent = (props) => {
    const { currentPage, handleNextPage, handlePrevPage } = props
    return (
        <div>
            <Button onClick = {handlePrevPage} bsStyle="primary">
                prev
            </Button>
            <Badge>{currentPage}</Badge>
            <Button onClick = {handleNextPage} bsStyle="primary">
                next
            </Button>
        </div>
    );
}

PagingListComponent.propTypes = {
    currentPage: PropTypes.number.isRequired,
    handleNextPage: PropTypes.func.isRequired,
    handlePrevPage: PropTypes.func.isRequired
}

export default PagingListComponent;