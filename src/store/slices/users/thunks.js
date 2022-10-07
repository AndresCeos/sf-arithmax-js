import axios from 'axios';
import localForage from 'localforage';
import { clientConfig } from '../../../resources/Helper';
import { expired, logout } from '../auth/authSlice';
import { setUserList } from './users';

export const checkAvailabilityDevices = async (dispatch) => {
  if (!localStorage.getItem('loading') || localStorage.getItem('loading') === 'false') {
    try {
      const { token } = await localForage.getItem('session');
      const m = localStorage.getItem('m');
      localStorage.setItem('loading', true);
      const config = {
        headers: { Authorization: `Bearer ${token}` }
      }
      const restApiUrl = `${clientConfig.siteUrl}/wp-json/app/v1/d`;
      axios.post(restApiUrl, { m }, config)
        .then(res => {
          localStorage.setItem('loading', false);
          localForage.getItem('users', (err, users) => {
            console.log({ users })
            console.log({ res: res.data.user_consultants })
            if (JSON.stringify(users) !== JSON.stringify(res.data.user_consultants)) {
              dispatch(setUserList(res.data.user_consultants))
              localForage.setItem('users', res.data.user_consultants)
            }
            // if (Object.keys(users).length !== Object.keys(res.data.user_consultants).length) {
            // }
          })
          console.log({ data: res.data })
          console.log({ app_version: res.data.app_version })
          if (res.data.app_version !== localStorage.getItem('app_version')) {
            localStorage.setItem('app_version', res.data.app_version)
            localStorage.setItem('app_version_alert', true)
          }
          if (res.data.notifications_version !== localStorage.getItem('notifications_version')) {
            localStorage.setItem('notifications_alert', true)
            localStorage.setItem('notifications_version', res.data.notifications_version)
            localStorage.setItem('notifications', res.data.notifications)
          }
          if (res.data.msg === 'full') {
            dispatch(logout({ errorMessage: 'límite de dispositivos alcanzado' }))
          }
        }).catch(error => {
          localStorage.setItem('loading', false);
          console.log({ error })
          dispatch(expired({ errorMessage: 'sesion caducada' }))
        })
    } catch (error) {
      console.log({ error })
      dispatch(logout({ errorMessage: '' }))
    }
  }
}

export const syncUserInfo = async userData => {
  const { token } = await localForage.getItem('session');
  const config = {
    headers: { Authorization: `Bearer ${token}` }
  }
  const restApiUrl = `${clientConfig.siteUrl}/wp-json/app/v1/u`;
  axios.post(restApiUrl, userData, config)
    .then(res => {
      console.log({ syncUserInfo: res, userData })
    })
}

export const syncGuests = async guests => {
  const { token } = await localForage.getItem('session');
  const config = {
    headers: { Authorization: `Bearer ${token}` }
  }
  const restApiUrl = `${clientConfig.siteUrl}/wp-json/app/v1/g`;
  axios.post(restApiUrl, guests, config)
    .then(res => {
      console.log({ guests: res, req: guests })
    })
}