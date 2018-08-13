import { Actions } from '../../shared/constants'

export const changeCurrentPage = (newPage) => {
    return {
        type: Actions.CHANGE_CURRENT_PAGE,
        payload: newPage
    }
}
