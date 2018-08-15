import React from 'react'
import PropTypes from 'prop-types'
import { Alert } from 'react-bootstrap/lib'

const ErrorShowComponent = (props) => {
    const { errorMessage } = props
    return (
        <Alert bsStyle= "warning" >
            <strong>{errorMessage}</strong>
        </Alert>
    )
}

ErrorShowComponent.propTypes = {
    errorMessage: PropTypes.string.isRequired
}

export default ErrorShowComponent