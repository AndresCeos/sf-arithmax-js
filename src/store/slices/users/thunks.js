import axios from 'axios';
import localForage from 'localforage'
import { clientConfig } from "../../../resources/Helper"


export const syncUserInfo = async userData => {
  const { token } = await localForage.getItem('session');
  const config = {
    headers: { Authorization: `Bearer ${token}` }
  }
  const restApiUrl = `${clientConfig.siteUrl}/wp-json/app/v1/u`;
  axios.post( restApiUrl, userData, config )
    .then( res => {
      console.log( res )
    })
}