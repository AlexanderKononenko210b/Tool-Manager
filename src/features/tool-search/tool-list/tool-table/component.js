import React from 'react'
import PropTypes from 'prop-types'
import Table from 'react-bootstrap/lib/Table'

import ToolComponent from '../tool'
import '../../../../core/style.css'

const ToolTable = (props) => {
    const { tools, handleUpdateTool} = props
    return (
        <div className = "div_table">
            <Table striped bordered condensed hover id = "table_list">
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
            </Table>
        </div>
    )
}

ToolTable.propTypes = {
    tools: PropTypes.array.isRequired,
    handleUpdateTool: PropTypes.func.isRequired
 }

export default ToolTable