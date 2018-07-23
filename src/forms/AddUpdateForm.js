import React, { Component } from 'react'
import { Field } from 'redux-form'
import PropTypes from 'prop-types'
import {DRILL_TYPE, CUT_TYPE, MILL_TYPE} from '../constants/typesTool'
import {BOX_A, BOX_B, BOX_C} from '../constants/locationsName'

class AddUpdateForm extends Component {
    static propTypes = {
        tool: PropTypes.shape({
            id: PropTypes.string,
            name: PropTypes.string,
            type: PropTypes.string,
            location: PropTypes.string
        }),
    }

    render() {
        const { tool, handleSubmit, pristine, submitting } = this.props
        return (
            <div>
                <form onSubmit={handleSubmit}>
                    <div>
                        <label>Name:</label>
                        <div>
                            <Field name="name" component="input" type="text" placeholder="Name"/>
                        </div>
                    </div>
                    <div>
                        <label>Type:</label>
                        <div>
                            <Field name="type" component="select">
                                <option>{DRILL_TYPE}</option>
                                <option>{CUT_TYPE}</option>
                                <option>{MILL_TYPE}</option>
                            </Field>
                        </div>
                    </div>
                    <div>
                        <label>Location:</label>
                        <div>
                            <Field name="location" component="select">
                                <option>{BOX_A}</option>
                                <option>{BOX_B}</option>
                                <option>{BOX_C}</option>
                            </Field>
                        </div>
                    </div>
                    <div>
                        <button type="submit" disabled={pristine || submitting}>
                            Save
                        </button>
                        <button type="cansel" disabled={pristine || submitting} 
                            onClick={this.handleCansel}>
                                Cansel
                        </button>
                    </div>
                </form>
            </div>
        )
    }

    handleCansel = () => {
        console.log('---', 'canseling')
    }
}

export default AddUpdateForm