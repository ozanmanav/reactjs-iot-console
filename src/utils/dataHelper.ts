/* eslint-disable no-fallthrough */
import axios from 'axios';
import { BASE_URL } from '../config';
import { auth } from '../firebase';

export function getRequest(url: any, params = {}) {
    const baseURL = BASE_URL || '';
    return new Promise((resolve, reject) => {
        auth.onAuthStateChanged().then((user: any) => {
            return user
                .getIdToken(false)
                .then((token: string) => {
                    axios({
                        method: 'GET',
                        headers: { Authorization: `Bearer ${token}` },
                        baseURL,
                        url,
                        params
                    })
                        .then(result => resolve(result))
                        .catch(error => reject(error.response.data));
                })
                .catch((error: any) => {
                    reject(error);
                });
        });
    });
}

export function postRequest(url: any, params = {}, data: {}) {
    const baseURL = BASE_URL || '';
    return new Promise((resolve, reject) => {
        auth.onAuthStateChanged().then((user: any) => {
            return user
                .getIdToken(false)
                .then((token: string) => {
                    console.log('post token', token);
                    axios({
                        method: 'POST',
                        headers: { Authorization: `Bearer ${token}` },
                        baseURL,
                        url,
                        params,
                        data
                    })
                        .then(result => resolve(result))
                        .catch(error => reject(error.response.data));
                })
                .catch((error: any) => {
                    reject(error);
                });
        });
    });
}

export function putRequest(url: any, params = {}, data: {}) {
    const baseURL = BASE_URL || '';
    return new Promise((resolve, reject) => {
        auth.onAuthStateChanged().then((user: any) => {
            return user
                .getIdToken(false)
                .then((token: string) => {
                    console.log('post token', token);
                    axios({
                        method: 'PUT',
                        headers: { Authorization: `Bearer ${token}` },
                        baseURL,
                        url,
                        params,
                        data
                    })
                        .then(result => resolve(result))
                        .catch(error => reject(error.response.data));
                })
                .catch((error: any) => {
                    reject(error);
                });
        });
    });
}
