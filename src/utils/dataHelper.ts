/* eslint-disable no-fallthrough */
import axios from 'axios';
import { BASE_URL } from '../config';
import { auth } from '../firebase';

export const getRequest = async (url: any, params = {}) => {
  await new Promise((resolve, reject) => {
    auth
      .onAuthStateChanged()
      .then((user: any) =>
        user
          .getIdToken(false)
          .then((token: string) => {
            axios({
              method: 'GET',
              headers: { Authorization: `Bearer ${token}` },
              baseURL: BASE_URL,
              url,
              params
            })
              .then(result => resolve(result))
              .catch(error => reject(error.response.data));
          })
          .catch((error: any) => {
            reject(error);
          })
      )
      .catch((error: any) => {
        reject(error);
      });
  });
};

export const postRequest = async (url: any, params = {}, data: {}) => {
  await new Promise((resolve, reject) => {
    auth
      .onAuthStateChanged()
      .then((user: any) =>
        user
          .getIdToken(false)
          .then((token: string) => {
            axios({
              method: 'POST',
              headers: { Authorization: `Bearer ${token}` },
              baseURL: BASE_URL,
              url,
              params,
              data
            })
              .then(result => resolve(result))
              .catch(error => reject(error.response.data));
          })
          .catch((error: any) => {
            reject(error);
          })
      )
      .catch((error: any) => {
        reject(error);
      });
  });
};

export const putRequest = async (url: any, params = {}, data: {}) => {
  await new Promise((resolve, reject) => {
    auth
      .onAuthStateChanged()
      .then((user: any) =>
        user
          .getIdToken(false)
          .then((token: string) => {
            axios({
              method: 'PUT',
              headers: { Authorization: `Bearer ${token}` },
              baseURL: BASE_URL,
              url,
              params,
              data
            })
              .then(result => resolve(result))
              .catch(error => reject(error.response.data));
          })
          .catch((error: any) => {
            reject(error);
          })
      )
      .catch((error: any) => {
        reject(error);
      });
  });
};
