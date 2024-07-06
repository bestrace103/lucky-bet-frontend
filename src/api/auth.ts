// utils
import axios, { endpoints } from 'src/utils/axios';
import { LoginProps, RegisterProps } from './types';


// casino all games
export async function userLogin(data: LoginProps) {
    const loginEndpoint = endpoints.auth.login;
    const res = await axios.post(loginEndpoint, data);
    return res.data;
}

export async function userRegister(data: RegisterProps) {
    const registerEndpoint = endpoints.auth.register;
    const res = await axios.post(registerEndpoint, data);
    return res.data;
}

