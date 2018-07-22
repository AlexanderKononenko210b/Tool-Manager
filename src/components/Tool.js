import React, { Component } from 'react'
import PropTypes from 'prop-types'

class Tool extends Component {
    static propTypes = {
        tool: PropTypes.shape({
            id: PropTypes.string.isRequared,
            name: PropTypes.string.isRequared,
            type: PropTypes.string.isRequared,
            location: PropTypes.string.isRequared
        })
    }

    render() {
        const {tool} = this.props

        return (
            <div>
                <tr>
                    <td onClick = {this.handleUpdateTool}>{tool.name}</td>
                    <td>{tool.type}</td>
                    <td>{tool.location}</td>
                </tr>
            </div>
        )
    }

    handleUpdateTool = (ev) => {
        console.log('---', 'redirectToUpdate')
    }
}

export default Tool