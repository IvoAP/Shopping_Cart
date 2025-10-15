import axios from "axios"

const api = axios.create({
  baseURL: "https://fakestoreapi.com",
  timeout: 10000, // 10 seconds
  headers: {
    "Content-Type": "application/json"
  }
})


api.interceptors.request.use(
  (config) => {
    console.log(`Request: ${config.method?.toUpperCase()} ${config.url}`)
    return config
  },
  (error) => {
    return Promise.reject(error)
  }
)


api.interceptors.response.use(
  (response) => {
    console.log(`Response: ${response.status} ${response.config.url}`)
    return response
  },
  (error) => {
    console.error(`Error: ${error.message}`)
    return Promise.reject(error)
  }
)

export default api
