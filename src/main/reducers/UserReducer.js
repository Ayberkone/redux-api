import { UserConstants } from '../constants';


export function users(state = { isLoading: false }, action) {
    switch (action.type) {
        case UserConstants.FETCH_USERS_SUCCESS:
            return {
                data: action.users.data.results,
                isLoading: true
            };
        case UserConstants.FETCH_USERS_ERROR:
            return {
                error: action.error,
                isLoading: false
            };
        default:
            return state
    }
}