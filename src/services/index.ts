import axios from 'axios'
import ROUTES from '../const/routes'

export const cognitoPoolData = {
  UserPoolId: 'ap-south-1_1M7FLYgyw',
  ClientId: '7k6a8mfavvsj2srjkqm828j5di'
}

const api = axios.create({
  baseURL: process.env.REACT_APP_API_BASEURL,
  headers: {
    'content-type': 'application/json; charset=utf-8',
    Accept: 'application/json'
  }
})

api.interceptors.request.use(
  function (config) {
    return config
  },
  function (error) {
    return Promise.reject(error)
  }
)

api.interceptors.response.use(
  (response) => {
    return response
  },
  (error: any) => {
    if (
      error?.response?.status === 401 &&
      window.location.pathname !== ROUTES.LOGIN
    ) {
      window.location.reload()
    }
    return Promise.reject(error)
  }
)

export default api
