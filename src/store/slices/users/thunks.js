import axios from 'axios';
import localForage from 'localforage';
import { clientConfig } from '../../../resources/Helper';
import { logout } from '../auth';

export const checkAvailabilityDevices = async (dispatch) => {
  try {
    const { token } = await localForage.getItem('session');
    const m = localStorage.getItem('m');
    const config = {
      headers: { Authorization: `Bearer ${token}` }
    }
    const restApiUrl = `${clientConfig.siteUrl}/wp-json/app/v1/d`;
    axios.post(restApiUrl, { m }, config)
      .then(res => {
        console.log({ data: res.data })
        console.log({ app_version: res.data.app_version })
        if (res.data.app_version !== localStorage.getItem('app_version')) {
          localStorage.setItem('app_version', res.data.app_version)
          localStorage.setItem('app_version_alert', true)
        }
        if (res.data.msg === 'full') {
          dispatch(logout({ errorMessage: 'límite de dispositivos alcanzado' }))
        }
      })
  } catch (error) {
    console.log(error)
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
      console.log(res)
    })
}