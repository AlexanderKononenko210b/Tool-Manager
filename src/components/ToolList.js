import React, { Component } from 'react'
import { TOOL_LIST } from '../constants/headersName'
import ToolTable from './ToolTable';

class ToolList extends Component {

    render() {
        
        return (
            <div>
                <h2>{TOOL_LIST}</h2>
                <button
                    onClick = {this.handleAddTool}>
                    + Add
                </button>
                <ToolTable/>
                <div>
                    <button onClick = {this.handlePrevPage}>
                        prev
                    </button>
                    <button onClick = {this.handleNextPage}>
                        next
                    </button>
                </div>
            </div>
        )
    }

    handleAddTool = () => {
        console.log('---', 'addTool');
    }
    
    handlePrevPage = () => {
        console.log('---', 'prevPage');
    }
    
    handleNextPage = () => {
        console.log('---', 'nextPage');
    }
}

export default ToolList