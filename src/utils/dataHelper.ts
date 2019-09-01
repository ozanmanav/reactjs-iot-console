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
                    console.log(token);
                    axios({
                        method: 'GET',
                        headers: { Authorization: `Bearer ${token}` },
                        baseURL,
                        url,
                        params,
                    })
                        .then((result) => resolve(result))
                        .catch((error) => reject(error));
                })
                .catch((error: any) => {
                    reject(error);
                });
        });
    });
}
