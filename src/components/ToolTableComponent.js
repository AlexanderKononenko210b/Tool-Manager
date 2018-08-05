import React from 'react'
import ToolComponent from './ToolComponent'
import PropTypes from 'prop-types'

const ToolTable = (props) => {
    const { tools, handleUpdateTool} = props
    return (
        <div>
            <table>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Type</th>
                        <th>Location</th>
                    </tr>
                </thead>
                <tbody>
                    { tools.map(tool => {

                            return (
                                <ToolComponent
                                    key = {tool.id} 
                                    tool = {tool} 
                                    handleUpdateTool = {handleUpdateTool} />
                            )
                        })
                    }
                </tbody>
            </table>
        </div>
    )
}

ToolTable.propTypes = {
    tools: PropTypes.array.isRequired,
    handleUpdateTool: PropTypes.func.isRequired
 }

export default ToolTable