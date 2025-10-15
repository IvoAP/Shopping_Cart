import axios from "axios"

const api = axios.create({
  baseURL: "https://fakestoreapi.com",
  timeout: 10000, // 10 segundos
  headers: {
    "Content-Type": "application/json"
  }
})


api.interceptors.request.use(
  (config) => {
    // Você pode adicionar tokens, logs, etc aqui
    console.log(`📡 Request: ${config.method?.toUpperCase()} ${config.url}`)
    return config
  },
  (error) => {
    return Promise.reject(error)
  }
)


api.interceptors.response.use(
  (response) => {
    console.log(`✅ Response: ${response.status} ${response.config.url}`)
    return response
  },
  (error) => {
    console.error(`❌ Error: ${error.message}`)
    // Você pode adicionar tratamento de erro global aqui
    return Promise.reject(error)
  }
)

export default api
