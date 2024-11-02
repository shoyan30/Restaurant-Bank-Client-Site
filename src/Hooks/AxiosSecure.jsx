import axios from 'axios';
import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../Provider/AuthProvider';

const axiosSecure = axios.create({
    baseURL: "http://localhost:5000"
})

const AxiosSecure = () => {

    const navigate = useNavigate();
    const { logOut } = useContext(AuthContext)
    axiosSecure.interceptors.request.use(function (config) {
        const token = localStorage.getItem('Access-Token')
        console.log('Request stopped by interceptor', token)
        config.headers.authorization = `Bearer ${token}`;
        return config;
    }, function (error) {
        return Promise.reject(error)
    });


    axiosSecure.interceptors.response.use(function (response) {
        return response;

    }, (error) => {

        const status = error.response.status;
        console.log('Status Error in interseptor', status);
        if (status === 401 || status === 403) {
            logOut()
                .then(res => {
                    console.log(res.data)
                })
            navigate('/login')
        }
        return Promise.reject(error);
    });

    return axiosSecure;
};

export default AxiosSecure;