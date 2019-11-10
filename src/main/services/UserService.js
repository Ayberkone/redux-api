import api from '../utils/api';

export const UserService = {
    getUsers
};

function getUsers() {
    return api.get('?results=20')
        .then(response => {
            return response;
        })
        .catch(error => {
            let errorData = error.response;
            return Promise.reject((errorData && errorData.message) || errorData.statusText);
        });
}
