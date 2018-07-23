import React from 'react'
import {UPDATE_FORM} from '../constants/headersName'
import AddUpdateForm from '../forms/AddUpdateForm'

function UpdateTool () {
    const {tool, handleSubmit, pristine, submitting} = this.props
    return (
        <div>
            <h2>{UPDATE_FORM}</h2>
            <AddUpdateForm tool = {tool} handleSubmit = {handleSubmit} 
            pristine = {pristine} submitting = {submitting}/>
        </div>
    )
}

export default UpdateTool