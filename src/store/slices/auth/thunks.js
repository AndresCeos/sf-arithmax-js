import { checkingCredentials, login, logout, updateUserInfo } from './'
import { setUsers } from '../users/users'
import localForage from 'localforage'

import axios from 'axios';
import { clientConfig } from "../../../resources/Helper"
import { checkAvailabilityDevices } from '../users/thunks';

export const checkingAuthentication = (email, password) => {
  return async (dispatch) => {
    dispatch(checkingCredentials())
  }
}

export const startLogin = (userData) => {
  return async (dispatch) => {

    dispatch(checkingCredentials())

    const restApiUrl = `${clientConfig.siteUrl}/wp-json/jwt-auth/v1/token`;
    axios.post(restApiUrl, userData)
      .then(res => {
        if (res.data.token) {
          const user = {
            'token': res.data.token,
            'names': res.data.user_first_name,
            'lastName': res.data.user_last_name,
            'scdLastName': res.data.user_scd_last_name,
            'photoURL': res.data.photoURL,
            'date': res.data.birthDate,
            "email": res.data.user_email,
            "company": res.data.user_company,
            "tel": res.data.user_phone,
            'address': res.data.company_direction,
            'webSite': res.data.company_website,
            'logoURL': res.data.company_logo,
            phone: res.data.company_phone,
          }
          dispatch(login(user))
          if (res.data?.user_consultants.length > 0) {
            dispatch(setUsers(res.data?.user_consultants))
          }
          localForage.setItem('session', { status: 'authenticated', ...user })
        }
      }).catch(err => {
        const message = getErrorMessage(err.response.data.data.status)

        localForage.removeItem('session', () => {
          dispatch(logout({ errorMessage: message }))
        })
      })
  }
}

const getErrorMessage = code => {
  switch (code) {
    case 403: return "Datos incorrectos"
    default: return "Datos incorrectos"
  }
}

export const fetchStatus = () => async dispatch => {
  await checkAvailabilityDevices(dispatch);
  await localForage.getItem('session', (e, session) => {
    if (session !== null) {
      dispatch(login(session))
    } else {
      dispatch(checkingCredentials({ payload: 'not-authenticated' }))
    }
  })
}

export const updateUserProfile = (user) => async dispatch => {
  try {
    const session = await localForage.getItem('session');
    const config = {
      headers: { Authorization: `Bearer ${session.token}` }
    }
    const restApiUrl = `${clientConfig.siteUrl}/wp-json/app/v1/p`;
    axios.post(restApiUrl, user, config)
      .then(res => {
        localForage.setItem('session', { ...session, ...res.data }).then((r) => {
          dispatch(updateUserInfo(res.data))
        })
      })
  } catch (error) {

  }
}

export const startLogout = () => {
  return async dispatch => {
    localForage.removeItem('session', () => {
      localForage.removeItem('users')
      dispatch(logout({ errorMessage: 'startLogout' }))
      window.location.reload(false);
    })
  }
}