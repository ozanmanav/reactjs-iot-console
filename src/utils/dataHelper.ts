/* eslint-disable no-fallthrough */
import axios from 'axios';
import { firebase } from '../firebase';
import { BASE_URL } from '../config';

export function getRequest(url: any, params = {}) {
    const baseURL = BASE_URL || '';
    return new Promise((resolve, reject) => {
        firebase &&
            firebase.auth &&
            firebase.auth.currentUser &&
            firebase.auth.currentUser
                .getIdToken(false)
                .then((token) => {
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
                .catch((error) => {
                    reject(error);
                });
    });
}
