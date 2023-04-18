import axios from '../pages/api/axios';

export const LoginUserAdmin = (data) => {
    return axios.post('/user/login', data);
};
