"use client"
import axios from '@/utils/axios'

export const getLogin = (data) => {
    console.log(data)
   const url = '/signIn'
return axios.post(url, data)
}
export const getSignIn = (data) => {
    console.log(data)
   const url = '/signUp'
return axios.post(url, data)
}