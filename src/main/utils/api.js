import axios from 'axios';

const apiSecure = axios.create({
    baseURL: "https://randomuser.me/api/"
});

apiSecure.interceptors.response.use(function (response) {
    return response;
}, function (error) {
    return Promise.reject(error);
});

export default apiSecure;