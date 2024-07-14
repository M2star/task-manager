import axios from '@/utils/axios'

export const getLogin = (data) => {
   const url = '/signIn'
return axios.post(url, data, { withCredentials: true })
}

export const getSignIn = (data) => {
   const url = '/signUp'
return axios.post(url, data)
}