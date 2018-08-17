import React from 'react';
import PropTypes from 'prop-types'
import { Button, PageHeader } from 'react-bootstrap/lib'

import ToolTableComponent from '../tool-table'

const ToolListComponent = (props) => {
    const { tools, header } = props
    const { handleAddTool, handleUpdateTool } = props
    return (
        <div className = "list_page">
            <PageHeader>{header}</PageHeader>
            <Button bsStyle="primary" id = "button"
                onClick = {handleAddTool}>
                + Add
            </Button>
            <ToolTableComponent tools = {tools} handleUpdateTool = {handleUpdateTool} />
        </div>
    )
}

ToolListComponent.propTypes = {
    tools: PropTypes.array.isRequired,
    header: PropTypes.string.isRequired,
    handleAddTool: PropTypes.func.isRequired,
    handleUpdateTool: PropTypes.func.isRequired
}

export default ToolListComponent;