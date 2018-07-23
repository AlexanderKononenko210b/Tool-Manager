import React from 'react'
import AddUpdateForm from '../forms/AddUpdateForm'
import { ADD_FORM } from '../constants/headersName'

function AddTool () {
    const {tool, handleSubmit, pristine, submitting} = this.props
    return (
        <div>
            <h2>{ADD_FORM}</h2>
            <AddUpdateForm tool = {tool} handleSubmit = {handleSubmit}
             pristine = {pristine} submitting = {submitting}/>
        </div>
    )
}

export default AddTool