import React from 'react'
import PropTypes from 'prop-types'

const Tool = (props) => {
    const { tool, handleUpdateTool } = props
    return (
        <tr>
            <td 
                key = {tool.id} 
                id = {tool.id} 
                className = "tool_name"
                onClick = {handleUpdateTool}>
                    {tool.name}
                </td>
            <td className = "type_typeTool" >{tool.typeTool}</td>
            <td className = "type_location" >{tool.location}</td>
        </tr>
    )
}

Tool.propTypes = {
    tool: PropTypes.object.isRequired,
    handleUpdateTool: PropTypes.func.isRequired
}

export default Tool