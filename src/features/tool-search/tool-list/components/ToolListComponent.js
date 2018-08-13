import React from 'react';
import PropTypes from 'prop-types'
import ToolTableComponent from './ToolTableComponent'

const ToolListComponent = (props) => {
    const { tools, header } = props
    const { handleAddTool, handleUpdateTool } = props
    return (
        <div>
            <h2>{header}</h2>
            <button
                onClick = {handleAddTool}>
                + Add
            </button>
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