import axios from "axios";
const instance = axios.create({
    baseURL: process.env.NEXT_PUBLIC_BASE_URL
  });

  instance.defaults.headers.common['Authorization'] = "AUTH TOKEN"
  instance.defaults.headers.common['Content-Type'] = 'application/json'


  instance.interceptors.request.use((request) => request, (error) => error)
  instance.interceptors.response.use((request) => request, (error) => error)

export default instance