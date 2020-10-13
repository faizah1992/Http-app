import axios from 'axios'
import {toast} from 'react-toastify'
import Raven from 'raven-js'

axios.interceptors.response.use(null, error => {
    const expectedError = error.response && error.response.status >= 400 && error.response.status < 500 
    if (!expectedError){
        Raven.captureException(error)
      toast.error("An unexpected error occurred.")
    }
    return Promise.reject(error)
  })

  export default {
      get: axios.get,
      post: axios.put,
      put: axios.put,
      delete: axios.delete
  }