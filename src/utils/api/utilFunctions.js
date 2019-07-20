import firebase from 'firebase/app';
import 'firebase/auth';
import axios from 'axios';
import { baseURL } from './constants';

/***
 * Makes an HTTP GET request to specified url with given params
 * @param url
 * @param params
 * @param dummy
 * @returns {Promise<any>}
 */
export function getRequest(url, params = {}, dummy = false) {
  if (dummy) {
    return new Promise((resolve) => {
      resolve({
        data: {
          Triggers: [
            {
              id: '1',
              name: 'Test Trigger',
              triggerType: 'Periodic',
              integrationWebhook: 'https://google.com',
              integration: 'Slack',
              triggerImage: 'https://s3.eu-gb.objectstorage.softlayer.net/feynlab-dashboard-images/slack-logo.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Expires=315569260&X-Amz-Credential=09395f1b45194d909961cdb1ef9a287c%2F20181221%2Feu-gb-standard%2Fs3%2Faws4_request&X-Amz-SignedHeaders=host&X-Amz-Date=20181221T145005Z&X-Amz-Signature=ede33d933c6d84336ac46cad07bad4f0b54985339c71a0956da2c23379e46f5a',
              thresholds: [
                {
                  entity: 'Temperature',
                  min: 18,
                  max: 25,
                  timestamp_min: 0,
                  timestamp_max: 0
                }
              ]
            },
            {
              id: '2',
              name: 'Test Trigger 2',
              triggerType: 'Alert',
              integrationWebhook: 'https://google.com',
              integration: 'Slack',
              triggerImage: 'https://s3.eu-gb.objectstorage.softlayer.net/feynlab-dashboard-images/slack-logo.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Expires=315569260&X-Amz-Credential=09395f1b45194d909961cdb1ef9a287c%2F20181221%2Feu-gb-standard%2Fs3%2Faws4_request&X-Amz-SignedHeaders=host&X-Amz-Date=20181221T145005Z&X-Amz-Signature=ede33d933c6d84336ac46cad07bad4f0b54985339c71a0956da2c23379e46f5a',
              thresholds: [
                {
                  entity: 'Temperature',
                  min: 18,
                  max: 25,
                  timestamp_min: 0,
                  timestamp_max: 0
                }
              ]
            },
          ],
        }
      });
    });
  }
  return new Promise((resolve, reject) => {
    firebase
      .auth()
      .currentUser
      .getIdToken(false)
      .then(token => {
        axios({
          method: 'GET',
          headers: { Authorization: `Bearer ${token}` },
          baseURL,
          url,
          params
        })
          .then(result => resolve(result))
          .catch(error => reject(error));
      }).catch(error => {
      reject(error);
    });
  });
}

/***
 * Makes an HTTP GET request to specified url with given params
 * @param url
 * @param params
 * @param data
 * @returns {Promise<any>}
 */
export function postRequest(url, params = {}, data) {
  return new Promise((resolve, reject) => {
    firebase
      .auth()
      .currentUser
      .getIdToken(false)
      .then(token => {
        axios({
          method: 'POST',
          headers: { Authorization: `Bearer ${token}` },
          baseURL,
          url,
          params,
          data
        })
          .then(result => resolve(result))
          .catch(error => reject(error));
      }).catch(error => {
      reject(error);
    });
  });
}

/***
 * Makes an HTTP PUT request to specified url with given params
 * @param url
 * @param params
 * @param data
 * @returns {Promise<any>}
 */
export function putRequest(url, params = {}, data) {
  return new Promise((resolve, reject) => {
    firebase
      .auth()
      .currentUser
      .getIdToken(false)
      .then(token => {
        axios({
          method: 'PUT',
          headers: { Authorization: `Bearer ${token}` },
          baseURL,
          url,
          params,
          data
        })
          .then(result => resolve(result))
          .catch(error => reject(error));
      }).catch(error => {
      reject(error);
    });
  });
}

/***
 * Makes an HTTP DELETE request to specified url with given params
 * @param url
 * @param params
 * @returns {Promise<any>}
 */
export function deleteRequest(url, params = {}) {
  return new Promise((resolve, reject) => {
    firebase
      .auth()
      .currentUser
      .getIdToken(false)
      .then(token => {
        axios({
          method: 'DELETE',
          headers: { Authorization: `Bearer ${token}` },
          baseURL,
          url,
          params,
        })
          .then(result => resolve(result))
          .catch(error => reject(error));
      }).catch(error => {
      reject(error);
    });
  });
}

