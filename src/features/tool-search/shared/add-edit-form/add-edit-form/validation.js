export const nameValidation = (value) => {
    if(!value) {
        return 'Name is required'
    } else {
        if(value.length < 3) {
            return 'Name must be more or equal 3 symbols'
        } else {
            if(value.length > 20) {
                return 'Name must be less or equal 20 symbols'
            } else {
                return ''
            }
        }
    }
}

export const toolTypeValidation = (value) => {
    if(!value) {
        return 'Type tool is required'
    } else {
        return ''
    }
}

export const locationValidation = (value) => {
    if(!value) {
        return 'Location is required'
    } else {
        return ''
    }
}