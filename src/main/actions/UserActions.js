import { UserConstants } from '../constants';
import { UserService } from "../services";

export const UserActions = {
    getUsers
};

function getUsers() {
    return dispatch => {
        UserService.getUsers().then(
            users => dispatch(success(users)),
            error => dispatch(failure(error))
        );

        function success(users) {
            return { type: UserConstants.FETCH_USERS_SUCCESS, users}
        }

        function failure(error) {
            return { type: UserConstants.FETCH_USERS_ERROR, error }
        }

    }
}