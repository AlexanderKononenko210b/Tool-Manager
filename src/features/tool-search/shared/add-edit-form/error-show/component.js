import React from 'react'
import PropTypes from 'prop-types'
import { Alert } from 'react-bootstrap/lib'

const ErrorShow = (props) => {
    const { errorMessage } = props
    return (
        <Alert bsStyle= "warning" >
            <strong>{errorMessage}</strong>
        </Alert>
    )
}

ErrorShow.propTypes = {
    errorMessage: PropTypes.string.isRequired
}

export default ErrorShow