import React, { Component } from 'react'
import Tool from './Tool'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'

class ToolTable extends Component {
    static propTypes = {
        //from connect
        tools: PropTypes.array.isRequired
    }

    render() {
        const {tools} = this.props

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
					    {tools.map(tool => {
								return (
									<Tool tool = {tool}/>
								)
							})}
                    </tbody>
				</table>
			</div>
        )
    }
}

export default connect(state => ({tools: state.tools}))(ToolTable)