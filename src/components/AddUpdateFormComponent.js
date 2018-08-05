import React from 'react'
import PropTypes from 'prop-types'

import {Types} from '../constants'
import {Locations} from '../constants'

const AddUpdateFormComponent = (props) => {
    const { name, typeTool, location } = props
    const { handleSave, handleCancel, handleChangeName, handleChangeType, handleChangeLocation } = props
    return (
        <form onSubmit={handleSave}>
            <div>
                <label>Name:</label>
                <div>
                    <input 
                        name = "tool_name" 
                        onChange = {handleChangeName} 
                        value = {name} 
                        type="text" 
                        placeholder="Name..."
                    />
                </div>
            </div>
            <div>
                <label>Type:</label>
                <div>
                    <select name = "tool_type" value = {typeTool} onChange = { handleChangeType } >
                        <option defaultValue="">Type...</option>
                        <option value = {Types.DRILL_TYPE}>Drill</option>
                        <option value = {Types.CUT_TYPE}>Cut</option>
                        <option value = {Types.MILL_TYPE}>Mill</option>
                    </select>
                </div>
            </div>
            <div>
                <label>Location:</label>
                <div>
                    <select name="tool_location" value = {location} onChange = { handleChangeLocation }>
                        <option defaultValue="">Location...</option>
                        <option value = {Locations.BOX_A}>Box-A</option>
                        <option value = {Locations.BOX_B}>Box-B</option>
                        <option value = {Locations.BOX_C}>Box-C</option>
                    </select>
                </div>
            </div>
            <div>
                <button type="submit">
                    Save
                </button>
                <button type="cancel" 
                    onClick={handleCancel}>
                        Cancel
                </button>
            </div>
        </form>
    )
}

AddUpdateFormComponent.propTypes = {
    name: PropTypes.string.isRequired,
    typeTool: PropTypes.string.isRequired,
    location: PropTypes.string.isRequired,
    handleSave: PropTypes.func.isRequired,
    handleCancel: PropTypes.func.isRequired,
    handleChangeName: PropTypes.func.isRequired,
    handleChangeType: PropTypes.func.isRequired,
    handleChangeLocation: PropTypes.func.isRequired
}

export default AddUpdateFormComponent