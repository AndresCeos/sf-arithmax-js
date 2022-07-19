import { checkingCredentials, login, logout } from './'
import localForage from 'localforage'

import axios from 'axios';
import { clientConfig } from "../../../resources/Helper"

export const checkingAuthentication = ( email, password ) => {
  return async( dispatch ) => {
    dispatch( checkingCredentials() )
  }
}

export const startLogin = ( userData ) => {
  return async( dispatch ) => {

    dispatch( checkingCredentials() )

    const restApiUrl = `${clientConfig.siteUrl}/wp-json/jwt-auth/v1/token`;
    axios.post( restApiUrl, userData )
      .then( res => {
        if( res.data.token ){
          const user = {
            'token': res.data.token,
            'names': res.data.user_first_name,
            'lastName': res.data.user_last_name,
            'scdLastName': res.data.user_scd_last_name,
            'photoURL': res.data.photoURL,
            'date': res.data.birthDate,
          }
          dispatch(login(user))
          localForage.setItem('session', { status: 'authenticated', ...user})
        }
      }).catch( err => {
        // console.log( err.response.data.data.status )
        const message = getErrorMessage( err.response.data.data.status )

        localForage.removeItem('session', () => {
          dispatch( logout( { errorMessage: message } ) )
          // console.log('logout')
        })
      })
  }
}

const getErrorMessage = code => {
  switch( code ){
    case 403: return "Datos incorrectos"
    default: return "Datos incorrectos"
  }
}

export const fetchStatus = () => async dispatch => {
  await localForage.getItem('session', (e, session) => {
    if( session !== null ){
      dispatch( login(session) )
    } else {
      dispatch( checkingCredentials( { payload: 'not-authenticated' } ) )
    }
  })
}

export const startLogout = () => {
  return async dispatch => {
    localForage.removeItem('session', () => {
      localForage.removeItem('users')
      dispatch( logout( { errorMessage: 'startLogout' } ) )
      window.location.reload(false);
      // console.log('logout')
    })
  }
}